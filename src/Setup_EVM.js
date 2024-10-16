'use strict';
console.log(`Setup_EVM.js is loaded`);
import { ethers, Wallet } from "ethers";

// ************************** Import ABIs **************************
import CampaignManager_raw from './Abis/CampaignManager.json';  
import InfluencersManager_raw from './Abis/InfluencersManager.json';
import CampaignAssets_raw from './Abis/CampaignAssets.json';
import SquawkProcessor_raw from './Abis/SquawkProcessor.json';
import deploymentData from "./DeploymentData.json";


import BoilerPlate_raw from './Abis/BoilerPlate.json';       
//#region DELETE ME IT WORKS, ONLY NEEDED FOR TESTING
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

// //Smart Wallet - Contracts
// const getMyNumber_SW = async () => {
//     const value = await BoilerPlate_SW.my_number();
//     console.log(`SmartWallet getMyNumber: `,value);
//     return value;
// };
// const getSender_SW = async () => {
//     const value = await BoilerPlate_SW.sender();
//     console.log(`SmartWallet getSender: `,value);
//     return value;
// };
// const setMyNumber_SW = async (value=123) => {
//     const tx = await BoilerPlate_SW.set_my_number(value);
//     await tx.wait();
//     console.log(`SmartWallet setMyNumber tx: `,tx);
// };
//#endregion DELETE ME IT WORKS, ONLY NEEDED FOR TESTING




// ************************** KEYS **************************//
const RPC_BASE_KEY = import.meta.env.VITE_RPC_BASE_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const public_signer = new Wallet(PRIVATE_KEY);   

const VITE_NEYNAR_API_KEY = import.meta.env.VITE_NEYNAR_API_KEY;
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
			InfluencersManager:"", 
            CampaignAssets: "",
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
			InfluencersManager:"", 
            CampaignAssets: "",
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
				InfluencersManager: new ethers.Contract( deploymentData["InfluencersManager"][chain.chainName]["address"] , InfluencersManager_raw.abi , chain.chainProvider ),
				CampaignAssets: new ethers.Contract( deploymentData["CampaignAssets"][chain.chainName]["address"] , CampaignAssets_raw.abi , chain.chainProvider ),
				SquawkProcessor: new ethers.Contract( deploymentData["SquawkProcessor"][chain.chainName]["address"] , SquawkProcessor_raw.abi , chain.chainProvider ),
			};

		} else chain.contracts = {};
	})
}
//#endregion ************************** Set up Contracts **************************


let provider_Admin;
let CampaignManager_admin, InfluencersManager_admin, CampaignAssets_admin, SquawkProcessor_admin;
let CampaignManager_user, InfluencersManager_user, CampaignAssets_user, SquawkProcessor_user, userChainName, userAddress;
// SETTING UP USER CHAIN CONNECTION REFERENCES TO SMART CONTRACTS
const setup_user_chain = async (wallet, chainId, walletAddress) => {
        const userChain 		= chainSpecs[chainId];
        userChainName     = chainSpecs[chainId].chainName;
        userAddress = walletAddress;
        console.log(`SETUP_EVM User Chain Selected ===------> : userChainName: ${userChainName} chainId: ${chainId} walletAddress: ${walletAddress}`);
                
        // System References and Contracts
        await setupContracts();

        provider_Admin 			= userChain.chainProvider;
        CampaignManager_admin 	= userChain.contracts.CampaignManager;
        InfluencersManager_admin = userChain.contracts.InfluencersManager;
        CampaignAssets_admin    = userChain.contracts.CampaignAssets;
        SquawkProcessor_admin    = userChain.contracts.SquawkProcessor;


       // User References and Contracts
        CampaignManager_user   = new ethers.Contract( deploymentData["CampaignManager"][userChainName]["address"] , CampaignManager_raw.abi , wallet );
        InfluencersManager_user = new ethers.Contract( deploymentData["InfluencersManager"][userChainName]["address"] , InfluencersManager_raw.abi , wallet );
	    CampaignAssets_user    = new ethers.Contract( deploymentData["CampaignAssets"][userChainName]["address"] , CampaignAssets_raw.abi , wallet );
	    SquawkProcessor_user    = new ethers.Contract( deploymentData["SquawkProcessor"][userChainName]["address"] , SquawkProcessor_raw.abi , wallet );

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
    console.log(`getAccountInfo account_address: ${account_address} nonce: ${nonce} balanceWEI: ${balanceWEI} balanceETH: ${balanceETH} blockNumber: ${blockNumber}`);
    return {nonce, balanceWEI, balanceETH, blockNumber};
}


const convertWeiToEth = (wei) => {
    const eth = ethers.utils.formatEther(wei);
    // consolelog(`convertWeiToEth wei: ${wei} eth: ${eth}`);
    return eth;
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
const getCompletedCampaignUIDss = async () => {
	const completedCampaignUIDss =  await CampaignManager_admin.get_completedCampaignUIDss();
	console.log(`completedCampaignUIDss: `,completedCampaignUIDss);
	return completedCampaignUIDss;
}

const get_Campaign_Specs = async (campaign_uuid) => {
	const campaigneSpecs =  await CampaignManager_admin.getCampaign(campaign_uuid);
	console.log(`campaigneSpecs: `,campaigneSpecs);
	return campaigneSpecs;
}
const get_Formatted_Campaign_Specs = async (campaign_uuid) => {
    const campaignSpecs =  await CampaignManager_admin.getCampaign(campaign_uuid);
    // console.log(`campaignSpecs: `,campaignSpecs);

    let influencersFids = [], distributions = [];
    for (let i=0; i<campaignSpecs.influencersFids.length; i++)
    {
        // console.log(`campaignSpecs.influencersFids[i]: `,campaignSpecs.influencersFids[i]);
        influencersFids.push(`${campaignSpecs.influencersFids[i]}`);
        distributions.push(`${campaignSpecs.distributions[i]}`);
    }

    const campaignTimestamp = new Date(Number(`${campaignSpecs.timestamp}`)*1000).toLocaleString();
    const startTime_secs = Number(`${campaignSpecs.startTime}`);
    const startTime = new Date(startTime_secs*1000).toLocaleString();
    const endTime_secs = Number(`${campaignSpecs.endTime}`)
    const endTime = new Date(endTime_secs*1000).toLocaleString();
    console.log(`startTime: `,startTime);
    console.log(`endTime: `,endTime);
   
    let state, textcolor;
    if (campaignSpecs.state==0) 
    {
        state="Pending";
        textcolor="text-warning";
    }
    else if (campaignSpecs.state==1) 
    {
        state="Active";
        textcolor="text-info";
    }
    else if (campaignSpecs.state==2) 
    {
        state="Expired";
        textcolor="text-danger";
    }
    else if (campaignSpecs.state==3) 
    {
        state="ReadyForPayment";
        textcolor="text-success";
    }
    else if (campaignSpecs.state==4) 
    {
        state="Void";
        textcolor="text-secondary";
    }
    else if (campaignSpecs.state==5) 
    {
        state="Paid";
        textcolor="text-success";
    }


    const campaignObject = {
        campaign_uuid: `${campaignSpecs.uuid}`,
        campaign_owner: campaignSpecs.owner,
        campaign_fid: `${campaignSpecs.campaign_Fid}`,
        campaign_title: campaignSpecs.title,
        campaign_description: campaignSpecs.description,
        campaign_start_date: startTime,
        campaign_end_date: endTime,
        campaign_state: state,
        campaign_budget: `${ethers.utils.formatEther(`${campaignSpecs.budget}`)}`,
        campaign_influencersFids: influencersFids,
        campaign_distributions: distributions,
        campaign_timestamp: campaignTimestamp,
        campaign_start_date_secs: `${startTime_secs}`,
        campaign_end_date_secs: `${endTime_secs}`,
        status_c:textcolor     //text-info text-success text-danger text-warning text-secondary
    }
    
    console.log(`campaignObject: `,campaignObject);
    return campaignObject;
}

 

const get_Campaign_PointMarking = async (campaign_uuid) => {
	const campaignPointMarking =  await CampaignManager_admin.getCampaignPointMarking(campaign_uuid);
	console.log(`campaignPointMarking: `,campaignPointMarking);
	return campaignPointMarking;
}

const get_Campaign_platform_fees = async (campaign_uuid) => {
	const campaignPlatformFees =  await CampaignManager_admin.platform_campaign_fees(campaign_uuid);
	console.log(`campaignPlatformFees: `,campaignPlatformFees);
	return campaignPlatformFees;
}

const get_withdrawable_platform_fees = async () => {
    const CampaignManager_Address = deploymentData["CampaignManager"][userChainName]["address"]
	const withdrawableAmount =  await CampaignManager_admin.platform_Balance(CampaignManager_Address);
	console.log(`withdrawableAmount: `,withdrawableAmount);
	return withdrawableAmount;
}

const get_Campaign_isActive = async (campaign_uuid) => {
	const isCampaignActive =  await CampaignManager_admin.isCampaignActive(campaign_uuid);
	console.log(`isCampaignActive: `,isCampaignActive);
	return isCampaignActive;
}
const get_campaignBalances = async (campaign_uuid) => {
	const _campaignBalance =  await CampaignManager_admin.campaignBalances(campaign_uuid);
    const campaignBalance = ethers.utils.formatEther(_campaignBalance);
	console.log(`campaignBalance: `,campaignBalance);
	return campaignBalance;
}
const get_isCampaignDistributionComplete = async (campaign_uuid) => {
	const isCampaignDistributionComplete =  await CampaignManager_admin.isCampaignDistributionComplete(campaign_uuid);
	console.log(`isCampaignDistributionComplete: `,isCampaignDistributionComplete);
	return isCampaignDistributionComplete;
}
const get_isCampaignPaymentsComplete = async (campaign_uuid) => {
	const isCampaignPaymentsComplete =  await CampaignManager_admin.isCampaignPaymentsComplete(campaign_uuid);
	console.log(`isCampaignPaymentsComplete: `,isCampaignPaymentsComplete);
	return isCampaignPaymentsComplete;
}
 
const get_campaignFidToUid = async (campaign_fid) => {
	const campaign_uuid =  await CampaignManager_admin.campaignFidToUid(campaign_fid);
	console.log(`campaign_uuid: ${campaign_uuid}`);
	return `${campaign_uuid}`;
}



const get_campaignTagline = async (campaign_uuid) => {
	const campaign_tagline =  await CampaignAssets_admin.campaignTagLine_uuid(campaign_uuid);
	console.log(`campaign_tagline: ${campaign_tagline}`);
	return campaign_tagline;
}
const get_campaignEmbed = async (campaign_uuid) => {
	const campaign_embed =  await CampaignAssets_admin.campaignEmbed_uuid(campaign_uuid);
	console.log(`campaign_embed: ${campaign_embed}`);
	return campaign_embed;
}



const get_influencer = async (fid=0) => {
	const influencerSruct =  await InfluencersManager_admin.influencers(fid);
	console.log(`influencerSruct: `,influencerSruct);
	return influencerSruct;
}
const getInfluencersUIDs = async () => {
	const influencersUIDs =  await InfluencersManager_admin.get_influencersUIDs();
	console.log(`influencersUIDs: `,influencersUIDs);
	return influencersUIDs;
}
const infuencerRegisteredForCampaign = async (campaign_uuid,influencer_fid) => {
	const isRegistered =  await InfluencersManager_admin.isCampaignInfuencer(campaign_uuid,influencer_fid);
	console.log(`isRegistered: `,isRegistered);
	return isRegistered;
}



const get_total_campaign_score = async (campaignUID) => {
	const total_campaign_points_BigInt =  await InfluencersManager_admin.total_campaign_score(campaignUID);
    const total_campaign_points = `${total_campaign_points_BigInt}`;
	console.log(`total_campaign_points: `,total_campaign_points);
	return total_campaign_points;
}

const get_infuencer_PointsArray_for_Campaign = async (campaignUID, influencerFid) => {
    const infuencer_Points_BigInt =  await InfluencersManager_admin.getCampaignScoresForInfluencer(campaignUID, influencerFid);
    const infuencer_PointsArray = infuencer_Points_BigInt.map((points) => `${points}`);
    console.log(`infuencer_PointsArray: `,infuencer_PointsArray);
    return infuencer_PointsArray;
}



const get_SquawkBoxLength = async () => {
    const squawkBoxLength_BigInt =  await SquawkProcessor_admin.getSquawkBoxLength();
    const squawkBoxLength = Number(`${squawkBoxLength_BigInt}`);
    console.log(`squawkBoxLength: `,squawkBoxLength);
    return squawkBoxLength;
}


const get_lastProcessedIndex = async () => {
    const lastProcessedIndex_BigInt =  await SquawkProcessor_admin.lastProcessedIndex();
    const lastProcessedIndex = Number(`${lastProcessedIndex_BigInt}`);
    console.log(`lastProcessedIndex: `,lastProcessedIndex);
    return lastProcessedIndex;
}



const get_SquawkBoxElementRange = async (fromIndex,toIndex) => {
    const arrayOfSquawkObjects =  await SquawkProcessor_admin.getSquawkBoxElementRange(fromIndex,toIndex);

    let newArrayOfSquawkObjects = [];

    for (let i=0; i<arrayOfSquawkObjects.length; i++)
    {
        const squawkObject = arrayOfSquawkObjects[i];
        console.log(`arrayOfSquawkObjects[${i}]: `,squawkObject);

        const processed =  Number(`${squawkObject.processed}`);

        if (processed===1) {

                let squwak_message;
                
                const code = Number(`${squawkObject.code}`);

                if (code===14) {
                    squwak_message = `Followed user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===15) {
                    squwak_message = `Unfollowed user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===16) {
                    squwak_message = `Liked a cast with hash ${squawkObject.cast_hash}  of user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===17) {
                    squwak_message = `Recasted a cast with hash ${squawkObject.cast_hash}  of user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===18) {
                    squwak_message = `Unliked a cast with hash ${squawkObject.cast_hash}  of user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===19) {
                    squwak_message = `Deleted a re-cast of cast with hash ${squawkObject.cast_hash}  of user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===20) {
                    squwak_message = `Replied to the cast with hash ${squawkObject.replyToMessageHash}  of user with Farcaster Id ${squawkObject.data[0]}, with the cast with hash  ${squawkObject.cast_hash}`;
                }
                else if (code===21) {
                    squwak_message = `Posted a cast with hash ${squawkObject.cast_hash} that includes the url embed "${squawkObject.embeded_string}"`;
                }
                else if (code===22) {
                    squwak_message = `Mentioned in posted cast with hash ${squawkObject.cast_hash}  the user with Farcaster Id ${squawkObject.data[0]}`;
                }
                else if (code===23) {
                    squwak_message = `Posted a cast with hash ${squawkObject.cast_hash} that includes the tag line "${squawkObject.embeded_string}"`;
                }


                let new_squawkObject = {
                    timestamp: new Date(Number(`${squawkObject.created_at}`)*1000).toLocaleString(),
                    infuencerFid: `${squawkObject.user_fid}`,
                    infuencerFollowers: `${squawkObject.user_followers}`,
                    squwak_message,
                    nonce: `${squawkObject.nonce}`,
                    // processed: processed===0 ? "Pending" : "Processed",
                }

                newArrayOfSquawkObjects.push(new_squawkObject);
        }
    }
    
    console.log(`newArrayOfSquawkObjects: `,newArrayOfSquawkObjects);
    return newArrayOfSquawkObjects;
}




const getUserInfo_withFids_Bulk = async (fidsARARY=[620429,3,5]) => {

    const apiKey = VITE_NEYNAR_API_KEY;
    const user_url = `https://api.neynar.com/v2/farcaster/user/bulk?fids=${fidsARARY.join('%2C')}`;
    //Example: 'https://api.neynar.com/v2/farcaster/user/bulk?fids=620429%2C3%2C5'
  
    const user_response = await fetch(user_url, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip, deflate, br',
        'api_key': apiKey,
      },
    });
  
    const response = await user_response.json();
    // console.log(response)

    const users = response.users;
    let users_pfp_url_Array = [];
    for (let i=0; i<users.length; i++)
    {
        const user = users[i];
        console.log(`User[${i}].pfp_url: `,user.pfp_url);
        users_pfp_url_Array.push(user.pfp_url);
    } 

    return users_pfp_url_Array;
  }










//#endregion READ

//#region WRITE
const createCampaign = async (_title,_description,_campaign_Fid,_startTime,_endTime,_influencerActionsPointsArray,campaignBudget) => {
	return new Promise (async (resolve,reject) => {
		console.log(`_title: ${_title} _description: ${_description} _campaign_Fid: ${_campaign_Fid} _startTime: ${_startTime} _endTime: ${_endTime} _influencerActionsPointsArray: `,_influencerActionsPointsArray,` campaignBudget: ${campaignBudget} ethers.utils.parseEther(campaignBudget): ${ethers.utils.parseEther(campaignBudget)}`);
		try {
			const tx=  await CampaignManager_user.createCampaign(_title,_description,_campaign_Fid,_startTime,_endTime,_influencerActionsPointsArray, { value: ethers.utils.parseEther(campaignBudget) } );
			const receipt = await tx.wait();
			if (receipt.status === false) {
				throw new Error(`Transaction createCampaign failed`);
			}
			resolve({msg:`Transaction createCampaign succeeded`, receipt, tx,});
		}
		catch (e) {
			console.log(` ********** while createCampaign an error occured ********** Error: `,e);
			resolve(e);
		}
	});

}


const registerInfluencer = async (influencer_fid, custodyAddress, verifiedAccount) => {
	return new Promise (async (resolve,reject) => {
		console.log(`registerInfluencer influencer_fid: ${influencer_fid} custodyAddress: ${custodyAddress} verifiedAccount: ${verifiedAccount}`);
		try {
			const tx=  await InfluencersManager_user.registerInfluencer(influencer_fid,custodyAddress,verifiedAccount);
			const receipt = await tx.wait();
			if (receipt.status === false) {
				throw new Error(`Transaction registerInfluencer failed`);
			}
			resolve({msg:`Transaction registerInfluencer succeeded`, receipt, tx,});

		}
		catch (e) {
			console.log(` ********** while registerInfluencer an error occured ********** Error: `,e);
			resolve(e);
		}
	});

}


const registerToCampaign = async (campaign_uuid) => {
	return new Promise (async (resolve,reject) => {
		console.log(`registerToCampaign campaign_uuid: ${campaign_uuid}`);
		try {
			const tx=  await InfluencersManager_user.registerToCampaign(campaign_uuid);
			const receipt = await tx.wait();
			if (receipt.status === false) {
				throw new Error(`Transaction registerToCampaign failed`);
			}
			resolve({msg:`Transaction registerToCampaign succeeded`, receipt, tx,});

		}
		catch (e) {
			console.log(` ********** while registerToCampaign an error occured ********** Error: `,e);
			resolve(e);
		}
	});

}



const registerWebhookData = async ( 
    _campaign_uuid,                 _campaing_fid,                  _cast_created_parent_author_fids,
    _cast_created_text,             _cast_created_mentioned_fids,   _cast_created_parent_embeds,
    _follow_created_target_fids,    _follow_deleted_target_fids,    _reaction_created_target_fids, 
    _reaction_deleted__target_fids
) => {
	return new Promise (async (resolve,reject) => {
		console.log(`registerWebhookData  campaign_uuid: ${_campaign_uuid}`);

        // console.log(`_campaign_uuid: ${_campaign_uuid} _campaing_fid: ${_campaing_fid} 
        // _cast_created_parent_author_fids: ${_cast_created_parent_author_fids} _cast_created_text: ${_cast_created_text} 
        // _cast_created_mentioned_fids: ${_cast_created_mentioned_fids} _cast_created_parent_embeds: ${_cast_created_parent_embeds} 
        // _follow_created_target_fids: ${_follow_created_target_fids} _follow_deleted_target_fids: ${_follow_deleted_target_fids} 
        // _reaction_created_target_fids: ${_reaction_created_target_fids} _reaction_deleted__target_fids: ${_reaction_deleted__target_fids}`);


		try {
			const tx=  await CampaignAssets_user.registerWebhookData(
                _campaign_uuid,                 
                _campaing_fid,                 
                 _cast_created_parent_author_fids,
                _cast_created_text,             
                _cast_created_mentioned_fids,  
                 _cast_created_parent_embeds,
                _follow_created_target_fids,   
                 _follow_deleted_target_fids,    
                 _reaction_created_target_fids, 
                _reaction_deleted__target_fids
            );
			const receipt = await tx.wait();
			if (receipt.status === false) {
				throw new Error(`Transaction registerWebhookData failed`);
			}
			resolve({msg:`Transaction registerWebhookData succeeded`, receipt, tx,});

		}
		catch (e) {
			console.log(` ********** while registerWebhookData an error occured ********** Error: `,e);
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
			resolve({msg:`Transaction ADMIN_withdrawPlatformFees succeeded`, receipt, tx,});

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
    //     getMyNumber_SW,
    //     getSender_SW,
    //     setMyNumber_SW,


    setup_user_chain,
    userAddress,
        //READ
        getAccountInfo,
        getPendingCampaigns,
        getActiveCampaignUIDs,
        getExpiredCampaignUIDs,
        getReadyFroPaymentCampaignUIDs,
        getCompletedCampaignUIDss,
        get_Campaign_Specs,
        get_Campaign_PointMarking,
        get_Campaign_platform_fees,
        get_withdrawable_platform_fees,
        get_Campaign_isActive,
        get_campaignBalances,
        get_isCampaignDistributionComplete,
        get_isCampaignPaymentsComplete,
        get_Formatted_Campaign_Specs,
        get_campaignFidToUid,

        get_influencer,
        getInfluencersUIDs,
        infuencerRegisteredForCampaign,
        get_infuencer_PointsArray_for_Campaign,

        get_campaignTagline,
        get_campaignEmbed,

        get_SquawkBoxLength,
        get_lastProcessedIndex,
        get_SquawkBoxElementRange,
        getUserInfo_withFids_Bulk,

        //WRITE
        createCampaign,

        registerInfluencer,
        registerToCampaign,

        registerWebhookData,

        ADMIN_withdrawPlatformFees,

        //Utilities
        convertWeiToEth,
}
