// INFLUENCER DETAILS
import React, { useContext, useEffect, useState, useRef } from 'react'
import { SparkContext } from '@SparkContext';


import General from './Components/General'
import Billing from './Components/Billing'
// import CardAction from '../../../Widgets/CardAction/CardAction'
// import Members from './Components/Members'
// import Security from './Components/Security'
// import Notifications from './Components/Notifications'
// import profileImage from '../../../../assets/images/profile_av.png';


import { createCampaign, 
    get_influencer,
  } from "@Setup_EVM";



const AccountSetting = () => {
    const { contextAccount, refreshCampaign, lastRefreshTimeStamp, chosenCampaign, chosenInfuencerFid } = useContext(SparkContext);


    const [activeTab, setActiveTab] = useState('setting-general');
    const [influencerFid, setInfluencerFid]   = useState('');
    const [inputFid, setInputFid]   = useState('620429');
    const [influencer_Fid, setInfluencer_Fid] = useState('');
    const [influencer_Username, setInfluencer_Username] = useState('');
    const [influencer_Displayname, setInfluencer_Displayname] = useState('');
    const [influencer_CustodyAddres, setInfluencer_CustodyAddres] = useState('');
    const [influencer_VerifiedAccounts, setInfluencer_VerifiedAccounts] = useState([]);
    const [influencer_VerifiedAccount, setInfluencer_VerifiedAccount] = useState('');
    const [influencer_pfp_url, setInfluencer_pfp_url] = useState('');
    const [influencer_active_status, setInfluencer_active_status] = useState('');
    const [influencer_Followers_Count, setInfluencer_Followers_Count] = useState('');
    const [influencer_Following_Count, setInfluencer_Following_Count] = useState('');
    const [influencer_HasPowerBadge, setInfluencer_HasPowerBadge] = useState('');
    const [influencer_AboutMe, setInfluencer_AboutMe] = useState('');
    const [influencer_ownerAddress, setInfluencer_ownerAddress] = useState('');
    const [influencer_spamFactor, setInfluencer_spamFactor] = useState('');



    const base = "https://api.neynar.com/";
    const apiKey = import.meta.env.VITE_NEYNAR_API_KEY;


    const getUserInfo_withFid = async () => {
        const user_url = `${base}v1/farcaster/user?fid=${influencerFid}`;
      
        const user_response = await fetch(user_url, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip, deflate, br',
            'api_key': apiKey,
          },
        });
      
        const response = await user_response.json();
        const user = response.result.user;
        // console.log(user); // logs information about the user

        setInfluencer_pfp_url(user.pfp.url);
        setInfluencer_AboutMe(user.profile.bio.text);
        setInfluencer_active_status(`${user.activeStatus}`);
        setInfluencer_Displayname(user.displayName);
        setInfluencer_Followers_Count(user.followerCount);
        setInfluencer_Following_Count(user.followingCount);
        setInfluencer_HasPowerBadge(user.powerBadge);
        setInfluencer_Username(user.username);
        
        const infuencerStruct = await get_influencer(influencerFid);
        setInfluencer_VerifiedAccount(infuencerStruct.verifiedAddress);
        setInfluencer_CustodyAddres(infuencerStruct.custodyAddress);
        setInfluencer_ownerAddress(infuencerStruct.ownerAddress);
        setInfluencer_spamFactor(infuencerStruct.spammerFactor);
    }


    const chooseInfuencer = (choosenFid) => {
        console.log(`choosenFid: ${choosenFid}`);
        setInfluencerFid(choosenFid);
    }


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };



    useEffect(() => {

        const retrieveData = async () => {
            await getUserInfo_withFid();

            // infuencer_fids = [];
            // get_Infuencers_List();
            // setTable_List(infuencer_fids);

            console.log(`INFLUENCER DETAILS 1 retrieveData influencerFid: ${influencerFid} lastRefreshTimeStamp: `,new Date(lastRefreshTimeStamp));
        }
        if (influencerFid) retrieveData();
    }, [influencerFid, lastRefreshTimeStamp]);  




    // WHEN ANOTHER PAGE INFLUENCER SELECTION DIVERTS TO THIS PAGE
    useEffect(() => {
        if (chosenInfuencerFid) 
        {
            setInputFid(chosenInfuencerFid);
            chooseInfuencer(chosenInfuencerFid);
        }
        console.log(`INFLUENCER DETAILS 2 chosenInfuencerFid: ${chosenInfuencerFid}`);
    }, [chosenInfuencerFid]); 

  return (
    <>
    <div className="ps-2 pt-2 pb-1 page-body">
        <div className="card bg-transparent border-0">
            <div className="card-header bg-card pb-0 z-2">


                <div className="col-12" style={{color:"#05B234"}}>
                    <h5>Infuencer Profile</h5>
                </div>

                <div className="col-12" style={{color:"#05B234"}}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating">
                                <input
                                    className="form-control"
                                    type="text"
                                    value={inputFid}
                                    placeholder="0"
                                    onChange={(event) => setInputFid(event.target.value)}
                                />
                                <label>Farcaster Fid</label>
                            </div>
                        </div>

                        <div className="col-6">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => chooseInfuencer(inputFid)}
                            >
                                Insert Infuencer Fid
                            </button>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>


                <div className="w-100 mt-4">
                    <ul className="row g-lg-4 g-2 list-unstyled li_animate mb-4 mb-lg-5">
                        <li className="col-xl-4 col-lg-5 col-md-5 col-12">
                            <div className="d-flex align-items-center">
                                {
                                influencer_pfp_url?
                                    <img className="avatar lg rounded-circle border border-3  rounded-4" src={influencer_pfp_url} alt="Profile image" />
                                    :
                                    <img className="avatar lg rounded-circle border border-3  rounded-4" src="https://via.placeholder.com/300x200.png?text=Farcaster+Profile" alt="placeholder" />
                                }

                                <div className="ms-3">
                                    <h4 className="mb-0 text-gradient title-font">{influencer_Username}</h4>
                                    <p className="text-muted small">@{influencer_Displayname}</p>
                                </div>
                            </div>
                        </li>
                        <li className="col-xl-8 col-lg-7 col-md-7 col-12">
                            <ul className="list-unstyled d-none d-lg-flex align-items-start justify-content-md-end p-0 mb-0 ps-5 ps-md-0 ms-4 ms-md-0">
                                <li className="px-lg-4 px-3 ps-0">
                                    <p className="text-uppercase text-muted small mb-1">Campaigns Participated</p>
                                    <div className="d-flex align-items-center"><span className="h4 mb-0">54</span> 
                                    </div>
                                </li>
                             
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-tabs tab-card border-0 li_animate px-1 mb-0" role="tablist">
                        <li className="nav-item">
                            <a className={`nav-link px-0 me-xl-4 me-3 fs-6 ${activeTab === 'setting-general' ? 'active' : ''}`} data-bs-toggle="tab" href="#" onClick={() => handleTabClick('setting-general')}>
                                <i className="fa fa-gear"></i>
                                <span className="ps-1">General</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link px-0 me-xl-4 me-3 fs-6 ${activeTab === 'setting-billing' ? 'active' : ''}`} data-bs-toggle="tab" href="#" onClick={() => handleTabClick('setting-billing')}>
                                <i className="fa fa-credit-card"></i>
                                <span className="ps-1">Billing</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body z-1">
                <div className="tab-content py-3">
                    <div id="setting-general" className={`tab-pane ${activeTab === 'setting-general' ? 'active' : ''}`}>
                        <General 
                        influencerFid={influencerFid}  
                        influencer_active_status={influencer_active_status}
                        influencer_Followers_Count={influencer_Followers_Count} influencer_Following_Count={influencer_Following_Count}
                        influencer_HasPowerBadge={influencer_HasPowerBadge} influencer_AboutMe={influencer_AboutMe}

                        influencer_spamFactor={influencer_spamFactor}
                        influencer_ownerAddress={influencer_ownerAddress} influencer_VerifiedAccount={influencer_VerifiedAccount} 
                        influencer_CustodyAddres={influencer_CustodyAddres}
                        />
                    </div>
                    <div id="setting-billing" className={`tab-pane ${activeTab === 'setting-billing' ? 'active' : ''}`}>
                        <Billing 
                        contextAccount={contextAccount}
                        influencerFid={influencerFid}  
                        influencer_ownerAddress={influencer_ownerAddress} 
                        influencer_VerifiedAccount={influencer_VerifiedAccount} 
                        influencer_CustodyAddres={influencer_CustodyAddres}
                        influencer_spamFactor={influencer_spamFactor}
                        
                        />
                    </div>
              
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AccountSetting