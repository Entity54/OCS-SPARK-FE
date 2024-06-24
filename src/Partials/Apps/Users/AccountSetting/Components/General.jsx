import React from 'react'

const General = ({
    influencerFid, influencer_active_status, influencer_Followers_Count, influencer_Following_Count,
    influencer_HasPowerBadge, influencer_AboutMe, influencer_spamFactor, influencer_ownerAddress,

}) => {
  return (
        <ul className="row g-3 list-unstyled li_animate">
            <li className="col-12 mb-4">
                <h5 className="mb-1">Specifications</h5>
                {/* <p className="text-muted">Update your account details</p> */}
                {/* <!--[ setting: Account Setting input]--> */}
                <form className="row g-3">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control" placeholder="" value={influencerFid}/>
                            <label>Farcaster ID</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control" placeholder="" value={influencer_active_status}/>
                            <label>Active Status</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control" placeholder="" value={influencer_HasPowerBadge}/>
                            <label>Power Badge</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control" placeholder="" value={influencer_Followers_Count}/>
                            <label>Followers</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control" placeholder="" value={influencer_spamFactor}/>
                            <label>Spam Factor</label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-floating">
                            <input type="text" readOnly className="form-control" placeholder="" value={influencer_ownerAddress}/>
                            <label>Infuencer owner on Platform </label>
                        </div>
                    </div>

                    
                    {/* <div className="col-12">
                        <div className="form-group">
                            <label className='me-1'>Select Avatar</label>
                            <input type="file" className="form-control-file"/>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea readOnly className="form-control" placeholder="" value={influencer_AboutMe} style={{height: "100px"}}></textarea>
                            <label>Bio</label>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <button type="button" className="btn btn-primary me-1">Update Details</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </div> */}
                </form> 
                {/* <!--[ .row end ]--> */}
            </li>
            {/* <li className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title fw-light mb-4">Delete your account</h4>
                        <p className="lead text-muted">Please note, deleting your account is a permanent action and will no be recoverable once completed.</p>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </li> */}
        </ul> 
    )
}

export default General