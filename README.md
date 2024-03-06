# @peersyst/react-native-transak

A `React Native` package that facilitates integration with Transak, allowing users to buy and sell cryptocurrencies within your app.

## Installation

```bash
npm i @peersyst/react-native-transak
```

Make sure to install the required peer dependencies:

```bash
npm i react-native-webview
```

## How to use it:

You can find an example of how to use it in the `example` folder.

### Components:

1. **TransakWebView**:

   - This component provides a WebView for displaying the Transak widget, allowing users to buy and sell cryptocurrencies within your app. It handles the communication between your app and the Transak platform seamlessly.

2. **TransakOnRampWebView**:

   - This component specifically facilitates the on-ramp process, enabling users to purchase cryptocurrencies directly within your app. It streamlines the user experience by embedding Transak's on-ramp widget.

3. **TransakOffRampWebView**:
   - Conversely, this component focuses on the off-ramp process, allowing users to sell their cryptocurrencies and withdraw funds directly within your app. It integrates Transak's off-ramp widget to provide a smooth user experience.

Each of these components is designed to simplify the integration of Transak's functionalities into your React Native app, enhancing the user experience and expanding the capabilities of your application.

## TODO:

-[] Support NFT types

-[] Add more example
