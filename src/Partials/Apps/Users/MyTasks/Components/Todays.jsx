import React from 'react'

import CommonPieChart from '../../../../../Common/CommonPieChart/CommonPieChart';
import avatar1 from '../../../../../assets/images/xs/avatar1.jpg';
import avatar2 from '../../../../../assets/images/xs/avatar2.jpg';
import avatar3 from '../../../../../assets/images/xs/avatar3.jpg';
import avatar4 from '../../../../../assets/images/xs/avatar4.jpg';

const Todays = () => {
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
            <ul className="list-unstyled ms-lg-5 ms-4 ps-sm-2 li_animate" id="DateTuesday">
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-1"/>
                        <label className="form-check-label" htmlFor="task-1">With support text underneath to add more detail</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={1} total={5} />
                        <span className="border px-1 rounded small mx-3 theme-text-color2">Design</span>
                        <img className="avatar xs rounded-circle" src={avatar1} data-bs-toggle="tooltip" title="Avatar" />
                        <span className="ms-1">Michelle</span>
                        <span className="ms-auto small text-muted">22 Jun</span>
                    </div>

                </li>
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-2"/>
                        <label className="form-check-label" htmlFor="task-2">Sed scelerisque aliquet fusce senectus porttitor</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={2} total={5} />
                        <span className="border px-1 rounded small mx-3 text-danger">BugFix</span>
                        <img className="avatar xs rounded-circle" src={avatar2} data-bs-toggle="tooltip" title="Avatar"/>
                        <span className="ms-1">Megan</span>
                        <span className="ms-auto small text-muted">22 Jun</span>
                    </div>
                </li>
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-3"/>
                        <label className="form-check-label" htmlFor="task-3">Potenti dictumst mollis vulputate nascetur dictum</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={1} total={5} />
                        <span className="border px-1 rounded small mx-3 theme-text-color2">Design</span>
                        <img className="avatar xs rounded-circle" src={avatar3} data-bs-toggle="tooltip" title="Avatar"/>
                        <span className="ms-1">Fuller</span>
                        <span className="ms-auto small text-muted">23 Jun</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="date mt-5">
            <div className="date-header d-flex align-items-center mb-1">
                <span className="display-4 fw-bold">13</span>
                <div className="ms-2">
                    <h6 className="mb-0">Wednesday</h6>
                    <span className="text-muted small">January 2023</span>
                </div>
            </div>
            <ul className="list-unstyled ms-lg-5 ms-4 ps-sm-2 li_animate" id="DateWednesday">
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-4"/>
                        <label className="form-check-label" htmlFor="task-4">With support text underneath to add more detail</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={4} total={5} />
                        <span className="border px-1 rounded small mx-3 theme-text-color3">VueJs</span>
                        <img className="avatar xs rounded-circle" src={avatar1} data-bs-toggle="tooltip" title="Avatar"/>
                        <span className="ms-1">David</span>
                        <span className="ms-auto small text-muted">25 Jun</span>
                    </div>
                </li>
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-5"/>
                        <label className="form-check-label" htmlFor="task-5">Porta viverra accumsan ante consectetur class</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={3} total={5} />
                        <span className="border px-1 rounded small mx-3 text-info">React</span>
                        <img className="avatar xs rounded-circle" src={avatar2} data-bs-toggle="tooltip" title="Avatar"/>
                        <span className="ms-1">Travis</span>
                        <span className="ms-auto small text-muted">25 Jun</span>
                    </div>
                </li>
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-6"/>
                        <label className="form-check-label" htmlFor="task-6">Velit dolor semper neque conubia primis curae</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={1} total={5} />
                        <span className="border px-1 rounded small mx-3 theme-text-color1">HTML</span>
                        <img className="avatar xs rounded-circle" src={avatar3} data-bs-toggle="tooltip" title="Avatar"/>
                        <span className="ms-1">Sean</span>
                        <span className="ms-auto small text-muted">25 Jun</span>
                    </div>
                </li>
                <li className="d-flex justify-content-between flex-wrap align-items-start border dashed p-3 rounded-4 mb-2">
                    <span className="my-handle d-none d-md-inline-flex pe-3">::</span>
                    <div className="form-check me-auto">
                        <input className="form-check-input" type="checkbox" value="" id="task-7"/>
                        <label className="form-check-label" htmlFor="task-7">Potenti dictumst mollis luctus nascetur dictum</label>
                    </div>
                    <div className="ps-3 text-start col-xl-4 col-12 mt-2 mt-xl-0 d-flex align-items-center">
                        <CommonPieChart data={2} total={5} />
                        <span className="border px-1 rounded small mx-3 theme-text-color2">Design</span>
                        <img className="avatar xs rounded-circle" src={avatar4} data-bs-toggle="tooltip" title="Avatar"/>
                        <span className="ms-1">Travis</span>
                        <span className="ms-auto small text-muted">28 Jun</span>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Todays