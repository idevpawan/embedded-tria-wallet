import {MetaMaskEthereumProvider} from "@metamask/detect-provider";
declare global {
    interface Window{
      ethereum?:MetaMaskEthereumProvider
    }
  }