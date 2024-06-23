import React from 'react'
import { Link } from 'react-router-dom'
import CountingAnimation from '../../../Common/CommonCounting/CountingAnimation'


const buttonStyles = {
    background: 'transparent',
    border: '1px solid transparent',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: 220,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#0052FF',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    margin:5,
    justifyContent: 'center',
    textAlign: 'center',  
    cursor: 'pointer',
  };



const UserDropdown = ({switchChain, network, disconnectWallet}) => {

 //calacualte the balance here



  return (
    <div className="dropdown-menu dropdown-menu-end shadow p-1 p-xl-6 rounded-4">
        <div className="bg-body p-3 rounded-3 align-items-center">

        <h4 className="d-flex align-items-center justify-content-center mb-1 title-font text-gradient">Connected to {network.chainName}</h4>


            {/* <h4 className="mb-1 title-font text-gradient">Connected to {network.chainName}</h4> */}
            {/* <h4 className="mb-1 title-font text-gradient">0xa9c43e4eadFBa326E6C0606B1cd2083a1d2f3a10</h4> */}
            {/* <h4 className="mb-1 title-font text-gradient" style={{fontSize:"11px"}}>0xa9c43e4eadFBa326E6C0606B1cd2083a1d2f3a10</h4> */}

            {/* <p className="small text-muted">michelle.glover@gmail.com</p> */}
            {/* <input type="text" className="form-control form-control-sm" placeholder="Update my status"/> */}
        {/* </div> */}
        {/* <ul className="list-unstyled mt-3 align-items-center "> */}
            {/* <li>
                <Link as='a' className="dropdown-item rounded-pill" aria-label="my wallet" to="/my-wallet">
                <div className="dropdown-item rounded-pill" aria-label="my wallet" to="/my-wallet">

                    <div className="d-flex align-items-center">
                        <span className="align-middle me-2">Balance ONCHAIN-KIT-ETH:</span>
                        <span className="fw-bold text-success">
                            <CountingAnimation start={0} separator={'.'} currency='$' end={14000} duration={5000}/>
                        </span>
                    </div>
                </div>
                </Link>
            </li> */}
            {/* <li><Link as='a' className="dropdown-item rounded-pill" aria-label="my profile" to="/app/my-profile">My Profile</Link></li>
            <li><Link as='a' className="dropdown-item rounded-pill" aria-label="my task" to="/app/my-task">My Taskboard</Link></li>
            <li><Link as='a' className="dropdown-item rounded-pill" aria-label="account settings" to="/app/account-settings">Settings</Link></li>
             */}
            {/* <li><Link as='a' className="dropdown-item rounded-pill" aria-label="Add another account" to="#">Switch TO {"Base"}</Link></li> */}
            {/* <Link as='a' className="btn py-2 btn-primary w-100 mt-3 rounded-pill" to="/signin" role="button">Switch TO {"Base"}</Link> */}



            {/* <li className="dropdown-divider"></li> */}
            <div className="dropdown-divider"></div>

            <div className="d-flex align-items-center justify-content-center">

                    <button style={buttonStyles}  onClick={switchChain}>
                        Switch To {network.alt_chainName}
                    </button>
            </div>
            {/* <li className="dropdown-divider"></li> */}
            <div className="dropdown-divider"></div>

            <div className="d-flex align-items-center justify-content-center">
                    <button style={buttonStyles} onClick={disconnectWallet}>
                        Disconect
                    </button>
            </div>


            {/* <li><Link as='a' className="dropdown-item rounded-pill" aria-label="Add another account" to="#">Add another account</Link></li> */}
            {/* <br/> */}
        {/* </ul> */}
        </div>
        {/* <Link as='a' className="btn py-2 btn-primary w-100 mt-3 rounded-pill" to="/signin" role="button">DisConnect</Link> */}
    
    </div>
  )
}

export default UserDropdown