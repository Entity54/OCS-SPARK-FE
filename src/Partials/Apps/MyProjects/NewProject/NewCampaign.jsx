// import React from 'react'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { SparkContext } from '@SparkContext';

import Inputmask from 'inputmask';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import Select2 from "select2"; 
import "select2/dist/css/select2.css";

import { amendWebhookElements } from "@WebhoooksManagement";

import { createCampaign, 
    getAccountInfo,
    getPendingCampaigns,
    getActiveCampaignUIDs,
    getExpiredCampaignUIDs,
    getReadyFroPaymentCampaignUIDs,
    get_Campaign_Specs,
    get_Campaign_PointMarking,
    get_Campaign_platform_fees,
    get_withdrawable_platform_fees,
    get_campaignFidToUid,
    registerWebhookData,
    ADMIN_withdrawPlatformFees
} from "@Setup_EVM";



const NewProject = () => {

    const { contextAccount  } = useContext(SparkContext);

    const dateInputSTARTRef = useRef(null);
    const dateInputENDRef = useRef(null);

	const [campaignTitle, setCampaignTitle]   = useState("Dream Cars Marketing Campaign");
	const [campaignFID, setCampaignFID]   = useState("723628");
	const [campaignDescription, setCampaignDescription]   = useState("This is a marketing campaign for a dream company");
	const [campaignEthereumAddress, setCampaignEthereumAddress]   = useState("");
    const [campaignBudget, setCampaignBudget]   = useState("0.00001");
	const [startUnixTimeSecs, setStartUnixTimeSecs]   = useState(Math.floor(new Date().getTime() / 1000));
	const [endUnixTimeSecs, setEndUnixTimeSecs]   = useState(10 * 60+ Math.floor(new Date().getTime() / 1000));

    const [actionFollowCompanyAccount, setActionFollowCompanyAccount]   = useState("1");
    const [actionLikeCompanyCasts, setActionLikeCompanyCasts]   = useState("2");
    const [actionRacastCompanyCasts, setActionRacastCompanyCasts]   = useState("3");
    const [actionReplyToCompanyCasts, setActionReplyToCompanyCasts]   = useState("4");
    const [actionMentionCompanyAccountInCast, setActionMentionCompanyAccountInCast]   = useState("5");
    const [actionContainCompanyTaglineInCast, setActionContainCompanyTaglineInCast]   = useState("6");
    const [actionEmbedCompanyURLInCast, setActionEmbedCompanyURLInCast]   = useState("7");

    const [urlEmbed1, setUrlEmbed1]   = useState("https://www.example-dream-cars.com");
    const [tagLine1, setTagLine1]   = useState("Yolo Dream Cars");


    const updateWebhookElements = async (campaign_uuid) => {
     
        const webhook_response = await amendWebhookElements (
            "add", campaignFID, //"620429", 
            "add", campaignFID, //"620429", 
            "add", tagLine1,    //"Beautiful Day", 
            "add", urlEmbed1,   //"https://www.example.com",
            "add", campaignFID, //"620430", 
            "add", campaignFID, //"620430", 
            "add", campaignFID, //"620430", 
            "add", campaignFID, //"620430"
        );
        console.log(`updateWebhookElements webhook_response: `,webhook_response);

        await registerWebhookData(
            campaign_uuid, campaignFID,                  
            campaignFID, tagLine1, campaignFID, urlEmbed1, campaignFID, campaignFID, campaignFID, campaignFID
        );

    }

    const registerCampaign = async () => {
        console.log("registerCampaign() called");
        console.log(`campaignTitle: ${campaignTitle}`);
        console.log(`campaignFID: ${campaignFID}`);
        console.log(`campaignDescription: ${campaignDescription}`);

        console.log(`campaignEthereumAddress: ${campaignEthereumAddress}`);
        console.log(`campaignBudget: ${campaignBudget}`);

        console.log(`startUnixTimeSecs: ${startUnixTimeSecs}`);
        console.log(`endUnixTimeSecs: ${endUnixTimeSecs}`);

        console.log(`actionFollowCompanyAccount: ${actionFollowCompanyAccount}`);
        console.log(`actionLikeCompanyCasts: ${actionLikeCompanyCasts}`);
        console.log(`actionRacastCompanyCasts: ${actionRacastCompanyCasts}`);
        console.log(`actionReplyToCompanyCasts: ${actionReplyToCompanyCasts}`);
        console.log(`actionMentionCompanyAccountInCast: ${actionMentionCompanyAccountInCast}`);
        console.log(`actionContainCompanyTaglineInCast: ${actionContainCompanyTaglineInCast}`);
        console.log(`actionEmbedCompanyURLInCast: ${actionEmbedCompanyURLInCast}`);
        console.log(`urlEmbed1: ${urlEmbed1}`);
        console.log(`tagLine1: ${tagLine1}`);

        await createCampaign(
            campaignTitle, campaignDescription, campaignFID, startUnixTimeSecs, endUnixTimeSecs, 
            [
                actionFollowCompanyAccount, actionLikeCompanyCasts, actionRacastCompanyCasts, 
                actionReplyToCompanyCasts, actionMentionCompanyAccountInCast, 
                actionContainCompanyTaglineInCast, actionEmbedCompanyURLInCast
            ], 
            campaignBudget
        )
        // campaignEthereumAddress read automatically from Smart Wallet
        // campaignBudget passed ETH with value, 


        // Get campaign uuid of the campaign just registered
        const campaign_uuid = await get_campaignFidToUid(campaignFID);
        console.log(`get_campaignFidToUid For campaignFID: ${campaignFID} campaign_uuid: `,campaign_uuid);

        // Update Webhook elements in Neynar AND record these in CampaignAssets.sol
        updateWebhookElements(campaign_uuid);
    }

    const resetCampaign = () => {
        console.log("resetCampaign() called");
        setCampaignTitle("");
        setCampaignFID("");
        setCampaignDescription("");
        setCampaignEthereumAddress("");
        setCampaignBudget("");
        setStartUnixTimeSecs("");
        setEndUnixTimeSecs("");
        setActionFollowCompanyAccount("");
        setActionLikeCompanyCasts("");
        setActionRacastCompanyCasts("");
        setActionReplyToCompanyCasts("");
        setActionMentionCompanyAccountInCast("");
        setActionContainCompanyTaglineInCast("");
        setActionEmbedCompanyURLInCast("");
        setUrlEmbed1("https://www.example.com");
        setTagLine1("Yolo holidays");
    }


    const get_PendingCampaigns = async () => {
        const pendingCampaigns = await getPendingCampaigns();
        console.log("pendingCampaigns: ",JSON.stringify(pendingCampaigns));
    }
    const get_ActiveCampaignUIDs = async () => {
        const activeCampaignUIDs = await getActiveCampaignUIDs();
        console.log("activeCampaignUIDs: ",JSON.stringify(activeCampaignUIDs));
    
    }
    const get_ExpiredCampaignUIDs = async () => {
        const expiredCampaignUIDs = await getExpiredCampaignUIDs();
        console.log("expiredCampaignUIDs: ",JSON.stringify(expiredCampaignUIDs));
    
    }
    const get_ReadyFroPaymentCampaignUIDs = async () => {
        const readyForPaymentCampaignUIDs = await getReadyFroPaymentCampaignUIDs();
        console.log("readyForPaymentCampaignUIDs: ",JSON.stringify(readyForPaymentCampaignUIDs));
    }
    const get_CampaignSpecs = async () => {
        let uuid= "0";
        const campaignSpecs = await get_Campaign_Specs(uuid);
        console.log("campaignSpecs: ",campaignSpecs);
    }
    const get_CampaignPointMarking = async () => {
        let uuid= "0";
        const campaignPointMarking = await get_Campaign_PointMarking(uuid);
        console.log("campaignPointMarking: ",campaignPointMarking);
    }
    const get_Campaignplatformfees = async () => {
        let uuid= "0";
        const campaignplatformfees = await get_Campaign_platform_fees(uuid);
        console.log("campaignplatformfees: ",campaignplatformfees);
    
    }
    const get_withdrawableplatformfees = async () => {
        const withdrawableplatformfees = await get_withdrawable_platform_fees();
        console.log("withdrawableplatformfees: ",withdrawableplatformfees);
    }
    const ADMINwithdrawPlatformFees = async () => {
        const response = await ADMIN_withdrawPlatformFees();
        console.log("withdrawableplatformfees: ",response);
    }


    useEffect(() => {
        setCampaignEthereumAddress(contextAccount);
    }, [contextAccount]);    

   
    useEffect(() => {

        //#region Date and Time Picker
        Inputmask({ "mask" : "(999) 999-9999" }).mask(".phone-number");

        // flatpickr('.f-basic', {
        //     enableTime: true,
        //     dateFormat: 'Y-m-d H:i',
        // });

        // Select2('.select2');
          
        // Initialize Flatpickr on the input field for the Start Date & Time
        if (dateInputSTARTRef.current) {
            flatpickr(dateInputSTARTRef.current, {
                enableTime: true,         // Enable time selection
                dateFormat: "Y-m-d H:i",  // Format the date and time
                time_24hr: true,          // Use 24-hour time format
                onChange: (selectedDates, dateStr) => {
                    const date = new Date(dateStr);
                    const secondsSinceEpoch = Math.floor(date.getTime() / 1000);
                    console.log(`Selected START date and time: ${dateStr} and in seconds since Unix epoch: ${secondsSinceEpoch}`);
                    setStartUnixTimeSecs(secondsSinceEpoch);
                }
            });
        }
        // Initialize Flatpickr on the input field for the End Date & Time
        if (dateInputENDRef.current) {
            flatpickr(dateInputENDRef.current, {
                enableTime: true,         // Enable time selection
                dateFormat: "Y-m-d H:i",  // Format the date and time
                time_24hr: true,          // Use 24-hour time format
                onChange: (selectedDates, dateStr) => {
                    const date = new Date(dateStr);
                    const secondsSinceEpoch = Math.floor(date.getTime() / 1000);
                    console.log(`Selected END date and time: ${dateStr} and in seconds since Unix epoch: ${secondsSinceEpoch}`);
                    setEndUnixTimeSecs(secondsSinceEpoch);
                }
            });
        }
        Select2('.select2');
        //#endregion Date and Time Picker


    }, []);    




  return (
        <div className="px-4 py-3 page-body">
            <form className="row g-3">
                <div className="col-12" style={{color:"#06E443"}}>
                    <h3>New Campaign</h3>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={campaignTitle} placeholder="Campaign title"
                        	onChange={(event) => setCampaignTitle(event.target.value)}
                        />
                        <label>Campaign Title</label>
                    </div>
                </div>

                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={campaignFID} placeholder="123"
                        	onChange={(event) => setCampaignFID(event.target.value)}
                        />
                        <label>Campaign Farcaster FID</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={campaignDescription}  placeholder="Campaign Description"
                            onChange={(event) => setCampaignDescription(event.target.value)}
                        />
                        <label>Campaign Description</label>
                    </div>
                </div>

                {/* <div className="col-md-6">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select client</option>
                            <option value="1">Client One</option>
                            <option value="2">Client Two</option>
                            <option value="3">Client Three</option>
                        </select>
                        <label>Client</label>
                    </div>
                </div> */}
                <div className="col-md-6">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={campaignEthereumAddress} placeholder="Budget"
                            onChange={(event) => setCampaignEthereumAddress(event.target.value)}
                        />
                        <label>Client Ethereum Address</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={campaignBudget} placeholder="Budget"
                            onChange={(event) => setCampaignBudget(event.target.value)}
                        />
                        <label>Budget</label>
                    </div>
                </div>

                {/* <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <input className="form-control" type="date" placeholder="StartDate"/>
                        <label>StartDate</label>
                    </div>
                </div> */}

                <div className="mb-3 col-md-6 col-12">
                    <label className="col-form-label">Start Date & Time</label>
                    <fieldset className="form-icon-group left-icon position-relative">
                        <input type="text" ref={dateInputSTARTRef} className="form-control f-basic flatpickr-input" placeholder="Select Date.." readOnly="readonly"/>
                        <div className="form-icon position-absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        </div>
                    </fieldset>
                </div> 
                <div className="mb-3 col-md-6 col-12">
                    <label className="col-form-label">End Date & Time</label>
                    <fieldset className="form-icon-group left-icon position-relative">
                        <input type="text" ref={dateInputENDRef} className="form-control f-basic flatpickr-input" placeholder="Select Date.." readOnly="readonly"/>
                        <div className="form-icon position-absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        </div>
                    </fieldset>
                </div>


                {/* <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <input className="form-control" type="date" placeholder="Deadline"/>
                        <label>Deadline</label>
                    </div>
                </div> */}

                <br/>
                <br/>
                <br/>
                <br/>


                <div className="col-12" style={{color:"#05B234"}}>
                    <h5>Score Points Allocation per Action</h5>
                </div>
                

                <div className="col-md-2">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionFollowCompanyAccount} placeholder="Budget"
                            onChange={(event) => setActionFollowCompanyAccount(event.target.value)}
                        />
                        <label>Action - Follow Company Account</label>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionLikeCompanyCasts} placeholder="Budget"
                            onChange={(event) => setActionLikeCompanyCasts(event.target.value)}
                        />
                        <label>Action - Like Company Casts</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionRacastCompanyCasts} placeholder="Budget"
                            onChange={(event) => setActionRacastCompanyCasts(event.target.value)}
                        />
                        <label>Action - Racast Company Casts</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionReplyToCompanyCasts} placeholder="Budget"
                            onChange={(event) => setActionReplyToCompanyCasts(event.target.value)}
                        />
                        <label>Action - Reply to Company Casts</label>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionMentionCompanyAccountInCast} placeholder="Budget"
                            onChange={(event) => setActionMentionCompanyAccountInCast(event.target.value)}
                        />
                        <label>Action - Mention Company Account in Cast</label>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionContainCompanyTaglineInCast} placeholder="Budget"
                            onChange={(event) => setActionContainCompanyTaglineInCast(event.target.value)}

                        
                        />
                        <label>Action - Contain Company Tagline in Cast</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input className="form-control" type="text" value={actionEmbedCompanyURLInCast} placeholder="Budget"
                            onChange={(event) => setActionEmbedCompanyURLInCast(event.target.value)}
                        />
                        <label>Action - Embed Company URL in Cast</label>
                    </div>
                </div>
                {/* <div className="col-md-3">
                    <div className="form-floating">
                        <input className="form-control" type="text" placeholder="Budget"/>
                        <label>Action - Contain Company Tagline in Cast</label>
                    </div>
                </div> */}
   

                <br/>
                <br/>
                <br/>
                <br/>

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





                <div className="col-12">
                    <button type="button" className="btn btn-primary"
                        onClick = { () => registerCampaign() }
                    >Create Campaign</button>
                    <button type="button" className="btn btn-secondary me-1"  style={{marginLeft:"10px"}}
                        onClick = { () => resetCampaign() }
                    >Cancel</button>
                </div>



                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <h5>Admin helper</h5>
                <div className="col-12">
                    <button type="button" className="btn btn-secondary me-1" 
                        onClick = { () => get_PendingCampaigns() }
                    >getPendingCampaigns
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_ActiveCampaignUIDs() }
                    >getActiveCampaignUIDs
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_ExpiredCampaignUIDs() }
                    >getExpiredCampaignUIDs
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_ReadyFroPaymentCampaignUIDs() }
                    >getReadyFroPaymentCampaignUIDs
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_CampaignSpecs() }
                    >get_Campaign_Specs
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_CampaignPointMarking() }
                    >get_Campaign_PointMarking
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_Campaignplatformfees() }
                    >get_Campaign_platform__fees
                    </button>

                    <button type="button" className="btn btn-secondary me-1"  
                        onClick = { () => get_withdrawableplatformfees() }
                    >get_withdrawable_platform_fees
                    </button>


                    <button type="button" className="btn btn-primary"
                        onClick = { () => ADMINwithdrawPlatformFees() }
                    >ADMIN_withdrawPlatformFees Project</button>
                
                </div>


<br/>
<br/>
<br/>


{/* 
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select privacy</option>
                            <option value="1">Data Privacy One</option>
                            <option value="2">Data Privacy Two</option>
                            <option value="3">Data Privacy Three</option>
                        </select>
                        <label>Project privacy</label>
                    </div>
                </div>

                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select team</option>
                            <option value="1">Team One</option>
                            <option value="2">Team Two</option>
                            <option value="3">Team Three</option>
                        </select>
                        <label>Team </label>
                    </div>
                </div>

                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select assignees </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label>People </label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select admin</option>
                            <option value="1">Data Privacy One</option>
                            <option value="2">Data Privacy Two</option>
                            <option value="3">Data Privacy Three</option>
                        </select>
                        <label>Project Lead</label>
                    </div>
                </div>


                <div className="col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select task view</option>
                            <option value="1">technical</option>
                            <option value="2">external</option>
                            <option value="3">organizational</option>
                        </select>
                        <label>Defult task view</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" style={{height: "100px"}}></textarea>
                        <label>Project overview</label>
                    </div>
                </div> */}


            </form>
        </div>
    )
}

export default NewProject