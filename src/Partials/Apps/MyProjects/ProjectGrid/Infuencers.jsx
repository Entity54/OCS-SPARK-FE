// INFUENCERS ALL GRID
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SparkContext } from '@SparkContext';

import { GridData } from './Components/ProjectGridData'
import CardAction from '../../../Widgets/CardAction/CardAction'

import { 
    getInfluencersUIDs, get_influencer,
  } from "@Setup_EVM";


  
const ProjectGrid = () => {

    const { refreshCampaign, lastRefreshTimeStamp, broadcast_ChosenInfuencerFid } = useContext(SparkContext);

    const [cardFS, setCardFS] = useState(false);  
    const [Table_List, setTable_List] = useState([]);  

    const base = "https://api.neynar.com/";
    const apiKey = import.meta.env.VITE_NEYNAR_API_KEY;


    const getUserInfo_withFid = async (fid) => {
        const user_url = `${base}v1/farcaster/user?fid=${fid}`;
      
        const user_response = await fetch(user_url, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip, deflate, br',
            'api_key': apiKey,
          },
        });
      
        const response = await user_response.json();
        const user = response.result.user;
        return({pfp_url: user.pfp.url, displayName: user.displayName, username: user.username, followers: user.followerCount, powerBadge: user.powerBadge})
    }


    let Influencers_Table_List = [];
    const get_InfluencersUIDs = async () => {
        const influencersUIDs = await getInfluencersUIDs();
        console.log('influencersUIDs:', influencersUIDs);
        await get_Influencer_Specs_List(influencersUIDs);
    }

    const get_Influencer_Specs_List = async (arrayOfinfluencersUIDs) => {
        for (let i = 0; i < arrayOfinfluencersUIDs.length; i++) {
            const infuenceer_fid = `${arrayOfinfluencersUIDs[i]}`;
           
            const sc_infuencerObject = await get_influencer(infuenceer_fid);

            const {pfp_url, displayName, username, followers, powerBadge} = await getUserInfo_withFid(infuenceer_fid);
            let infuencerObject = {...sc_infuencerObject, pfp_url, displayName, username, followers, powerBadge};

            console.log('infuencerObject:', infuencerObject);

            Influencers_Table_List.push(infuencerObject);
        }
    }

    const selectedInfuencer = (fid) => {
        console.log(`selectedInfuencer fid: `,fid);
        broadcast_ChosenInfuencerFid(fid);
    }

    const cardIsFullScreen = (_cardFS) => {
        setCardFS(_cardFS);
        console.log('cardIsFullScreen: ', _cardFS);
    }

    useEffect(() => {
        const retrieveData = async () => {
            Influencers_Table_List = []
            await get_InfluencersUIDs();
            setTable_List(Influencers_Table_List);
          
            refreshCampaign(); //UNCOMMENT THIS TO KEEP REFRESHING
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
                                <span className="">No Infuencers registered on the platform at this moment</span>
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
                                    <img className="avatar lg rounded-circle border border-3  rounded-4" src={data.pfp_url} alt="Profile image" />
                                    <div className="ms-3">
                                    <h4 className="mb-0 text-gradient title-font">@{data.displayName}</h4>
                                </div>

                                    <CardAction cardIsFullScreen={cardIsFullScreen} />
                                </div>
                                <div className="card-body">
                                  
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="fa fa-credit-card me-3"></i>
                                        <span className="pe-2">Payable Address (ETH): </span>
                                        <span className=''><strong style={{marginLeft:"10px"}}>{data.verifiedAddress}</strong></span>
                                    </div>

                                    <div className="d-flex align-items-center mb-1">
                                        <i className="fa fa-exclamation-circle me-3"></i>
                                        <span className="pe-2">Profile Owner Address: </span>
                                        <span className={`${"data.campaign_status_C"}`} >{data.ownerAddress}</span>
                                    </div>


                                    <div className="my-4">
                                        <span className="text-muted">Spammer Factor / {`${data.spammerFactor}`}</span>
                                        <div className="progress mt-2" style={{height: "3px"}}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: `${Math.floor(100/Number(`${data.spammerFactor}`))}%`}}  aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-3 mb-4">
                                        <div>
                                            <p className="mb-1 text-muted small">Fid: </p>
                                            {`${data.fid}`}
                                        </div>
                                        <div className="ms-auto">
                                            <p className="mb-1 text-muted small">Followers: </p>
                                            {data.followers}
                                        </div>
                                        <div className="vr"></div>
                                        <div>
                                            <p className="mb-1 text-muted small">Power Badge: </p>
                                            {data.powerBadge?"Yes":"No"}
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list avatar-list-stacked d-flex">

                                            <span className="pe-3 text-muted" style={{marginLeft:"0px"}}>Last update: {new Date(lastRefreshTimeStamp).toLocaleString()}</span>

                                        </div>

                                        <Link key={index} to="/app/account-settings" onClick = { () => selectedInfuencer(data.fid) }>
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