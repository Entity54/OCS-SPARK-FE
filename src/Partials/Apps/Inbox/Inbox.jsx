import React from 'react'

import profileImage from '../../../assets/images/profile_av.png';

import avatar1 from '../../../assets/images/xs/avatar1.jpg';
import avatar3 from '../../../assets/images/xs/avatar3.jpg';
import avatar6 from '../../../assets/images/xs/avatar6.jpg';
import avatar7 from '../../../assets/images/xs/avatar7.jpg';
import avatar8 from '../../../assets/images/xs/avatar8.jpg';
import avatar9 from '../../../assets/images/xs/avatar9.jpg';

const Inbox = () => {

    const toggleFullscreen = (e) => {
        e.preventDefault();
        const DIV_CARD = 'div.card';
        const cardFullscreen = e.target;
        const card = cardFullscreen.closest(DIV_CARD);
        
        if (card) {
            card.classList.toggle('fullscreen');
        }
    };
    
  return (
        <div className="ps-1 pt-1 pb-1 page-body">
            <div className="card border-0">
                <div className="card-body p-1">
                    <div className="p-3 bg-body pb-0">
                        <ul className="row g-lg-4 g-2 list-unstyled li_animate">
                            <li className="col-md-6 col-12">
                                <div className="d-flex align-items-center">
                                    <img className="avatar lg rounded-circle border border-3" src={profileImage} alt="avatar"/>
                                    <div className="ms-3">
                                        <h4 className="mb-0 text-gradient title-font">Michelle!</h4>
                                        <span className="text-muted small">michelle.bvite@gmail.com</span>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6 col-12">
                                <ul className="list-unstyled align-items-start justify-content-md-end p-0 mb-0 ps-5 ps-md-0 ms-4 ms-md-0 d-none d-md-flex">
                                    <li className="px-lg-4 px-3 ps-0">
                                        <p className="text-muted mb-0">Primary</p>
                                        <h5 className="mb-0">915</h5>
                                    </li>
                                    <li className="px-lg-4 px-3 border-start">
                                        <p className="text-muted mb-0">Updates</p>
                                        <h5 className="mb-0">15</h5>
                                    </li>
                                    <li className="ps-lg-4 ps-3 border-start">
                                        <p className="text-muted mb-0">Social</p>
                                        <h5 className="mb-0">57</h5>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav nav-tabs tab-card border-0 li_animate px-1 mb-0" role="tablist">
                            <li className="nav-item dropdown">
                                <a className="nav-link px-0 me-xl-4 me-3 dropdown-toggle fs-6" href="#" role="button" data-bs-toggle="dropdown">Inbox</a>
                                <ul className="li_animate dropdown-menu shadow rounded-4 p-2">
                                    <li><a className="dropdown-item rounded-pill" href="#">Primary</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Updates</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Promotions</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Social</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">Create Label</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#inbox-send">Send</a></li>
                            <li className="nav-item d-none d-sm-inline-flex"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#inbox-draft">Draft</a></li>
                            <li className="nav-item d-none d-md-inline-flex"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#inbox-spam">Spam</a></li>
                            <li className="nav-item"><a className="nav-link px-0 me-xl-4 me-3 fs-6" data-bs-toggle="tab" href="#inbox-trash">Trash</a></li>
                            <li className="nav-item ms-auto">
                                <div className="d-flex">
                                    <input type="text" className="form-control d-none d-md-flex me-2" placeholder="Search for..."/>
                                    <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#Compose">Compose</button>
                                    <a href="#" className="card-fullscreen btn btn-outline-secondary ms-2" data-bs-toggle="tooltip" title="Card Full Screen" onMouseDown={toggleFullscreen}>
                                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z"></path>
                                            <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"></path>
                                            <path d="M12 8h4v4"></path>
                                            <path d="M16 8l-5 5"></path>
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-layout d-flex flex-row">
                        {/* <!--[ Start:: user list ]--> */}
                        <div className="order-1 custom_scroll">
                            <ul className="list-group list-group-flush user-list mb-0" role="tablist">
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar1} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Andrew Patrick<i className="fa fa-circle ms-1 status text-warning"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Apply for web Developer</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <span className="avatar rounded-circle no-thumbnail">PS</span>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Phillip Smith<i className="fa fa-circle ms-1 status text-primary"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Need Support</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2 text-primary"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar3} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Merri Diamond<i className="fa fa-circle ms-1 status text-warning"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Balance Withdrawal Failed</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2 text-primary"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established fact that a reader will be readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <span className="avatar rounded-circle no-thumbnail theme-color3">AC</span>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Allen Collins<i className="fa fa-circle ms-1 status text-muted"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">New iOS project</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <span className="avatar rounded-circle no-thumbnail theme-color5">AH</span>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Alice Harding<i className="fa fa-circle ms-1 status text-muted"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">New Update</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long a reader will be distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar6} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Candice Munoz<i className="fa fa-circle ms-1 status text-muted"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Need Support</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long will be distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar7} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Jeannette Stanton<i className="fa fa-circle ms-1 status text-primary"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Code push in github</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar1} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Phillip Smith<i className="fa fa-circle ms-1 status text-muted"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Need Support</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2 text-primary"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established reader will be distracted by the readable content</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar8} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Phillip Smith<i className="fa fa-circle ms-1 status text-muted"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Need Support</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established fact that a reader will</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-group-item py-3">
                                    <a href="#" className="d-flex">
                                        <img className="avatar rounded-circle" src={avatar9} alt=""/>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex justify-content-between">
                                                <small>Madeleine Fletcher<i className="fa fa-circle ms-1 status text-muted"></i></small>
                                                <small className="time">5:15PM</small>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-truncate">Need Support</span>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-star gray-3 me-2"></i>
                                                    <input className="form-check-input m-0" type="checkbox" value="option1"/>
                                                </div>
                                            </div>
                                            <span className="small text-muted">it is a long established fact that athe readable content</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--[ Start:: email details ]--> */}
                        <div className="order-2 flex-grow-1 custom_scroll border-start">
                            <div className="px-xl-4 action-header">
                                <ul className="navbar-nav flex-row me-auto">
                                    <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-archive"></i></a></li>
                                    <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-trash"></i></a></li>
                                    <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-exclamation-circle"></i></a></li>
                                    <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-tasks"></i><span className="ms-2 d-none d-lg-inline-block">Add to tasks</span></a></li>
                                    <li className="nav-item"><a className="btn btn-sm gray-6" href="#"><i className="fa fa-arrow-circle-right"></i><span className="ms-2 d-none d-lg-inline-block">Move to</span></a></li>
                                </ul>
                                <button type="button" className="btn btn-sm btn-outline-danger close-toggle"><i className="fe fe-settings mr-2"></i>Close</button>
                            </div>
                            <div className="px-xl-4 bg-body p-3">
                                <div className="row align-items-center">
                                    <div className="col-auto pe-0">
                                        <a href="#"><img src={avatar1} alt="..." className="avatar rounded-circle"/></a>
                                    </div>
                                    <div className="col ml-n2">
                                        <div className="fw-bold">Andrew Patrick</div>
                                        <div className="dropdown"> To: <a className="btn btn-link dropdown-toggle p-0" href="#" role="button" data-bs-toggle="dropdown">Me</a>
                                            <div className="dropdown-menu p-3 border-0 shadow w240 rounded-4">
                                                <div className="mb-2">
                                                    <div className="mb-0">from:</div>
                                                    <small className="text-muted">Info-tQ <a href="#">info@example.com</a></small>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="mb-0">to:</div>
                                                    <small className="text-muted">Stephen McLean <a href="#">Chris.Fox@example.com</a></small>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="mb-0">cc:</div>
                                                    <small className="text-muted"><a href="#">Joge.Lucky@example.com</a></small>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="mb-0">date:</div>
                                                    <small className="text-muted">Aug 2, 2022, 11:27 AM</small>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="mb-0">subject:</div>
                                                    <small className="text-muted">#1706254810 | Payment Request</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto d-none d-xl-inline-block"><span>Jul 29, 2019, 4:37 PM</span></div>
                                    <div className="col-auto">
                                        <a href="#!" className="btn btn-sm btn-link d-none d-md-inline-block"><i className="fa fa-mail-reply"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-xl-4 action-body">
                                <p>Hello <strong>Frank Baker</strong>,</p><br/>
                                <h6>I am project outsourcer if need any type of project (website / apps any IT Project ) please read.</h6>
                                <p><strong>I will provide 2 Type of service.</strong></p>
                                <ul>
                                    <li>standard dummy text ever since the 1500s, when an unknown printer</li>
                                    <li>Lorem Ipsum has been the industry's standard dummy</li>
                                </ul>
                                <div className="file_folder d-flex flex-wrap py-3 my-3">
                                    <a className="py-2 px-3 m-1 rounded text-decoration-none border" href="#">
                                        <div className="avatar rounded-circle no-thumbnail bg-light">
                                            <i className="fa fa-bar-chart text-success fa-lg"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-0">Report2017.xls</p>
                                            <small className="text-muted">Size: 68KB</small>
                                        </div>
                                    </a>
                                    <a className="py-2 px-3 m-1 rounded text-decoration-none border" href="#">
                                        <div className="avatar rounded-circle no-thumbnail bg-light">
                                            <i className="fa fa-file-text-o text-info fa-lg"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-0">Report2017.doc</p>
                                            <small className="text-muted">Size: 68KB</small>
                                        </div>
                                    </a>
                                </div>
                                <p>Thank you,<br/><strong>Wendy Abbott</strong></p>
                            </div>
                            <div className="px-xl-4 action-footer">
                                <a className="btn btn-outline-primary me-1" href="#">Reply</a>
                                <a className="btn btn-outline-secondary" href="#">Forward</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!--[ Start:: Compose new email ]--> */}
            <div className="offcanvas offcanvas-end xxl" tabIndex="-1" id="Compose">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">New Message</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="form-floating mb-1">
                        <input type="email" className="form-control" placeholder="Email To"/>
                        <label>Email To</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Subject"/>
                        <label>Subject</label>
                    </div>
                    <div className="summernote">
                        Hello there,
                        <br/>
                        <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                        <p>Please try <b>paste some texts</b> here</p>
                    </div>
                    <div className="mt-3 d-flex">
                        <ul className="navbar-nav flex-row me-auto">
                            <li className="nav-item me-1"><a className="btn btn-light" href="#"><i className="fa fa-paperclip"></i></a></li>
                            <li className="nav-item me-1"><a className="btn btn-light" href="#"><i className="fa fa-smile-o"></i></a></li>
                            <li className="nav-item"><a className="btn btn-light" href="#"><i className="fa fa-photo"></i></a></li>
                        </ul>
                        <a href="#!" className="btn btn-outline-secondary">Discard</a>
                        <a href="#!" className="btn ms-1 btn-outline-secondary">Schedule Send</a>
                        <a href="#!" className="btn ms-1 btn-primary">Send</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox