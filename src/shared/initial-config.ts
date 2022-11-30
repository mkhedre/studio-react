import { EncryptedLocalStorageDriver } from "@mongez/cache";
import { setAppConfigurations } from "@mongez/react";
import { AES } from "crypto-js";

setAppConfigurations({
  encryption: {
    key: process.env.REACT_APP_CODE_NAME,
    driver: AES,
  },
  cache: {
    prefix: process.env.REACT_APP_CODE_NAME,
    driver: new EncryptedLocalStorageDriver(),
  },
  endpoint: {
    putToPost: true,
    baseUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
