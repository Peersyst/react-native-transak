import { ViewStyle } from "react-native";
import { TransakEvent, TransakQueryParams } from "../Transak.types";
import { WebViewProps } from "react-native-webview";

export type ExcludedTransakWebViewProps =
  | "source"
  | "injectJavaScript"
  | "sharedCookiesEnabled"
  | "injectedJavaScript"
  | "injectedJavaScriptBeforeContentLoaded"
  | "style"
  | "containerStyle";

export type WebViewPropsSupportedByTransakWebView = Omit<WebViewProps, ExcludedTransakWebViewProps> & {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
};

export type TransakEventHandler = (event: TransakEvent, data: any) => void;

export interface TransakWebViewProps extends WebViewPropsSupportedByTransakWebView {
  queryParams: TransakQueryParams;
}
