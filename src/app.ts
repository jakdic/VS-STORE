import { SendWaveConfig } from "@app/shared/constant";
import {
  createBot,
  createProvider,
  createFlow,
  MemoryDB as Database,
} from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flows } from "@presentation/export-flows";

const main = async () => {
  const adapterFlow = createFlow(flows);

  const adapterProvider = createProvider(Provider, SendWaveConfig);
  const adapterDB = new Database();

  const { httpServer } = await createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  httpServer(+adapterProvider.globalVendorArgs.port);
};

main();
