import React from 'react'

import avatar3 from '../../../../assets/images/xs/avatar3.jpg';
import avatar4 from '../../../../assets/images/xs/avatar4.jpg';
import avatar6 from '../../../../assets/images/xs/avatar6.jpg';
import avatar8 from '../../../../assets/images/xs/avatar8.jpg';
import g1 from '../../../../assets/images/gallery/1.jpg';
import g2 from '../../../../assets/images/gallery/2.jpg';
import g3 from '../../../../assets/images/gallery/3.jpg';

const UserActivity = () => {
  return (
        <div className="px-4 py-3 page-body">
            <ul className="list-unstyled mb-0 li_animate activity">
                <li className="activity-item mb-xl-5 mb-4">
                    <div className="activity-header d-flex">
                        <img className="avatar sm rounded-circle" src={avatar4} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/>
                        <div className="flex-grow-1 ms-2"><a title="" href="#" className="h6">Megan Porter</a>, shared a twitt <small className="float-end text-muted">Tue 8:17pm</small></div>
                    </div>
                    <div className="activity-body bg-light">
                        <div className="me-3">
                            <img className="avatar sm rounded" src={avatar4} alt=""/>
                        </div>
                        <div className="flex-grow-1">
                            <div className="mb-2"><span className="fs-5">Jony Smith <small>@Jonysmith</small></span> <small className="float-end text-muted">31 minutes ago</small></div>
                            <p>Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                            <nav className="d-flex text-muted">
                                <a href="#" className="me-3"><i className="fa fa-repeat"></i></a>
                                <a href="#" className="me-3"><i className="fa fa-twitter"></i>24</a>
                                <a href="#" className="me-3"><i className="fa fa-heart"></i>43</a>
                                <a href="#" className="text-muted ms-auto">5 notes</a>
                            </nav>
                        </div>
                    </div>
                </li>
                <li className="activity-item mb-xl-5 mb-4">
                    <div className="activity-header d-flex">
                        <img className="avatar sm rounded-circle" src={avatar6} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/>
                        <div className="flex-grow-1 ms-2"><a title="" href="#" className="h6">Elizabeth Martin</a>, attached file <small className="float-end text-muted">Tue 8:17pm</small></div>
                    </div>
                    <div className="activity-body bg-light">
                        <div className="file_folder d-flex">
                            <a className="card card-body m-1" href="#">
                                <i className="fa fa-file-word-o fa-2x text-info"></i>
                                <p className="mb-1 text-muted">finame12.doc</p>
                                <small>56KB</small>
                            </a>
                            <a className="card card-body m-1" href="#">
                                <i className="fa fa-file-pdf-o fa-2x text-danger"></i>
                                <p className="mb-1 text-muted">filename-report.pdf</p>
                                <small>2MB</small>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="activity-item mb-xl-5 mb-4">
                    <div className="activity-header d-flex">
                        <img className="avatar sm rounded-circle" src={avatar8} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/>
                        <div className="flex-grow-1 ms-2"><a title="" href="#" className="h6">Rose Coke</a>, aad new photos <small className="float-end text-muted">Tue 8:17pm</small></div>
                    </div>
                    <div className="activity-body bg-light">
                        <div className="flex-grow-1">
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                            <div className="mt-2">
                                <img className="rounded me-1" style={{width: "100px"}} src={g1} alt="img"/>
                                <img className="rounded me-1" style={{width: "100px"}} src={g2} alt="img"/>
                                <img className="rounded me-1" style={{width: "100px"}} src={g3} alt="img"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="activity-item mb-xl-5 mb-4">
                    <div className="activity-header d-flex">
                        <img className="avatar sm rounded-circle" src={avatar6} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/>
                        <div className="flex-grow-1 ms-2"><a title="" href="#" className="h6">Elizabeth Martin</a>, commit code in GitHub <small className="float-end text-muted">Tue 8:17pm</small></div>
                    </div>
                    <div className="activity-body bg-light">
                        <div className="flex-grow-1">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            <p>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                        </div>
                    </div>
                </li>
                <li className="activity-item mb-xl-5 mb-4">
                    <div className="activity-header d-flex">
                        <img className="avatar sm rounded-circle" src={avatar6} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/>
                        <div className="flex-grow-1 ms-2"><a title="" href="#" className="h6">Elizabeth Martin</a>, shared video <small className="float-end text-muted">Tue 8:17pm</small></div>
                    </div>
                    <div className="activity-body bg-light">
                        <div className="flex-grow-1">
                            <iframe width="420" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        </div>
                    </div>
                </li>
                <li className="activity-item mb-xl-5 mb-4">
                    <div className="activity-header d-flex">
                        <img className="avatar sm rounded-circle" src={avatar3} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar"/>
                        <div className="flex-grow-1 ms-2"><a title="" href="#" className="h6">Denise Elliott</a> shared files <small className="float-end text-muted">Tue 8:17pm</small></div>
                    </div>
                    <div className="activity-body bg-light">
                        <div className="flex-grow-1">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <ul className="mb-0">
                                <li>College in Virginia, looked up one of the more obscure Latin words</li>
                                <li>classical <a href="#">Latin literature</a> from 45 BC, making it over 2000 years old</li>
                                <li>going to use a passage of Lorem Ipsum, you need</li>
                                <li>ombined with a handful of model sentence </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default UserActivity