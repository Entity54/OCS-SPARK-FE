import React from 'react'
import { Link } from 'react-router-dom'

const NoPageFound = () => {
  return (
    <div className="px-xl-5 px-4 auth-body">
          <form>
            <ul className="row g-3 list-unstyled li_animate">
                <li className="col-12">
                    <h1 className="display-1 fw-bold">4<i className="fa fa-smile-o"></i>4</h1>
                    <h5>We couldn't find this page.</h5>
                </li>
                <li className="col-12 my-lg-4">
                    <Link className="btn btn-lg w-100 btn-primary text-uppercase mb-2" to="/index" title="">Back to Home</Link>
                </li>
                <li className="col-12 mt-5">
                    <h4 className="fw-light mb-0">Still feeling lost? You're not alone.</h4>
                    <p>Senectus eros mus parturient scelerisque id lacinia posuere lacus</p>
                    <div className="tagcloud mb-4">
                        <Link to="/app/inbox" className="tag-link rounded-pill border px-3" style={{"--hover-color": "var(--theme-color1)"}}>Inbox</Link>
                        <Link to="/app/my-profile" className="tag-link rounded-pill border px-3" style={{"--hover-color": "var(--theme-color2)"}}>My Profile</Link>
                        <Link to="/docs/changelog" className="tag-link rounded-pill border px-3" style={{"--hover-color": "var(--theme-color1)"}}>Changelog</Link>
                    </div>
                </li>
            </ul>
        </form>
    </div>
  )
}

export default NoPageFound