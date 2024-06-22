'use strict';
console.log(`Setup_EVM.js is loaded`);
import { ethers, Wallet } from "ethers";

// ************************** Import ABIs **************************
import CampaignManager_raw from './Abis/CampaignManager.json';  
import InfuencersManager_raw from './Abis/InfluencersManager.json';
import deploymentData from "./DeploymentData.json";




import BoilerPlate_raw from './Abis/BoilerPlate.json';       
const BoilerPlate_Address_Base_Sepolia = "0x43BFe09b90fBd4f509C24663a4e4E64367b038AA";  //Base Sepolia
const BoilerPlate_Address_Base = "0x522d0EC555aE68970a7235B447b26A3815424bD8";          //Base Mainnet

//Smart Wallet
let wallet_SW, BoilerPlate_SW;
const setup_wallet_SW = (wallet, chainId, chainName, walletAddress) => { 
    console.log(`Setup.js setup_wallet_SW _wallet: `,wallet); 
    let BoilerPlate_Address;
    if (chainId===84532) BoilerPlate_Address = BoilerPlate_Address_Base_Sepolia
    else if (chainId===8453) BoilerPlate_Address = BoilerPlate_Address_Base;

    if (wallet) {
        wallet_SW = wallet;
        console.log("SmartWallet New wallet : ",wallet_SW);
        BoilerPlate_SW = new ethers.Contract( BoilerPlate_Address, BoilerPlate_raw.abi, wallet_SW);
        console.log("New BoilerPlate_SW : ",BoilerPlate_SW);
    }
}

//Smart Wallet - Contracts
const getMyNumber_SW = async () => {
    const value = await BoilerPlate_SW.my_number();
    console.log(`SmartWallet getMyNumber: `,value);
    return value;
};
const getSender_SW = async () => {
    const value = await BoilerPlate_SW.sender();
    console.log(`SmartWallet getSender: `,value);
    return value;
};
const setMyNumber_SW = async (value=123) => {
    const tx = await BoilerPlate_SW.set_my_number(value);
    await tx.wait();
    console.log(`SmartWallet setMyNumber tx: `,tx);
};






// ************************** KEYS **************************//
const RPC_BASE_KEY = import.meta.env.VITE_RPC_BASE_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const public_signer = new Wallet(PRIVATE_KEY);   
// ************************** //



//#region ************************** Set up Chains **************************
const chainSpecs = {
	84532: {
		chainName: "base-sepolia",
		chainId: 84532,
		rpc: `https://api.developer.coinbase.com/rpc/v1/base-sepolia/${RPC_BASE_KEY}`,  //"https://sepolia.base.org",
		chainProvider: "", 
		chainWallet: "", //public_signer.connect(chainProvider),
		contracts: {
			CampaignManager: "", 
			InfuencersManager:"", 
		},
	},
    8453: {
		chainName: "base",
		chainId: 8453,
		rpc: `https://api.developer.coinbase.com/rpc/v1/base/${RPC_BASE_KEY}`,
		chainProvider: "",  
		chainWallet: "", 
		contracts: {
			CampaignManager: "", 
			InfuencersManager:"", 
		},
	},
}
//#endregion ************************** Set up Chains **************************



//#region ************************** Set up Contracts **************************
const setupContracts = async () => {
	Object.keys(chainSpecs).forEach( async (chainId) => {
		const chain = chainSpecs[chainId];
		chain.chainProvider = new ethers.providers.JsonRpcProvider(chain.rpc);
		chain.chainWallet = public_signer.connect(chain.chainProvider);
		if (Object.keys(deploymentData["CampaignManager"]).includes(chain.chainName))
		{
			chain.contracts =
			{
				CampaignManager: new ethers.Contract( deploymentData["CampaignManager"][chain.chainName]["address"] , CampaignManager_raw.abi , chain.chainProvider ), 
				InfuencersManager: new ethers.Contract( deploymentData["InfuencersManager"][chain.chainName]["address"] , InfuencersManager_raw.abi , chain.chainProvider ),

                // CampaignManager: new ethers.Contract( deploymentData["CampaignManager"][chain.chainName]["address"] , CampaignManager_raw.abi , chain.chainWallet ), 
				// InfuencersManager: new ethers.Contract( deploymentData["InfuencersManager"][chain.chainName]["address"] , InfuencersManager_raw.abi , chain.chainWallet ),
			};

		} else chain.contracts = {};
	})
}
//#endregion ************************** Set up Contracts **************************


let provider_Admin;
let CampaignManager_admin, InfuencersManager_admin;
let CampaignManager_user, InfuencersManager_user, userChainName;
// SETTING UP USER CHAIN CONNECTION REFERENCES TO SMART CONTRACTS
const setup_user_chain = async (wallet, chainId, walletAddress) => {
        const userChain 		= chainSpecs[chainId];
        userChainName     = chainSpecs[chainId].chainName;
        console.log(`SETUP_EVM User Chain Selected ===------> : userChainName: ${userChainName} chainId: ${chainId} walletAddress: ${walletAddress}`);
                
        // System References and Contracts
        await setupContracts();

        provider_Admin 			= userChain.chainProvider;
        CampaignManager_admin 	= userChain.contracts.CampaignManager;
        InfuencersManager_admin = userChain.contracts.InfuencersManager;

       // User References and Contracts
        CampaignManager_user   = new ethers.Contract( deploymentData["CampaignManager"][userChainName]["address"] , CampaignManager_raw.abi , wallet );
        InfuencersManager_user = new ethers.Contract( deploymentData["InfuencersManager"][userChainName]["address"] , InfuencersManager_raw.abi , wallet );
}


//#region UITILITIES

//#region ACCOUNT INFO
const getAccountInfo = async (account_address) => { 
	console.log(`getAccountInfo is run`);
	let nonce="", balanceWEI="", balanceETH="", blockNumber="";
	if (account_address!=="0x")
	{
		nonce = await provider_Admin.getTransactionCount(account_address);
		balanceWEI = await provider_Admin.getBalance(account_address); // { BigNumber: "182334002436162568" }
		balanceETH = ethers.utils.formatEther(balanceWEI)              // '0.182334002436162568'
		blockNumber = await provider_Admin.getBlockNumber();
	}
    return {nonce, balanceWEI, balanceETH, blockNumber};
}
//#endregion



//#region READ
const getPendingCampaigns = async () => {
	const pendingCampaignUIDs =  await CampaignManager_admin.get_pendingCampaignUIDs();
	console.log(`pendingCampaignUIDs: `,pendingCampaignUIDs);
	return pendingCampaignUIDs;
}
const getActiveCampaignUIDs = async () => {
	const activeCampaignUIDs =  await CampaignManager_admin.get_activeCampaignUIDs();
	console.log(`activeCampaignUIDs: `,activeCampaignUIDs);
	return activeCampaignUIDs;
}
const getExpiredCampaignUIDs = async () => {
	const expiredCampaignUIDs =  await CampaignManager_admin.get_expiredCampaignUIDs();
	console.log(`expiredCampaignUIDs: `,expiredCampaignUIDs);
	return expiredCampaignUIDs;
}
const getReadyFroPaymentCampaignUIDs = async () => {
	const readyFroPaymentCampaignUIDs =  await CampaignManager_admin.get_readyFroPaymentCampaignUIDs();
	console.log(`readyFroPaymentCampaignUIDs: `,readyFroPaymentCampaignUIDs);
	return readyFroPaymentCampaignUIDs;
}

const get_Campaign_Specs = async (campaign_uuid) => {
	const campaigneSpecs =  await CampaignManager_admin.campaigns(campaign_uuid);
	console.log(`campaigneSpecs: `,campaigneSpecs);
	return campaigneSpecs;
}

const get_Campaign_PointMarking = async (campaign_uuid) => {
	const campaignPointMarking =  await CampaignManager_admin.getCampaignPointMarking(campaign_uuid);
	console.log(`campaignPointMarking: `,campaignPointMarking);
	return campaignPointMarking;
}

const get_Campaign_platform__fees = async (campaign_uuid) => {
	const campaignPlatformFees =  await CampaignManager_admin.platform_campaign_fees(campaign_uuid);
	console.log(`campaignPlatformFees: `,campaignPlatformFees);
	return campaignPlatformFees;
}

const get_withdrawable_platform__fees = async () => {
    const CampaignManager_Address = deploymentData["CampaignManager"][userChainName]["address"]
	const withdrawableAmount =  await CampaignManager_admin.platform_Balance(CampaignManager_Address);
	console.log(`withdrawableAmount: `,withdrawableAmount);
	return withdrawableAmount;
}



//#endregion READ

//#region WRITE
const createCampaign = async (_title,_description,_campaign_Fid,_startTime,_endTime,_influencerActionsPointsArray) => {
	return new Promise (async (resolve,reject) => {
		console.log(`_title: ${_title} _description: ${_description} _campaign_Fid: ${_campaign_Fid} _startTime: ${_startTime} _endTime: ${_endTime} _influencerActionsPointsArray: `,_influencerActionsPointsArray);
		try {
			const tx=  await CampaignManager_user.createCampaign(_title,_description,_campaign_Fid,_startTime,_endTime,_influencerActionsPointsArray);
			const receipt = await tx.wait();
			if (receipt.status === false) {
				throw new Error(`Transaction createCampaign failed`);
			}
			resolve(`Transaction createCampaign succeeded`);
		}
		catch (e) {
			console.log(` ********** while createCampaign an error occured ********** Error: `,e);
			resolve(e);
		}
	});

}





/// ADMIN THESE ARE ONLY INCLUDED FOR THE TESTING PAGES
const ADMIN_withdrawPlatformFees = async () => {
	return new Promise (async (resolve,reject) => {
        console.log(`*** ENSURE YOU HAVE LOGGED IN AS THE ADMIN OF THE PLATFORM ***`);
		try {
			const tx=  await CampaignManager_user.withdrawPlatformFees();
			const receipt = await tx.wait();
			if (receipt.status === false) {
				throw new Error(`Transaction ADMIN_withdrawPlatformFees failed`);
			}
			resolve(`Transaction ADMIN_withdrawPlatformFees succeeded`);
		}
		catch (e) {
			console.log(` ********** while ADMIN_withdrawPlatformFees an error occured ********** Error: `,e);
			resolve(e);
		}
	});

}

//#endregion WRITE



export {
	//Wallets
    setup_wallet_SW,
        getMyNumber_SW,
        getSender_SW,
        setMyNumber_SW,


    setup_user_chain,
        //READ
        getAccountInfo,
        getPendingCampaigns,
        getActiveCampaignUIDs,
        getExpiredCampaignUIDs,
        getReadyFroPaymentCampaignUIDs,
        get_Campaign_Specs,
        get_Campaign_PointMarking,
        get_Campaign_platform__fees,
        get_withdrawable_platform__fees,

        //WRITE
        createCampaign,

        ADMIN_withdrawPlatformFees,
}
