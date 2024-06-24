import React from 'react'
import { Link } from 'react-router-dom'
import CardEllipsis from '../../../../Widgets/CardEllipsis/CardEllipsis'

import visa from "../../../../../assets/images/visa.svg";
import mastercard from "../../../../../assets/images/mastercard.svg";

const Billing = ({contextAccount, influencerFid, influencer_ownerAddress, 
    influencer_VerifiedAccount, 
    influencer_CustodyAddres, influencer_spamFactor 
}) => {


    console.log(`contextAccount: ${contextAccount} influencer_ownerAddress: ${influencer_ownerAddress}`);

  return (
        <ul className="row g-3 list-unstyled li_animate">
            <li className="col-12">
                <div className="card">
                    <div className="card-body">
                        {/* <div className="alert alert-danger">
                            <i className="zmdi zmdi-info me-1"></i> Information only shown to owner of Influencer account on the platform.
                        </div> */}

                        {
                            contextAccount && influencer_ownerAddress && contextAccount.toLowerCase() === influencer_ownerAddress.toLowerCase() ?

                        <form className="row g-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-floating">
                                    <input type="text" readOnly className="form-control" placeholder="" value={influencerFid}/>
                                    <label>Farcaster ID</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-floating">
                                    <input type="text" readOnly className="form-control" placeholder="" value={influencer_spamFactor}/>
                                    <label>Spam Factor</label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="form-floating">
                                    <input type="text" readOnly className="form-control" placeholder="" value={influencer_VerifiedAccount}/>
                                    <label>Verified Account (account that receives campaign payments)</label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="form-floating">
                                    <input type="text" readOnly className="form-control" placeholder="" value={influencer_ownerAddress}/>
                                    <label>Infuencer Owner Address</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="form-floating">
                                    <input type="text" readOnly className="form-control" placeholder="" value={influencer_CustodyAddres}/>
                                    <label>Custody Address</label>
                                </div>
                            </div>
                        </form> 

                        :
                        <div className="alert alert-danger">
                            <i className="zmdi zmdi-info me-1"></i> Information only shown to owner of Influencer account on the platform. Sign in the Smart Wallet with the account used to register the infuencer on our platform.
                        </div>

                        }


                        {/* <div className="row align-items-center">
                  
                            <div className="col-6">
                                <span className="text-muted">Verified Account (account that receives campaign payments)</span>
                                <h4 className="mb-0 mt-2">{influencer_VerifiedAccount}</h4>
                            </div>
                            <div className="col-auto">
                                <Link as='a' className="btn btn-sm btn-dark" to="/pages/pricing">Upgrade</Link>
                            </div>
                        </div>  */}

                        {/* <!--[ row end ]--> */}
                    </div>
                </div>
            </li>
            {/* <li className="col-12 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-title mb-0">Payment methods</h6>
                        <a className="btn btn-sm btn-primary" href="#!">Add method</a>
                    </div>
                    <div className="card-body">
                        <div className="list-group list-group-flush my-2">
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="img-fluid" src={visa} alt="..." style={{maxWidth: "38px"}}/>
                                    </div>
                                    <div className="col ml-n2">
                                        <h6 className="mb-0">Visa ending in 7878</h6>
                                        <small className="text-muted">Expires 08/2022</small>
                                    </div>
                                    <div className="col-auto mr-n3">
                                        <span className="badge bg-light text-dark">Default</span>
                                    </div>

                                    <div className="col-auto">
                                        <CardEllipsis/>
                                    </div>
                                </div> 
                            </div>
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="img-fluid" src={mastercard} alt="..." style={{maxWidth: "38px"}}/>                            
                                    </div>
                                    <div className="col ml-n2">
                                        <h6 className="mb-0">Mastercard ending in 2525</h6>
                                        <small className="text-muted">Expires 11/2024</small>
                                    </div>

                                    <div className="col-auto">
                                        <CardEllipsis/>
                                    </div>

                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </li> */}
            
            <li className="col-12">
                <h5 className="fw-normal mb-0" style={{marginTop:"10px"}}>Received Campaign Payments</h5>
                {/* <p className="text-muted">Showing data from</p> */}

                <div className="table-responsive">
                    <table className="table table-border table-hover table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th>Campaign UUID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Total Points</th>
                            </tr>
                        </thead>
                        <tbody className="font-size-base">
                            <tr>
                                <td><a href="invoices.html">#100</a></td>
                                <td>Oct. 24, 2020</td>
                                <td className="badge bg-success">ETH 29.00</td>
                                <td><span className="badge text-info">1000</span></td>
                            </tr>
                            <tr>
                                <td><a href="invoices.html">#101</a></td>
                                <td>Aug. 11, 2020</td>
                                <td className="badge bg-success">ETH 29.00</td>
                                <td><span className="badge text-info">1000</span></td>
                            </tr>
                            <tr>
                                <td><a href="invoices.html">#102</a></td>
                                <td>July. 5, 2020</td>
                                <td className="badge bg-success">ETH 29.00</td>
                                <td><span className="badge text-info">1000</span></td>
                            </tr>
                            <tr>
                                <td><a href="invoices.html">#103</a></td>
                                <td>Jun. 16, 2020</td>
                                <td className="badge bg-success">ETH 29.00</td>
                                <td><span className="badge text-info">1000</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </li>
            {/* <li className="col-12">
                <small className="text-muted">Don’t need anymore? <a href="#!">Cancel your account</a></small>
            </li> */}
        </ul> 
    )
}

export default Billing