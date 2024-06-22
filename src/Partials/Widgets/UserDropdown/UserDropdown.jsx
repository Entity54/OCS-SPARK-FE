import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'
import CountingAnimation from '../../../Common/CommonCounting/CountingAnimation'


const UserDropdown = ({connectedAccount, accountBalance}) => {

  return (
    <div className="dropdown-menu dropdown-menu-end shadow p-1 p-xl-6 rounded-4">
        <div className="bg-body p-3 rounded-3">

            {/* <h4 className="mb-1 title-font text-gradient">Michelle Glover</h4> */}
            {/* <h4 className="mb-1 title-font text-gradient">0xa9c43e4eadFBa326E6C0606B1cd2083a1d2f3a10</h4> */}

            <h4 className="mb-1 title-font text-gradient" style={{fontSize:"11px"}}>{connectedAccount}</h4>

            {/* <p className="small text-muted">michelle.glover@gmail.com</p> */}
            {/* <input type="text" className="form-control form-control-sm" placeholder="Update my status"/> */}
        </div>
        <ul className="list-unstyled mt-3">
            <li>
                {/* <Link as='a' className="dropdown-item rounded-pill" aria-label="my wallet" to="/my-wallet"> */}
                <div className="dropdown-item rounded-pill" aria-label="my wallet" to="/my-wallet">

                    <div className="d-flex align-items-center">
                        <span className="align-middle me-2">Balance:</span>
                        <span className="fw-bold text-success">
                            <CountingAnimation start={0} separator={'.'} currency='ETH ' end={accountBalance} duration={5000}/>
                        </span>
                    </div>
                </div>
                {/* </Link> */}
            </li>

            {/* <li><Link as='a' className="dropdown-item rounded-pill" aria-label="my profile" to="/app/my-profile">My Profile</Link></li>
            <li><Link as='a' className="dropdown-item rounded-pill" aria-label="my task" to="/app/my-task">My Taskboard</Link></li>
            <li><Link as='a' className="dropdown-item rounded-pill" aria-label="account settings" to="/app/account-settings">Settings</Link></li>
            <li className="dropdown-divider"></li>
            <li><Link as='a' className="dropdown-item rounded-pill" aria-label="Add another account" to="#">Add another account</Link></li> */}

        </ul>
        
        {/* <Link as='a' className="btn py-2 btn-primary w-100 mt-3 rounded-pill" to="/signin" role="button">Connect</Link> */}
        {/* <div className="mt-3 text-center small">
            <a className="text-muted me-1" href="#!">Privacy policy</a>•<a className="text-muted mx-1" href="#!">Terms</a>•<a className="text-muted ms-1" href="#!">Cookies</a>
        </div> */}
    </div>
  )
}

export default UserDropdown