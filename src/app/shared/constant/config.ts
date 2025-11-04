import "dotenv/config";
import { GlobalVendorArgs } from "@gamastudio/sendwave-provider";

const {
  PORT,
  SENDWAVE_API_KEY,
  SENDWAVE_NAME,
} = process.env;

export const SendWaveConfig: GlobalVendorArgs = {
  apiKey: SENDWAVE_API_KEY,
  name: SENDWAVE_NAME,
  linkPreview: false,
  message: {
    mergeMessage: true,
    timeMergeMessage: 3,
  },
  port: Number(PORT),
  queueFlow: {
    enabled: false,
    warningTimeout: 10 * 60 * 1000,
    endTimeout: 2 * 60 * 1000,
    warningMessage: "⏳ Parece que has estado inactivo. ¿Sigues ahí?",
  },
};
