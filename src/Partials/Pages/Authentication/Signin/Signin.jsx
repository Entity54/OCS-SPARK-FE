import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
        <div className="px-xl-5 px-4 auth-body">
            <form>
                <ul className="row g-3 list-unstyled li_animate">
                    <li className="col-12">
                        <h1 className="h2 title-font">Welcome to BVite</h1>
                        <p>Your Admin Dashboard</p>
                    </li>
                    <li className="col-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control form-control-lg" placeholder="" defaultValue="admin@bvite.com"/>
                    </li>
                    <li className="col-12">
                        <div className="form-label">
                            <span className="d-flex justify-content-between align-items-center">
                                Password
                                <Link className="text-primary" to="/password-reset">Forgot Password?</Link>
                            </span>
                        </div>
                        <input type="password" className="form-control form-control-lg" placeholder="" defaultValue="admin.bvite"/>
                    </li>
                    <li className="col-12">
                        <div className="form-check fs-5">
                            <input className="form-check-input" type="checkbox" value="" id="Rememberme"/>
                            <label className="form-check-label fs-6" htmlFor="Rememberme">Remeber this Device</label>
                        </div>
                    </li>
                    <li className="col-12 my-lg-4">
                        <Link className="btn btn-lg w-100 btn-primary text-uppercase mb-2" to="/index" title="sign in">SIGN IN</Link>
                        <a className="btn btn-lg btn-secondary w-100" href="#">
                            <i className="fa fa-google me-2"></i>
                            <span>Sign in with Google</span>
                        </a>
                    </li>
                    <li className="col-12">
                        <span className="text-muted d-flex d-sm-inline-flex">New to Bvite <Link className="ms-2" to="/signup" title="">Sign up here</Link></span>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Signin