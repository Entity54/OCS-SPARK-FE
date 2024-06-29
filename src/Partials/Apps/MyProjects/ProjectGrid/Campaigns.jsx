import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SparkContext } from '@SparkContext';

import CardAction from '../../../Widgets/CardAction/CardAction'

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
  
    get_Formatted_Campaign_Specs
  } from "@Setup_EVM";


 
const ProjectGrid = () => {

    const { refreshCampaign, lastRefreshTimeStamp, broadcast_ChosenCampaign } = useContext(SparkContext);

    const [cardFS, setCardFS] = useState(false);  

    const [title, setTitle]   = useState('');
    const [description, setDescription]   = useState('');

    const [status, setStatus]   = useState('');
    const [status_C, setStatus_C]   = useState('');
    const [state, setState]   = useState('');
    const [budget, setBudget]   = useState('');
    const [fid, setFid]   = useState('');

    const [startTime, setStartTime]   = useState('');
    const [endtTime, setEndTime]   = useState('');

    const [campaign_influencersFidsArray, setCampaign_influencersFidsArray] = useState([]); 
    const [infuencersFidsString, setInfuencersFidsString]   = useState('');
    const [progressPercent, setProgressPercent]   = useState("");
    const [campaignTotalPoints, setCampaignTotalPoints]   = useState("");

    const [endsInMins, setEndsInMins]   = useState("");
    const [startsInMins, setStartsInMins]   = useState("");
   
    const [Table_List, setTable_List] = useState([]);  



    let Campaign_Table_List = [];
    const get_PendingCampaigns = async () => {
        const pendingCampaigns = await getPendingCampaigns();
        console.log('pendingCampaigns:', pendingCampaigns);
        await get_Campaign_Specs_List(pendingCampaigns);
    }
    const get_ActiveCampaignUIDs = async () => {
        const activeCampaignUIDs = await getActiveCampaignUIDs();
        console.log('activeCampaignUIDs:', activeCampaignUIDs);
        await get_Campaign_Specs_List(activeCampaignUIDs);
    }

    const get_Campaign_Specs_List = async (arrayOfCampaign_uids) => {
        for (let i = 0; i < arrayOfCampaign_uids.length; i++) {
            const campaign_uid = `${arrayOfCampaign_uids[i]}`;
             // console.log(`campaign_uid: `,campaign_uid);
             const campaignObject = await get_Formatted_Campaign_Specs(campaign_uid);
             // console.log('campaignObject:', campaignObject);
           
            
            const infuencersFids_String = (campaignObject.campaign_influencersFids).join(', ');
            campaignObject["campaign_infuencersFidsString"] = infuencersFids_String;


            const isCampaignActive = await get_Campaign_isActive(campaign_uid);
            const campaing_status = isCampaignActive ? 'Active' : 'Inactive';
            const campaing_status_c = isCampaignActive ? 'text-success' : 'text-danger';
            campaignObject["campaign_status"] = campaing_status;
            campaignObject["campaign_status_C"] = campaing_status_c;


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

            campaignObject["campaign__progressPercent"] = progress_percent;
            campaignObject["campaign__startsInMins"] = start_in_mins;
            campaignObject["campaign__endsInMins"] = ends_in_mins;

          Campaign_Table_List.push(campaignObject);
        }
    }

    const selectedCampaign = (campaign_uuid) => {
        console.log(`selectedCampaign campaign_uuid: `,campaign_uuid);
        broadcast_ChosenCampaign(campaign_uuid);
    }
    


    const cardIsFullScreen = (_cardFS) => {
        setCardFS(_cardFS);
        console.log('cardIsFullScreen: ', _cardFS);
    }

    useEffect(() => {
        const retrieveData = async () => {
            Campaign_Table_List = []
            await get_PendingCampaigns();
            await get_ActiveCampaignUIDs();
            setTable_List(Campaign_Table_List);
            // console.log(`Campaign_Table_List: `,Campaign_Table_List);
          
            refreshCampaign(); //UNCOMMNENT THIS TO KEEP REFRESHING
            console.log(`retrieveData lastRefreshTimeStamp: `,new Date(lastRefreshTimeStamp));
        }
        retrieveData();
    }, [lastRefreshTimeStamp]);  


  return (
        <div className="px-4 py-3 page-body">
            <ul className="row g-3 li_animate list-unstyled">

                {
                    Table_List.length===0?
                    (
                        <div >

                            <div className="d-flex justify-content-center align-items-center">
                                <span className="">No Pending or Live Campaigns at this moment</span>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        Table_List.map((data, index) => {

                        return(
                        <li key={index} className="col-lg-6 col-md-6">
                            <div className="card" style={{backgroundColor:"#001004"}}>
                                <div className="card-header flex-nowrap align-items-center">
                                    <span className="text-primary">Title: <strong href="#" className="h6 card-title mb-0" style={{color:"white", marginLeft:"10px"}}>{data.campaign_title}</strong></span>
                                    <CardAction cardIsFullScreen={cardIsFullScreen} />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-1">
                                        <i className="fa fa-info-circle me-3"></i>
                                        <span className="pe-2">Description: </span>
                                        <span className=''>{data.campaign_description}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="fa fa-credit-card me-3"></i>
                                        <span className="pe-2">Budget: </span>
                                        <span className=''>ETH <strong style={{marginLeft:"10px"}}>{data.campaign_budget}</strong></span>
                                    </div>

                                    <div className="d-flex align-items-center mb-1">
                                        <i className="fa fa-exclamation-circle me-3"></i>
                                        <span className="pe-2">Status: </span>
                                        <span className={`${data.campaign_status_C}`} >{data.campaign_status}</span>
                                    </div>

                                    <div className="d-flex align-items-center mb-1">
                                        <i className="fa fa-spinner me-3"></i>
                                        <span className="pe-2">State: </span>
                                        <span className={`${data.status_c}`} >{data.campaign_state}</span>
                                    </div>

                                    <div className="my-4">
                                        <span className="text-muted">Progress / {data.campaign__progressPercent}%</span>
                                        <div className="progress mt-2" style={{height: "3px"}}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: `${data.campaign__progressPercent}%`}}  aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-3 mb-4">
                                        <div>
                                            <p className="mb-1 text-muted small">Fid: </p>
                                            {data.campaign_fid}
                                        </div>
                                        <div className="ms-auto">
                                            <p className="mb-1 text-muted small">Starts: </p>
                                            {data.campaign_start_date}
                                        </div>
                                        <div className="vr"></div>
                                        <div>
                                            <p className="mb-1 text-muted small">Ends: </p>
                                            {data.campaign_end_date}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list avatar-list-stacked d-flex">
                                            <span className="pe-3">#Influencers</span>
                                            <span className="pe-3">{(data.campaign_influencersFids).length}</span>

                                            <span className="pe-3 text-muted" style={{marginLeft:"50px"}}>Last update: {new Date(lastRefreshTimeStamp).toLocaleString()}</span>
                                        </div>

                                        <Link key={index} to="/app/campaign-details" onClick = { () => selectedCampaign(data.campaign_uuid) }>
                                            <span className="text-primary" >View Detail</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </li>
                        )
                        })

                    )
                }

            </ul>
        </div>
    )
}

export default ProjectGrid