<?php
$baseDir = realpath(__DIR__ . '/../src/presentation/flows');
if ($baseDir === false) {
    die('No se pudo localizar la carpeta de flujos.');
}

if (!function_exists('str_starts_with')) {
    function str_starts_with(string $haystack, string $needle): bool
    {
        return strncmp($haystack, $needle, strlen($needle)) === 0;
    }
}

function inBaseDir(string $path, string $baseDir): bool
{
    $realPath = realpath($path);
    if ($realPath === false) {
        return false;
    }
    return str_starts_with($realPath, $baseDir);
}

function collectFlowFiles(string $dir, string $baseDir): array
{
    $entries = scandir($dir);
    if ($entries === false) {
        return [];
    }

    $files = [];
    foreach ($entries as $entry) {
        if ($entry === '.' || $entry === '..') {
            continue;
        }
        $path = $dir . DIRECTORY_SEPARATOR . $entry;
        if (is_dir($path)) {
            $files = array_merge($files, collectFlowFiles($path, $baseDir));
        } elseif (pathinfo($path, PATHINFO_EXTENSION) === 'ts') {
            $files[] = substr($path, strlen($baseDir) + 1);
        }
    }

    sort($files);
    return $files;
}

$message = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $selected = $_POST['file'] ?? '';
    $content = $_POST['content'] ?? '';
    $targetPath = $baseDir . DIRECTORY_SEPARATOR . $selected;

    if ($selected === '' || !inBaseDir($targetPath, $baseDir)) {
        $error = 'Archivo no válido.';
    } elseif (!is_writable($targetPath)) {
        $error = 'El archivo no tiene permisos de escritura.';
    } else {
        if (file_put_contents($targetPath, $content) === false) {
            $error = 'No se pudo guardar el archivo.';
        } else {
            $message = 'Cambios guardados correctamente.';
        }
    }
}

$files = collectFlowFiles($baseDir, $baseDir);
$selectedFile = $_GET['file'] ?? ($_POST['file'] ?? ($files[0] ?? ''));
$selectedPath = $selectedFile ? $baseDir . DIRECTORY_SEPARATOR . $selectedFile : null;
$currentContent = '';
if ($selectedPath && inBaseDir($selectedPath, $baseDir) && is_file($selectedPath)) {
    $currentContent = file_get_contents($selectedPath);
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editor de Flujos</title>
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            font-family: "Segoe UI", Roboto, sans-serif;
            background: #f5f7fa;
            color: #1f2933;
            display: flex;
            min-height: 100vh;
        }
        aside {
            width: 280px;
            background: #1b2838;
            color: #fff;
            padding: 1.5rem 1rem;
            overflow-y: auto;
        }
        h1 {
            font-size: 1.5rem;
            margin-top: 0;
        }
        .file-list {
            list-style: none;
            padding: 0;
            margin: 1rem 0 0;
        }
        .file-list li {
            margin-bottom: 0.5rem;
        }
        .file-list a {
            display: block;
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            color: inherit;
            text-decoration: none;
            background: rgba(255,255,255,0.08);
            transition: background 0.2s;
        }
        .file-list a:hover,
        .file-list a.active {
            background: #3b82f6;
        }
        main {
            flex: 1;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
        }
        .messages {
            min-height: 1.5rem;
        }
        .alert {
            padding: 0.75rem 1rem;
            border-radius: 6px;
            margin-bottom: 1rem;
            display: inline-block;
        }
        .alert.success {
            background: #dcfce7;
            color: #14532d;
        }
        .alert.error {
            background: #fee2e2;
            color: #7f1d1d;
        }
        form {
            display: flex;
            flex: 1;
            flex-direction: column;
        }
        textarea {
            flex: 1;
            width: 100%;
            padding: 1rem;
            border: 1px solid #cbd5e0;
            border-radius: 8px;
            font-family: "Fira Code", monospace;
            font-size: 0.95rem;
            background: #fff;
            resize: vertical;
        }
        .actions {
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;
            gap: 0.75rem;
        }
        button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            background: #2563eb;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        button:hover {
            background: #1d4ed8;
        }
        .file-info {
            margin-bottom: 1rem;
            color: #4b5563;
            font-size: 0.95rem;
        }
        @media (max-width: 768px) {
            body {
                flex-direction: column;
            }
            aside {
                width: 100%;
            }
        }
    </style>
</head>
<body>
<aside>
    <h1>Flujos</h1>
    <ul class="file-list">
        <?php foreach ($files as $file): ?>
            <?php $isActive = $file === $selectedFile; ?>
            <li>
                <a href="?file=<?php echo urlencode($file); ?>" class="<?php echo $isActive ? 'active' : ''; ?>">
                    <?php echo htmlspecialchars($file); ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</aside>
<main>
    <div class="messages">
        <?php if ($message): ?>
            <div class="alert success"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <?php if ($error): ?>
            <div class="alert error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>
    </div>

    <?php if ($selectedFile): ?>
        <div class="file-info">
            Editando: <strong><?php echo htmlspecialchars($selectedFile); ?></strong>
        </div>
        <form method="post">
            <input type="hidden" name="file" value="<?php echo htmlspecialchars($selectedFile); ?>">
            <textarea name="content" spellcheck="false"><?php echo htmlspecialchars($currentContent); ?></textarea>
            <div class="actions">
                <button type="submit">Guardar cambios</button>
            </div>
        </form>
    <?php else: ?>
        <p>No se encontraron archivos de flujo para editar.</p>
    <?php endif; ?>
</main>
</body>
</html>
