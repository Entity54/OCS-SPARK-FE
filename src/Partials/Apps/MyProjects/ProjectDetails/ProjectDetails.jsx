import React, { useContext, useEffect, useState, useRef } from 'react'
import { SparkContext } from '@SparkContext';

import DataTable from '../../../../Common/DataTable/DataTable2';
import { TableList } from './Components/ProjectListData';

import { NeynarAuthButton, useNeynarContext } from "@neynar/react";


import { 
    get_Campaign_Specs,
    get_Campaign_PointMarking,
    get_Campaign_platform_fees,
    // get_withdrawable_platform_fees,
    get_Campaign_isActive,
    get_campaignBalances,
    get_isCampaignDistributionComplete,
    get_isCampaignPaymentsComplete,
    get_infuencer_PointsArray_for_Campaign,
    // ADMIN_withdrawPlatformFees,

    convertWeiToEth,
    get_campaignTagline,
    get_campaignEmbed,
    get_Formatted_Campaign_Specs,
    get_influencer,
    registerToCampaign,
    infuencerRegisteredForCampaign,
  } from "@Setup_EVM";



  const infuencer_columns = [
    {
        Header: 'Infuencer Fis',
        accessor: 'infuencerFid',
    },
    {
        Header: 'Amount ETH',
        accessor: 'amountETH',
    },
    {
        Header: 'Total Points',
        accessor: 'totalPoints',
    },
    {
        Header: 'Action-Follow',
        accessor: 'actionFollow',
    },
    {
        Header: 'Action-Like',
        accessor: 'actionLike',
    },
    {
        Header: 'Action-Recast',
        accessor: 'actionRecast',
    },
    {
        Header: 'Action-Reply',
        accessor: 'actionReply',
    },
    {
        Header: 'Action-Mention',
        accessor: 'actionMention',
    },
    {
        Header: 'Action-Tagline',
        accessor: 'actionTagline',
    },
    {
        Header: 'Action-URL Embed',
        accessor: 'actionURLEmbed',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
  ];




const ProjectDetails = () => {
    const { user } = useNeynarContext();
    const { contextAccount, refreshCampaign, lastRefreshTimeStamp, chosenCampaign } = useContext(SparkContext);

    const [campaignUID, setCampaignUID]   = useState('');
    const [inputCampaignUID, setInputCampaignUID]   = useState('');

    const [title, setTitle]   = useState('');
    const [status, setStatus]   = useState('');
    const [status_C, setStatus_C]   = useState('');
    const [state, setState]   = useState('');
    const [budget, setBudget]   = useState('');
    const [campaignPlatfromBalance, setCampaignPlatfromBalance]   = useState('');
    const [distributionsState, setDistributionsState]   = useState('');
    const [paymentsState, setPaymentsState]   = useState('');
    const [owner, setOwner]   = useState('');
    const [campaignTiemstamp, setCampaignTiemstamp]   = useState('');
    const [fid, setFid]   = useState('');
    const [description, setDescription]   = useState('');
    const [startTime, setStartTime]   = useState('');
    const [endtTime, setEndTime]   = useState('');
    const [infuencersFidsString, setInfuencersFidsString]   = useState('');
    const [campaignPlatfromFees, setCampaignPlatfromFees]   = useState('');

    const [actionFollowCompanyAccount, setActionFollowCompanyAccount]   = useState("");
    const [actionLikeCompanyCasts, setActionLikeCompanyCasts]   = useState("");
    const [actionRacastCompanyCasts, setActionRacastCompanyCasts]   = useState("");
    const [actionReplyToCompanyCasts, setActionReplyToCompanyCasts]   = useState("");
    const [actionMentionCompanyAccountInCast, setActionMentionCompanyAccountInCast]   = useState("");
    const [actionContainCompanyTaglineInCast, setActionContainCompanyTaglineInCast]   = useState("");
    const [actionEmbedCompanyURLInCast, setActionEmbedCompanyURLInCast]   = useState("");
    
    const [progressPercent, setProgressPercent]   = useState("");
    const [endsInMins, setEndsInMins]   = useState("");
    const [startsInMins, setStartsInMins]   = useState("");
    
    const [campaignTotalPoints, setCampaignTotalPoints]   = useState("");
    const [campaign_influencersFidsArray, setCampaign_influencersFidsArray] = useState([]); 
    const [campaign_distributionsArray, setCampaign_DistributionsArray] = useState([]);  
    
    const [urlEmbed1, setUrlEmbed1]   = useState("");
    const [tagLine1, setTagLine1]   = useState("");
  
    let infuencer_fids = [];
    const [Table_List, setTable_List] = useState([]);  
    const [dataTT, setDataTT] = useState([]);  


    const [influencer_fid, setInfluencer_fid] = useState('');
    const [influencer_ownerAddress, setInfluencer_ownerAddress] = useState('');
    const [registrationButtonStatus, setRegistrationButtonStatus] = useState(false);
    const [registrationButtonColor, setRegistrationButtonColor] = useState('btn-primary');
    const [infuencerRegistered, setInfuencerRegistered] = useState(false);




    const getCampaignSpecs = async () => {
        const campaignObject = await get_Formatted_Campaign_Specs(campaignUID);
        // console.log('campaignObject:', campaignObject);
        
        setTitle(campaignObject.campaign_title);
        setState(campaignObject.campaign_state);
        setBudget(campaignObject.campaign_budget);
        setOwner(campaignObject.campaign_owner);
        setCampaignTiemstamp(campaignObject.campaign_timestamp);
        setFid(campaignObject.campaign_fid);
        setDescription(campaignObject.campaign_description);
        setStartTime(campaignObject.campaign_start_date);
        setEndTime(campaignObject.campaign_end_date);
        setCampaign_influencersFidsArray(campaignObject.campaign_influencersFids);
        setCampaign_DistributionsArray(campaignObject.campaign_distributions);
        const infuencersFids_String = (campaignObject.campaign_influencersFids).join(', ');
        setInfuencersFidsString(infuencersFids_String);
        
        const campaignPointMarking = await get_Campaign_PointMarking(campaignUID);
        setActionFollowCompanyAccount(`${campaignPointMarking[0]}`);
        setActionLikeCompanyCasts(`${campaignPointMarking[1]}`);
        setActionRacastCompanyCasts(`${campaignPointMarking[2]}`);
        setActionReplyToCompanyCasts(`${campaignPointMarking[3]}`);
        setActionMentionCompanyAccountInCast(`${campaignPointMarking[4]}`);
        setActionContainCompanyTaglineInCast(`${campaignPointMarking[5]}`);
        setActionEmbedCompanyURLInCast(`${campaignPointMarking[6]}`);
        
        const campaignPlatformFees = await get_Campaign_platform_fees(campaignUID);
        setCampaignPlatfromFees(`${campaignPlatformFees}`);
        
        const isCampaignActive = await get_Campaign_isActive(campaignUID);
        const campaing_status = isCampaignActive ? 'Active' : 'Inactive';
        const campaing_status_c = isCampaignActive ? 'bg-success' : 'bg-danger';
        setStatus(campaing_status);
        setStatus_C(campaing_status_c);
        
        const campaignBalances = await get_campaignBalances(campaignUID);
        setCampaignPlatfromBalance(`${campaignBalances}`);
        
        const isCampaignDistributionComplete = await get_isCampaignDistributionComplete(campaignUID);
        setDistributionsState(isCampaignDistributionComplete ? 'Completed' : 'Pending');

        const isCampaignPaymentsComplete = await get_isCampaignPaymentsComplete(campaignUID);
        setPaymentsState(isCampaignPaymentsComplete ? 'Completed' : 'Pending');

        const tag_line = await get_campaignTagline(campaignUID);
        setTagLine1(tag_line);
        const embed = await get_campaignEmbed(campaignUID);
        setUrlEmbed1(embed);


        const datetimeNow = Math.floor(Date.now() / 1000);
        const startTime_secs = campaignObject.campaign_start_date_secs;
        const endtTime_secs = campaignObject.campaign_end_date_secs;

        let progress_percent, ends_in_mins=0, start_in_mins=0;
        if (datetimeNow > endtTime_secs)
        {
            progress_percent = 100;
        }
        else if (datetimeNow > startTime_secs)
        {
            const space = endtTime_secs - startTime_secs
            const current_space = datetimeNow - startTime_secs
            progress_percent = Math.min(100,Math.floor(100*(current_space / space)));
            ends_in_mins = Math.floor((endtTime_secs - datetimeNow) / 60);
        } else { 
            progress_percent=0;
            start_in_mins = Math.floor((startTime_secs - datetimeNow) / 60);
        }
        setProgressPercent(progress_percent);
        setStartsInMins(start_in_mins);
        setEndsInMins(ends_in_mins);
    }




    const chooseCampaign = (choosenCampaign_uuid) => {
        console.log(`choosenCampaign_uuid: ${choosenCampaign_uuid}`);
        setCampaignUID(choosenCampaign_uuid);
    }

    const influencerRegistersToCampaign = async () => {
        console.log(`influencerRegistersToCampaign campaignUID: ${campaignUID}`);
        await registerToCampaign(campaignUID);
    }


    const get_Infuencers_List = async () => {

        const campaign_specs = await get_Campaign_Specs(campaignUID);
        const campaign_influencersFids = (campaign_specs.influencersFids).map((fid) => `${fid}`);
        console.log(`get_Infuencers_List campaign_influencersFids: `,campaign_influencersFids);

        const campaign_paid_amounts = (campaign_specs.distributions).map((dist) => `${dist}`);
        console.log(`get_Infuencers_List campaign_paid_amounts: `,campaign_paid_amounts);

        if (campaign_influencersFids.length > 0) {

            for (let i = 0; i < campaign_influencersFids.length; i++) {

                const infuencerFid = campaign_influencersFids[i];
                console.log(`get_Infuencers_List infuencerFid: `,infuencerFid);
                const infuencer_scores = await get_infuencer_PointsArray_for_Campaign(campaignUID, infuencerFid);
                console.log(`get_Infuencers_List infuencer_scores: `,infuencer_scores);
                
                const infuencerObject = {
                    infuencerFid: infuencerFid,
                    amountETH: `${Number(convertWeiToEth(campaign_paid_amounts[i])).toFixed(10)}`,
                    totalPoints: `${infuencer_scores[7]}`,
                    actionFollow: `${infuencer_scores[0]}`,
                    actionLike: `${infuencer_scores[1]}`,
                    actionRecast: `${infuencer_scores[2]}`,
                    actionReply: `${infuencer_scores[3]}`,
                    actionMention: `${infuencer_scores[4]}`,
                    actionTagline: `${infuencer_scores[5]}`,
                    actionURLEmbed: `${infuencer_scores[6]}`,
                    status: `Active`,
                    status_c: `bg-success`,
                }
                infuencer_fids.push(infuencerObject);
            }


        }
        else {
            console.log(`campaign_influencersFids: `,campaign_influencersFids);
            console.log(`No influencers in campaign`);
        }

    }



    const prepareInfuencersData = () => {
        let infuencer_data = Table_List.map((data, index) => {
        return {
            infuencerFid: data.infuencerFid,
            amountETH: data.amountETH,
            totalPoints: data.totalPoints,
            actionFollow: data.actionFollow,
            actionLike: data.actionLike,
            actionRecast: data.actionRecast,
            actionReply: data.actionReply,
            actionMention: data.actionMention,
            actionTagline: data.actionTagline,
            actionURLEmbed: data.actionURLEmbed,
            status: (<span className={`badge ${data.status_c}`}>{data.status}</span>),
        };
      });
      setDataTT(infuencer_data);
  }



    useEffect(() => {
        const alpha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        const b = alpha.join(', ');
        setInfuencersFidsString(b);
      }, []); 


      
    useEffect(() => {
        const retrieveUser = async () => {
            const userFID = `${user.fid}`;
            console.log(` |||>>>> retrieveUser user.fid: ${userFID} campaignUID: ${campaignUID}`);
            const infuencerStruct = await get_influencer(userFID);
            console.log(` |||>>>> retrieveUser infuencerStruct.ownerAddress: ${infuencerStruct.ownerAddress}`);
            const InfluencerOwnerAddress = (infuencerStruct.ownerAddress).toLowerCase() === contextAccount.toLowerCase()? infuencerStruct.ownerAddress : "Smart Wallet owner not Infuencer Owner"
            let registration_ButtonStatus = (infuencerStruct.ownerAddress).toLowerCase() === contextAccount.toLowerCase()? false: true;
            let registration_ButtonColor = (infuencerStruct.ownerAddress).toLowerCase() === contextAccount.toLowerCase()? "btn-primary": "btn-warning";
            const isRegistered = await infuencerRegisteredForCampaign(campaignUID,userFID);
            registration_ButtonStatus = isRegistered? true : false;
            registration_ButtonColor = isRegistered? "btn-warning" : "btn-primary";

            setInfluencer_ownerAddress(InfluencerOwnerAddress);
            setRegistrationButtonStatus(registration_ButtonStatus);
            setRegistrationButtonColor(registration_ButtonColor);
            setInfluencer_fid(userFID);
            setInfuencerRegistered(isRegistered?"Yes":"No");
        }
        if (user && campaignUID) retrieveUser();
    }, [user,campaignUID]); 


    useEffect(() => {

        const retrieveData = async () => {
            await getCampaignSpecs();

            infuencer_fids = [];
            await get_Infuencers_List();
            setTable_List(infuencer_fids);
            console.log(`CAMPAIGN DETAILS 1 retrieveData lastRefreshTimeStamp: `,new Date(lastRefreshTimeStamp));
        }
        if (campaignUID) retrieveData();
    }, [campaignUID, lastRefreshTimeStamp]);  
    // }, [lastRefreshTimeStamp]);  



    useEffect(() => {
        if (Table_List.length>0) prepareInfuencersData();
        // refreshCampaign();  //UNCOMMNENT THIS TO KEEP REFRESHING
        console.log(`CAMPAIGN DETAILS 2 refreshCampaign lastRefreshTimeStamp: `,new Date(lastRefreshTimeStamp));
    }, [Table_List]); 

    // WHEN ANOTHER PAGE CAMPAIGN SELECTION DIVERTS TO THIS PAGE
    useEffect(() => {
        if (chosenCampaign) 
        {
            setInputCampaignUID(chosenCampaign);
            chooseCampaign(chosenCampaign);
        }
        console.log(`CAMPAIGN DETAILS 3 chosenCampaign: ${chosenCampaign}`);
    }, [chosenCampaign]); 


  return (
         <div className="px-4 py-3 page-body">
            <div className="card p-4">



                <div className="col-12" style={{color:"#05B234"}}>
                    <h5>Campaign Details</h5>
                </div>

                <div className="col-12" style={{color:"#05B234"}}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating">
                                <input
                                    className="form-control"
                                    type="text"
                                    value={inputCampaignUID}
                                    placeholder="0"
                                    onChange={(event) => setInputCampaignUID(event.target.value)}
                                />
                                <label>Campign UID</label>
                            </div>
                        </div>

                        <div className="col-6">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => chooseCampaign(inputCampaignUID)}
                            >
                                Insert Campaign UID
                            </button>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>


                <h5>Title: {title} </h5>
                <div className="d-flex justify-content-between">
                    <p>Status: 
                        <span className={`fw-bold ${status_C}`} style={{marginLeft:"10px"}}>{status}</span>
                    </p>
                    <p>State: 
                        <span className="badge bg-primary me-1" href="#" style={{marginLeft:"10px"}}>
                            {state}
                        </span>
                    </p>
                    <p>Created::
                        <span className="badge y me-1" href="#" style={{marginLeft:"10px"}}>
                            {campaignTiemstamp}
                        </span>
                    </p>
                    <p>Last Updated: 
                        <span className="badge y me-1" href="#" style={{marginLeft:"10px"}}>
                            {lastRefreshTimeStamp}
                        </span>
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Budget: <span className="fw-bold text-info">ETH {budget}</span></p>
                    <p>Campaign Platform Balance: <span className="fw-bold text-info">ETH {campaignPlatfromBalance}</span></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Distributions: <span className="fw-bold text-primary">{distributionsState}</span></p>
                    <p>Payments: <span className="fw-bold text-primary">{paymentsState}</span></p>
                </div>

                <div className="row g-2 mt-4">
                    <div className="col-6">
                        <dl className="dl-horizontal">
                            <dt className="small">Created by:</dt><dd>{owner}</dd>
                            <dt className="small">Start Time:</dt><dd><a href="#">{startTime}</a></dd>
                            <dt className="small">Infuencers Fids:</dt><dd>{infuencersFidsString}</dd>
                        </dl>
                    </div>
                    <div className="col-6">
                        <dl className="dl-horizontal">
                            <dt className="small">Fid:</dt><dd>{fid}</dd>
                            <dt className="small">End Time:</dt><dd><a href="#">{endtTime}</a></dd>
                            <dt className="small">Campaign Total Points:</dt><dd>{campaignTotalPoints}</dd>

                        </dl>
                    </div>
                </div>


                <div className="bg-body p-3 mb-4">
                    <h6>Progress <strong style={{marginLeft:"10px"}}>{`${progressPercent}`}%</strong></h6>
                    <div className="progress">
                        <div style={{width: `${progressPercent}%`}} className="progress-bar"></div>
                    </div>
                     {
                        endsInMins == 0 && startsInMins==0?
                        <small className="text-muted">Campaign completed</small>
                        :
                        endsInMins > 0 ?
                            <small className="text-muted">Campaign ends in {endsInMins} mins</small>
                            :
                            <small className="text-muted">Campaign starts in {startsInMins}</small>
                     }
                </div>

                <h5>Campaign description</h5>
                <p>{description}</p>


                <div className="my-0">
                    <form className="row g-3">
                        <div className="col-12" style={{color:"#05B234"}}>
                            <h5>Score Points Allocation per Action</h5>
                        </div>
                        <div className="col-md-1">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionFollowCompanyAccount} placeholder="Budget"
                                    onChange={(event) => setActionFollowCompanyAccount(event.target.value)}
                                />
                                <label>Action - Follow</label>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionLikeCompanyCasts} placeholder="Budget"
                                    onChange={(event) => setActionLikeCompanyCasts(event.target.value)}
                                />
                                <label>Action - Like</label>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionRacastCompanyCasts} placeholder="Budget"
                                    onChange={(event) => setActionRacastCompanyCasts(event.target.value)}
                                />
                                <label>Action - Racast</label>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionReplyToCompanyCasts} placeholder="Budget"
                                    onChange={(event) => setActionReplyToCompanyCasts(event.target.value)}
                                />
                                <label>Action - Reply</label>
                            </div>
                        </div>


                        <div className="col-md-2">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionMentionCompanyAccountInCast} placeholder="Budget"
                                    onChange={(event) => setActionMentionCompanyAccountInCast(event.target.value)}
                                />
                                <label>Action - Mention Campaign Account</label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionContainCompanyTaglineInCast} placeholder="Budget"
                                    onChange={(event) => setActionContainCompanyTaglineInCast(event.target.value)}

                                
                                />
                                <label>Action - Contain Campaign Tagline in Cast</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={actionEmbedCompanyURLInCast} placeholder="Budget"
                                    onChange={(event) => setActionEmbedCompanyURLInCast(event.target.value)}
                                />
                                <label>Action - Embed Campaign URL in Cast</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="my-0">
                    <form className="row g-3">
                        <div className="col-12" style={{color:"#05B234"}}>
                            <h5>Marketing Assets</h5>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={urlEmbed1} placeholder="https://www.example.com"
                                    onChange={(event) => setUrlEmbed1(event.target.value)}
                                />
                                <label>Url Embed</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input className="form-control" type="text" value={tagLine1} placeholder="Yolo holidays"
                                    onChange={(event) => setTagLine1(event.target.value)}
                                />
                                <label>Tag Line</label>
                            </div>
                        </div>
                    </form>
                </div>







                <div className="my-4">

                    <div className="col-12" style={{color:"#05B234"}}>
                        <h5>Infuencer Registration for Campaign</h5>
                    </div>

                    <div className="row">

                        <div className="col-md-3">

                            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                                    <NeynarAuthButton />
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="form-floating">
                                <input readOnly className="form-control" type="text" value={influencer_fid} placeholder=""
                                />
                                <label>Farcaster Infuencer Fid</label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="form-floating">
                                <input  readOnly className="form-control" type="text" value={influencer_ownerAddress} placeholder=""
                                />
                                <label>Farcaster Infuencer Owner</label>
                            </div>
                        </div>

                        <div className="col-md-1">
                            <div className="form-floating">
                                <input  readOnly className="form-control" type="text" value={infuencerRegistered} placeholder=""
                                />
                                <label>Registered</label>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="form-floating">
                                <button disabled={registrationButtonStatus} type="button" className={`btn ${registrationButtonColor}`} style={{color:"black"}}
                                    onClick={() => influencerRegistersToCampaign()}
                                >
                                Register to Campaign
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="px-4 py-3">

                {
                    dataTT.length>0?
                    (
                            <DataTable columns={infuencer_columns} data={dataTT} />
                    )
                    :
                    (
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        </div>
                    )  
                    }
                </div>

            </div>
            
        </div>
    )
}

export default ProjectDetails