import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionMaquinasCertificables = addKeyword<Provider>(
  "FLOW_CERTIFICADO_MAQUINAS_CERTIFICABLES"
).addAction(async ({ from }, { provider , gotoFlow}) => {
  await provider.sendImage({
    from,
    url: "https://machine-training.com/bt/cert.png",
    text: "*LAS MÁQUINAS EN LAS CUALES TE PODEMOS CERTIFICAR*\n\nLas maquinas certificables por competencias laborales son:\n* Excavadoras\n* Retroexcavadoras\n* Cargador frontal\n* Tractor de Oruga\n* Motoniveladora\n* Rodillo Compactador\n* Otros",
  });

  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/certis.mp3",
    delay: 10000,
  });
  await gotoFlow(flowMainCertification)
});
