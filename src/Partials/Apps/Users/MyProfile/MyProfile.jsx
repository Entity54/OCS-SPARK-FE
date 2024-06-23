import React, { useContext, useEffect, useState } from 'react';


import CardAction from '../../../Widgets/CardAction/CardAction';
import profileImage from '../../../../assets/images/profile_av.png';

import { NeynarAuthButton, useNeynarContext } from "@neynar/react";



const MyProfile = () => {

    const { user } = useNeynarContext();

    const [influencer_Fid, setInfluencer_Fid] = useState('');
    const [influencer_Username, setInfluencer_Username] = useState('');
    const [influencer_Displayname, setInfluencer_Displayname] = useState('');

    const [influencer_CustodyAddres, setInfluencer_CustodyAddres] = useState('');
    const [influencer_VerifiedAccounts, setInfluencer_VerifiedAccounts] = useState('');
    const [influencer_VerifiedAccount, setInfluencer_VerifiedAccount] = useState('');

    const [influencer_pfp_url, setInfluencer_pfp_url] = useState('');

    const [influencer_active_status, setInfluencer_active_status] = useState('');
    const [influencer_Followers_Count, setInfluencer_Followers_Count] = useState('');
    const [influencer_Following_Count, setInfluencer_Following_Count] = useState('');
    const [influencer_HasPowerBadge, setInfluencer_HasPowerBadge] = useState('');



    const [influencer_AboutMe, setInfluencer_AboutMe] = useState('');







  useEffect(() => {
    // Load the Neynar script
    const script = document.createElement('script');
    script.src = "https://neynarxyz.github.io/siwn/raw/1.2.0/index.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    console.log(`user: `, user);

    console.log(`user.fid: `, user.fid);
    console.log(`user.username: `, user.username);
    console.log(`user.display_name: `, user.display_name);
    console.log(`user.pfp_url: `, user.pfp_url);
    console.log(`user.custody_address: `, user.custody_address);
    console.log(`user.profile.bio.text: `, user.profile.bio.text);
    console.log(`user.active_status: `, user.active_status);
    console.log(`user.follower_count: `, user.follower_count);
    console.log(`user.following_count: `, user.following_count);
    console.log(`user.verifications: `, user.verifications);
    console.log(`user.verified_addresses.eth_addresses: `, user.verified_addresses.eth_addresses);
    console.log(`user.power_badge: `, user.power_badge);

    console.log(`user.signer_uuid: `, user.signer_uuid);

    setInfluencer_Fid(user.fid);
    setInfluencer_Username(user.username);
    setInfluencer_Displayname(user.display_name);
    setInfluencer_CustodyAddres(user.custody_address);
    setInfluencer_VerifiedAccounts(user.verified_addresses.eth_addresses.join(','));
    setInfluencer_VerifiedAccount(user.verifications[0]);
    setInfluencer_AboutMe(user.profile.bio.text);
    setInfluencer_pfp_url(user.pfp_url);
    setInfluencer_active_status(user.active_status);
    setInfluencer_Followers_Count(user.follower_count);
    setInfluencer_Following_Count(user.following_count);
    setInfluencer_HasPowerBadge(user.power_badge);

  }, [user]);





  return (
    <div className="ps-2 pt-2 pb-1 page-body">
        <div className="card bg-transparent border-0">

            <div className="card-body">
                <div className="row g-3">

                    <div className="col-xl-8 col-lg-7">
                        <h4 className="card-title mb-0">Influencer Profile</h4>
                        <div className="row g-3 my-3">


                        {/* <div className="my-3">
                            <button className="btn btn-primary me-1">Follow</button>
                            <button className="btn btn-dark">Message</button>
                        </div> */}
                        

                        {/* <div className="my-3">
                            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                                    <NeynarAuthButton />
                                </div>
                            </main>
                        </div> */}


                        <div className="card-header bg-card pb-3">
                            {/* <h6 className="card-title mb-0">My Profile</h6> */}
                            {/* <div className="dropdown card-action">
                                <CardAction/>
                            </div> */}
                            <div className="d-flex align-items-md-start align-items-center flex-column flex-md-row mt-4 w-100">
                                {/* <img src={profileImage} alt="" className="rounded-4"/> */}
                                <img src={influencer_pfp_url} alt="" className="rounded-4"/>

                                <div className="media-body ms-md-5 m-0 mt-4 mt-md-0 text-md-start text-center">
                                    <h4 className="mb-1">{influencer_Username}</h4>
                                    <p>@{influencer_Displayname}</p>
                                    <span className="text-muted">{influencer_AboutMe}</span>


                                    <div className="my-3">
                                        {/* <button className="btn btn-primary me-1">Follow</button> */}
                                        {/* <button className="btn btn-dark">Message</button> */}


                                        <div className="flex min-h-screen flex-col items-center justify-between p-24">
                                            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                                                <NeynarAuthButton />
                                            </div>
                                        </div>

                                    </div>



                                    <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                        <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                            <small className="text-muted">Followers</small>
                                            <div className="fs-5">{influencer_Followers_Count}</div>
                                        </div>
                                        <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                            <small className="text-muted">Following</small>
                                            <div className="fs-5">{influencer_Following_Count}</div>
                                        </div>
                                        <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                            <small className="text-muted">Power Badge</small>
                                            <div className="fs-5">{influencer_HasPowerBadge?"Yes":"No"}</div>
                                        </div>
                                        <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                            <small className="text-muted">Active Status</small>
                                            <div className="fs-5">{influencer_active_status}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                            <div className="col-sm-6 col-md-3">
                                <label className="form-label small text-muted">Farcaster ID (Fid)</label>
                                <input type="text" disabled className="form-control" placeholder="Farcaster Id" value={influencer_Fid}/>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label small text-muted">User name</label>
                                <input type="text" className="form-control" disabled placeholder="Farcaster Account Username" value={influencer_Username}/>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label small text-muted">Display name</label>
                                <input type="text" className="form-control" disabled placeholder="Farcaster Account Username" value={influencer_Displayname}/>
                            </div>


                            {/* </div> */}
                            <div className="col-sm-6 col-md-6">
                                <label className="form-label small text-muted">Custody Address</label>
                                <input type="text" disabled className="form-control" placeholder="Farcaster Account Custody Address" value={influencer_CustodyAddres}/>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <label className="form-label small text-muted">Payable Address</label>
                                <input type="text" className="form-control" placeholder="Farcaster Account Custody Address" value={influencer_VerifiedAccount}
                                    onChange={(event) => setInfluencer_VerifiedAccount(event.target.value)}
                                />
                            </div>

                            <div className="col-sm-12 col-md-12">
                                <label className="form-label small text-muted">Verified Ethereum Addresses</label>
                                <input type="text" disabled className="form-control" placeholder="Farcaster account verified Ethereum Address to get paid" value={influencer_VerifiedAccounts}/>
                            </div>


                            {/* <div className="col-sm-6 col-md-3">
                                <label className="form-label small text-muted">Followers Count</label>
                                <input type="text" disabled className="form-control" placeholder="Farcaster Id" value={influencer_Followers_Count}/>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label small text-muted">Following Count</label>
                                <input type="text" className="form-control" disabled placeholder="Farcaster Account Username" value={influencer_Following_Count}/>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label small text-muted">Active Status</label>
                                <input type="text" className="form-control" disabled placeholder="Farcaster Account Username" value={influencer_active_status}/>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label small text-muted">Power Badge</label>
                                <input type="text" className="form-control" disabled placeholder="Farcaster Account Username" value={influencer_HasPowerBadge?"Yes":"No"}/>
                            </div> */}

{/* 
                            <div className="col-md-12">
                                <label className="form-label small text-muted">Address</label>
                                <input type="text" className="form-control" placeholder="Home Address" defaultValue="455 S. Airport St. Moncks Corner"/>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <label className="form-label small text-muted">City</label>
                                <input type="text" className="form-control" placeholder="City" defaultValue="New York"/>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <label className="form-label small text-muted">Postal Code</label>
                                <input type="number" className="form-control" placeholder="ZIP Code"/>
                            </div>
                            <div className="col-md-5">
                                <label className="form-label small text-muted">Country</label>
                                <select className="form-control custom-select">
                                    <option defaultValue="">USA</option>
                                </select>
                            </div> */}

                            {/* <div className="col-md-12">
                                <label className="form-label small text-muted">About Me</label>
                                <textarea disabled rows="5" className="form-control" placeholder="Here can be your description" value={influencer_AboutMe}>
                                </textarea>
                            </div> */}

                        </div>
                        <button type="submit" className="btn btn-primary">Register Profile</button>
                    </div>
                </div> 
                {/* <!--[ .row end ]--> */}
            </div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

            <div className="card-body">
                <div className="row g-3">

                    <div className="col-xl-4 col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title mb-3">Skills Information</h6>
                                <p className="text-muted">Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non maximus neque, ut finibus ex. <a href="#">Read more</a></p>
                                <div className="d-flex justify-content-between">
                                    <small className="text-uppercase">BOOTSTRAP:</small>
                                    <small className="text-muted">95</small>
                                </div>
                                <div className="progress mt-1 mb-3" style={{height: "2px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <small className="text-uppercase">HTML5:</small>
                                    <small className="text-muted">77</small>
                                </div>
                                <div className="progress mt-1 mb-3" style={{height: "2px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%"}}></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <small className="text-uppercase">JQUERY:</small>
                                    <small className="text-muted">66</small>
                                </div>
                                <div className="progress mt-1 mb-3" style={{height: "2px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style={{width: "66%"}}></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <small className="text-uppercase">RESPONSIVE:</small>
                                    <small className="text-muted">80</small>
                                </div>
                                <div className="progress mt-1 mb-3" style={{height: "2px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <small className="text-uppercase">CSS3:</small>
                                    <small className="text-muted">85</small>
                                </div>
                                <div className="progress mt-1 mb-0" style={{height: "2px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card-header bg-card pb-3">
                <h6 className="card-title mb-0">My Profile</h6>
                <div className="dropdown card-action">
                    <CardAction/>
                </div>
                <div className="d-flex align-items-md-start align-items-center flex-column flex-md-row mt-4 w-100">
                    <img src={profileImage} alt="" className="rounded-4"/>
                    <div className="media-body ms-md-5 m-0 mt-4 mt-md-0 text-md-start text-center">
                        <h4 className="mb-1">Michelle Hughes</h4>
                        <p>brian-hughes@bvite.com</p>
                        <span className="text-muted">Looking for a sleek and modern admin template for your next project? Check out our brand new bootstrap admin template! 🚀</span>
                        <div className="my-3">
                            <button className="btn btn-primary me-1">Follow</button>
                            <button className="btn btn-dark">Message</button>
                        </div>
                        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                            <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                <small className="text-muted">City</small>
                                <div className="fs-5">New york</div>
                            </div>
                            <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                <small className="text-muted">Awards</small>
                                <div className="fs-5">13</div>
                            </div>
                            <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                <small className="text-muted">Experience</small>
                                <div className="fs-5">10+</div>
                            </div>
                            <div className="bg-body rounded-2 py-2 px-3 me-1 mt-1">
                                <small className="text-muted">Total Earnings</small>
                                <div className="fs-5">$8,705</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default MyProfile