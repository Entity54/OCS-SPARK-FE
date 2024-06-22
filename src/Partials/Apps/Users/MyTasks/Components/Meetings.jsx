import React from 'react'

import avatar1 from '../../../../../assets/images/xs/avatar1.jpg';
import avatar2 from '../../../../../assets/images/xs/avatar2.jpg';
import avatar3 from '../../../../../assets/images/xs/avatar3.jpg';
import avatar4 from '../../../../../assets/images/xs/avatar4.jpg';
import avatar5 from '../../../../../assets/images/xs/avatar5.jpg';
import avatar6 from '../../../../../assets/images/xs/avatar6.jpg';

const Meetings = () => {
  return (
    <>
        <div className="date">
            <div className="date-header d-flex align-items-center mb-1">
                <span className="display-4 fw-bold">12</span>
                <div className="ms-2">
                    <h6 className="mb-0">Tuesday - Today</h6>
                    <span className="text-muted small">January 2023</span>
                </div>
            </div>
            <ul className="row list-unstyled ms-lg-5 ms-4 ps-sm-2 li_animate">
                <li className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <small className="text-muted">10:00am to 11:20am</small>
                            <h6 className="mt-1 mb-3">New Project meeting</h6>
                            <div className="avatar-list px-3">
                                <img className="avatar sm rounded-circle" src={avatar5} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar6} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar1} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar4} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                            </div>
                        </div>
                        <div className="card-footer py-2">
                            <a href="#" title="">join meeting Zoom<i className="fa fa-long-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </li>
                <li className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <small className="text-muted">2:00pm to 2:30pm</small>
                            <h6 className="mt-1 mb-3">Scrum call agenda</h6>
                            <div className="avatar-list px-3">
                                <img className="avatar sm rounded-circle" src={avatar2} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar3} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                            </div>
                        </div>
                        <div className="card-footer py-2">
                            <a href="#" title="">join meeting Skype<i className="fa fa-long-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="date mt-5">
            <div className="date-header d-flex align-items-center mb-1">
                <span className="display-4 fw-bold">13</span>
                <div className="ms-2">
                    <h6 className="mb-0">Tuesday - Today</h6>
                    <span className="text-muted small">January 2023</span>
                </div>
            </div>
            <ul className="row list-unstyled ms-lg-5 ms-4 ps-sm-2 li_animate">
                <li className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <small className="text-muted">10:00am to 11:20am</small>
                            <h6 className="mt-1 mb-3">New Project meeting</h6>
                            <div className="avatar-list px-3">
                                <img className="avatar sm rounded-circle" src={avatar5} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar6} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar1} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar4} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                            </div>
                        </div>
                        <div className="card-footer py-2">
                            <a href="#" title="">join meeting Zoom<i className="fa fa-long-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </li>
                <li className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <small className="text-muted">2:00pm to 2:30pm</small>
                            <h6 className="mt-1 mb-3">Scrum call agenda</h6>
                            <div className="avatar-list px-3">
                                <img className="avatar sm rounded-circle" src={avatar2} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar3} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                            </div>
                        </div>
                        <div className="card-footer py-2">
                            <a href="#" title="">join meeting Skype<i className="fa fa-long-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </li>
                <li className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <small className="text-muted">2:00pm to 2:30pm</small>
                            <h6 className="mt-1 mb-3">Scrum call agenda</h6>
                            <div className="avatar-list px-3">
                                <img className="avatar sm rounded-circle" src={avatar2} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                                <img className="avatar sm rounded-circle" src={avatar3} data-bs-toggle="tooltip" title="" data-bs-original-title="Avatar" aria-label="Avatar"/>
                            </div>
                        </div>
                        <div className="card-footer py-2">
                            <a href="#" title="">join meeting Skype<i className="fa fa-long-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Meetings