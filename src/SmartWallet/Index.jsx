import React, { useCallback, useEffect, useState } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';
 
import { ethers } from 'ethers';
import { setup_user_chain, setup_wallet_SW } from "@Setup_EVM";
import UserDropdown from '../Partials/Widgets/UserDropdown/UserDropdownConnected';


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
  appName: 'Spark',
  appLogoUrl: 'https://example.com/logo.png',
  appChainIds: [84532,8453],
});
  

export default function BlueCreateWalletButton({ handleSWSuccess, handleSWError }) {

  const [smartWallet_provider, setSmartWallerProvider]   = useState();
  const [connected, setConnected]   = useState(false);
  const [network, setNetwork]   = useState({chainIdNumber:"", chainIdHex:"", chainName:"", alt_chainIdNumber:"", alt_chainIdHex:"", alt_chainName:"",});

  const [connect, setConnect]   = useState();
  const [disconnect, setDisconnect]   = useState();
  const [accountsChanged, setAccountsChanged]   = useState();
  const [chainChanged, setChainChanged]   = useState();
  const [message, setMessage]   = useState();

 
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
        // const accounts = await provider.send("eth_requestAccounts",[]);
        const address = accounts[0];
        console.log(`SmartWallet address: ${address} accounts: `,accounts);

        // Get network information
        const network = await provider.getNetwork();
        console.log("Smart Wallet Connected to network:", network);

        handleSWSuccess(provider, signer, address, network.chainId);

        setSmartWallerProvider(_provider);
        setConnected(true);


        let chainIdNumber=network.chainId, chainIdHex=(network.chainId).toString(16), chainName, alt_chainIdNumber, alt_chainIdHex, alt_chainName;
        if (network.chainId===8453)
        {
          chainName="Base"; alt_chainIdNumber=84532; alt_chainIdHex=0x14a34; alt_chainName="Sepolia";
        }
        else if (network.chainId===84532)
        {
          chainName="Sepolia"; alt_chainIdNumber=8453; alt_chainIdHex=0x2105; alt_chainName="Base";
        }
        setNetwork({chainIdNumber, chainIdHex, chainName, alt_chainIdNumber, alt_chainIdHex, alt_chainName,});


    setup_wallet_SW(signer, chainIdNumber, chainName, address);
    setup_user_chain(signer, chainIdNumber, address);


      } catch (error) {
        handleSWError(error);
      }

   }
   else console.log("No Ethereum Provider detected");

  }, [handleSWSuccess, handleSWError]);


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


  const disconnectWallet = async () => {
    if (smartWallet_provider)
    {
      await smartWallet_provider.disconnect();
    }
    localStorage.clear();
    setConnected(false);
  }


  const switchChain = async () => {
    try {
        await smartWallet_provider.request({    
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: network.alt_chainIdNumber }]
        });
        console.log("Switched to chain:", network.alt_chainIdNumber);
    } catch (error) {
        console.error("Error switching chain:", error);
    }
  }
 
  return (
    <div>
      {
        connected===true ? (
          <div>
              <a className="dropdown-toggle gray-6 d-flex text-decoration-none align-items-center lh-sm p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="User" data-bs-auto-close="outside">
                  <button style={buttonStyles} >
                    <CoinbaseWalletLogo />
                    Connected
                  </button>
              </a>

              <UserDropdown switchChain={switchChain}  network={network} disconnectWallet={disconnectWallet} />
          </div>
        ) 
        :
        (
          <div>
            <button style={buttonStyles} onClick={createWallet}>
              <CoinbaseWalletLogo />
              Connect
            </button>
          </div>
        )
      }
      <br/>
    </div>
  );
}