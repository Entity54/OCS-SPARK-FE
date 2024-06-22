import React, { useCallback, useEffect, useState } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';
 
import { ethers } from 'ethers';


const buttonStyles = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 18,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};
 
const sdk = new CoinbaseWalletSDK({
  appName: 'My Dapp 123',
  appLogoUrl: 'https://example.com/logo.png',
  appChainIds: [84532,8453],
  // appChainIds: [8453],
});
  

export default function BlueCreateWalletButton({ handleSWSuccess, handleSWError }) {

  const [smartWallet_provider, setSmartWallerProvider]   = useState();

  const [connect, setConnect]   = useState();
  const [disconnect, setDisconnect]   = useState();
  const [accountsChanged, setAccountsChanged]   = useState();
  const [chainChanged, setChainChanged]   = useState();
  const [message, setMessage]   = useState();

  const [newChain, setNewChain]   = useState("");

  // let _provider;
  const createWallet = useCallback(async () => {
    const _provider = sdk.makeWeb3Provider();

    if (_provider) {
      try {
        const accounts = await _provider.request({
          method: 'eth_requestAccounts',
        });

        // Wrap the detected provider with ethers.js provider
        const provider = new ethers.providers.Web3Provider(_provider);

        // Create a signer
        const signer = provider.getSigner();
        console.log("Signer address:", await signer.getAddress());

        // Request account access 
        // const [address] = await provider.send("eth_requestAccounts",[]);
        // const accounts = await provider.send("eth_requestAccounts",[]);
        const address = accounts[0];
        console.log(`SmartWallet address: ${address} accounts: `,accounts);

        // Get network information
        const network = await provider.getNetwork();
        console.log("Smart Wallet Connected to network:", network);

        handleSWSuccess(provider, signer, address, network.chainId);

        setSmartWallerProvider(_provider);
      } catch (error) {
        handleSWError(error);
      }

   }
   else console.log("No Ethereum Provider detected");

  }, [handleSWSuccess, handleSWError]);

  const disconnectWallet = async () => {
    if (smartWallet_provider)
    {
      await smartWallet_provider.disconnect();
    }
    localStorage.clear();
  }




  useEffect(() => {
    if (!smartWallet_provider) return;

    smartWallet_provider.on('connect', (info) => {
      console.log(`BASE connect: `,info)
      setConnect(info);
    });
    smartWallet_provider.on('disconnect', (error) => {
      console.log(`BASE disconnect: `);
      // console.log(`BASE disconnect: `,error)
      // setDisconnect({ code: error.code, message: error.message });
      window.location.reload();
    });
    smartWallet_provider.on('accountsChanged', (accounts) => {
      console.log(`BASE accountsChanged: `,accounts)
      setAccountsChanged(accounts);
    });
    smartWallet_provider.on('chainChanged', (chainId) => {
      console.log(`BASE chainChanged: `,chainId,`   Realoading page`)
      setChainChanged(chainId);
        smartWallet_provider.removeAllListeners(); // Clean up all listeners on unmount
        // window.location.reload();
        createWallet();
    });
    smartWallet_provider.on('message', (message) => {
      console.log(`BASE message: `,message)
      setMessage(message);
    });

  }, [smartWallet_provider]);
  //#endregion


   // Function to switch the chain
  const switchChain = async () => {
    let newChainId;
    if (newChain.toLowerCase()==="base") newChainId = 0x2105
    else if (newChain.toLowerCase()==="base sepolia") newChainId = 0x14a34

    try {
        await smartWallet_provider.request({    
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: ethers.utils.hexValue(newChainId) }]
        });
        console.log("Switched to chain:", newChain);
    } catch (error) {
        console.error("Error switching chain:", error);
    }
  }
 
  return (
    <div>
      <button style={buttonStyles} onClick={createWallet}>
        <CoinbaseWalletLogo />
        Connect
      </button>
      <br/>
      <button style={buttonStyles} onClick={switchChain}>
      Switch Chain
      </button>
      <input type="text" value = {newChain} placeholder="" className="form-control fs-14" style={{backgroundColor:"lightgrey",  textAlign:"center", }} 
              onChange={(event) => setNewChain(event.target.value)}
      />
      <br/>
      <br/>

      <button style={buttonStyles} onClick={disconnectWallet}>
        <CoinbaseWalletLogo />
        Disconnet Wallet
      </button>
    </div>
  );
}