import React, { useContext, useEffect, useState, useRef } from 'react'
import { SparkContext } from '@SparkContext';

import DataTable from '../../../../Common/DataTable/DataTable2';
import { TableList } from './Components/ProjectListData';

import { NeynarAuthButton, useNeynarContext } from "@neynar/react";


import { createCampaign, 
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
    ADMIN_withdrawPlatformFees,

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
        Header: 'Distribution %',
        accessor: 'distributionPercent',
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


    //#region columns
    // const columns = [
    //     {
    //       Header: 'Project Name',
    //       accessor: 'projectName',
    //     },
    //     {
    //       Header: 'Assign',
    //       accessor: 'assign',
    //     },
    //     {
    //       Header: 'Start Date',
    //       accessor: 'startDate',
    //     },
    //     {
    //       Header: 'Deadline',
    //       accessor: 'deadline',
    //     },
    //     {
    //       Header: 'Task',
    //       accessor: 'task',
    //     },
    //     {
    //       Header: 'Progress',
    //       accessor: 'progress',
    //     },
    //     {
    //       Header: 'Status',
    //       accessor: 'status',
    //     },
    //     {
    //       Header: 'Action',
    //       accessor: 'action',
    //     },
    //   ];
//#endregion columns

//#region dataT
    // let dataT = TableList.map((data, index) => {
    //   return {
    //     projectName: (<a key={index} href="/app/project-details">{data.project_name}</a>),
    //     assign: (
    //       <>
    //         <div className="avatar-list avatar-list-stacked d-flex ps-2">
    //         {data.assign.map((img, index) => {
    //           return (
    //           <img key={index} className="avatar sm rounded-circle" src={img} data-bs-toggle="tooltip" title="Avatar" alt={`Avatar ${index}`} />
    //           )})}
    //         </div>
    //       </>
    //     ),
    //     startDate: data.start_date,
    //     deadline: data.deadline,
    //     task: data.task,
    //     progress: (
    //       <>
    //         <small className="text-muted">{data.valuenow} / {data.valuemax}</small>
    //         <div className="progress" style={{height: "2px"}}>
    //             <div className="progress-bar bg-primary" role="progressbar" style={{width: `${data.valuenow}%`}} aria-valuenow={data.valuenow} aria-valuemin="0" aria-valuemax={data.valuemax}></div>
    //         </div>
    //       </>
    //     ),
    //     status: (<span className={`badge ${data.status_c}`}>{data.status}</span>),
    //   };
    // });
//#endregion dataT



    const get_Campaign_Specs = async () => {
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
        let infuencer_fids_length = 10;
        // let infuencer_fids = [];
        for (let i = 0; i < infuencer_fids_length; i++) {
            const infuencerObject = {
                infuencerFid: i,
                distributionPercent: `${35}%`,
                amountETH: `${0.5}`,
                totalPoints: `${100}`,
                actionFollow: `${1}`,
                actionLike: `${2}`,
                actionRecast: `${3}`,
                actionReply: `${4}`,
                actionMention: `${5}`,
                actionTagline: `${6}`,
                actionURLEmbed: `${7}`,
                status: `Active`,
                status_c: `bg-success`,
            }
            infuencer_fids.push(infuencerObject);
        }
        console.log(`infuencer_fids: `,infuencer_fids);
    }



    const prepareInfuencersData = () => {
        let infuencer_data = Table_List.map((data, index) => {
        return {
            infuencerFid: data.infuencerFid,
            distributionPercent: data.distributionPercent,
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
            await get_Campaign_Specs();

            infuencer_fids = [];
            get_Infuencers_List();
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
                    {/* <p>Distributions: <span className="fw-bold text-primary">{distributionsState}</span></p> */}
                    {/* <p>Payments: <span className="fw-bold text-primary">{paymentsState}</span></p> */}
                </div>
                <div className="d-flex justify-content-between">
                    <p>Distributions: <span className="fw-bold text-primary">{distributionsState}</span></p>
                    <p>Payments: <span className="fw-bold text-primary">{paymentsState}</span></p>
                </div>

                <div className="row g-2 mt-4">
                    <div className="col-6">
                        <dl className="dl-horizontal">
                            <dt className="small">Created by:</dt><dd>{owner}</dd>
                            {/* <dt className="small">Fid:</dt><dd>{fid}</dd> */}
                            <dt className="small">Start Time:</dt><dd><a href="#">{startTime}</a></dd>
                            <dt className="small">Infuencers Fids:</dt><dd>{infuencersFidsString}</dd>
                            {/* <dt className="small">Campaign Platfrom Fees:</dt><dd>{campaignPlatfromFees}</dd> */}
                        </dl>
                    </div>
                    <div className="col-6">
                        <dl className="dl-horizontal">
                            {/* <dt className="small">Last Updated:</dt><dd>{lastRefreshTimeStamp}</dd> */}
                            <dt className="small">Fid:</dt><dd>{fid}</dd>
                            {/* <dt className="small">Created:</dt><dd>{campaignTiemstamp}</dd> */}
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
                    {/* <form className="row g-3"> */}


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

                    {/* </form> */}
                </div>



                {/* <div className="my-4">
                    <h5>Project tag</h5>
                    <span className="badge bg-primary me-1" href="#">Photoshop</span>
                    <span className="badge bg-secondary me-1" href="#">HTML, SCSS</span>
                    <span className="badge bg-warning me-1" href="#">Laravel 7.0.0</span>
                    <span className="badge bg-info" href="#">ReactJs</span>
                </div> */}

                {/* <h5>Project files</h5>
                <ul className="list-unstyled d-flex flex-wrap">
                    <li className="d-flex p-3 rounded bg-body dashed mb-1 me-1">
                        <div className="avatar bg-card me-2 fs-5 d-flex align-items-center justify-content-center"><i className="fa fa-file-pdf-o"></i></div>
                        <div>
                            <h6 className="text-truncate mb-0">Design file.pdf</h6>
                            <span className="file-size">2.7 mb</span>
                        </div>
                    </li>
                    <li className="d-flex p-3 rounded bg-body dashed mb-1 me-1">
                        <div className="avatar bg-card me-2 fs-5 d-flex align-items-center justify-content-center"><i className="fa fa-file-powerpoint-o"></i></div>
                        <div>
                            <h6 className="text-truncate mb-0">Design file.psd</h6>
                            <span className="file-size">22.5 mb</span>
                        </div>
                    </li>
                    <li className="d-flex p-3 rounded bg-body dashed mb-1 me-1">
                        <div className="avatar bg-card me-2 fs-5 d-flex align-items-center justify-content-center"><i className="fa fa-file-text-o"></i></div>
                        <div>
                            <h6 className="text-truncate mb-0">Project detail.doc</h6>
                            <span className="file-size">2.8 mb</span>
                        </div>
                    </li>
                </ul> */}



        {/* <DataTable columns={columns} data={dataT} /> */}
      {/* <div className="px-4 py-3 page-body"> */}
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