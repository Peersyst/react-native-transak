import { Platform } from "react-native";
import { SupportedPaymentMethods, TransakEnviroment, TransakOnRampQueryParams } from "@peersyst/react-native-transak";

export const API_KEY = "//YOUR API GOES HERE//";

export default function useTransakOnRampQueryParams(): TransakOnRampQueryParams {
  const account = "root.near";

  const transakConfig = {
    apiKey: API_KEY,
    defaultCryptoCurrency: "NEAR",
    networks: "mainnet",
    cryptoCurrencyList: "NEAR",
    isFeeCalculationHidden: true,
    environment: "STAGING",
  };

  return {
    ...transakConfig,
    environment: transakConfig.environment as TransakEnviroment,
    walletAddress: account,
    themeColor: "#00A3FF",
    ...(Platform.OS !== "ios" && { disablePaymentMethods: SupportedPaymentMethods.APPLE_PAY }),
  };
}
