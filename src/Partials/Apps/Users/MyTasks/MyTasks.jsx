import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MyTask } from './Components/TasksData'

import CommonPieChart from '../../../../Common/CommonPieChart/CommonPieChart';
import CardAction from '../../../Widgets/CardAction/CardAction';
import Todays from './Components/Todays';
import Meetings from './Components/Meetings';

import profileImage from '../../../../assets/images/profile_av.png';
import NoData from '../../../Widgets/NoData/NoData';

const MyTasks = () => {
    const [activeTab, setActiveTab] = useState('task-today');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
  return (
    <div className="ps-2 pt-2 pb-1 page-body">
        <div className="card bg-transparent border-0">
            <div className="card-header bg-card pb-0 z-2">
                <h6 className="card-title mb-0">My Task</h6>
                <div className="dropdown card-action">
                    <CardAction/>
                </div>
                <div className="w-100 mt-4">
                    <ul className="row g-lg-4 g-2 list-unstyled li_animate mb-4 mb-lg-5">
                        <li className="col-xl-4 col-lg-5 col-md-5 col-12">
                            <div className="d-flex align-items-center">
                                <img className="avatar lg rounded-circle border border-3" src={profileImage} alt="avatar"/>
                                <div className="ms-3">
                                    <h4 className="mb-0 text-gradient title-font">Michelle!</h4>
                                    <span className="text-muted small">michelle.bvite@gmail.com</span>
                                </div>
                            </div>
                        </li>
                        <li className="col-xl-8 col-lg-7 col-md-7 col-12">
                            <ul className="list-unstyled d-none d-lg-flex align-items-start justify-content-md-end p-0 mb-0 ps-5 ps-md-0 ms-4 ms-md-0">
                                {MyTask.map((data, index) => {
                                    return(
                                    <li key={index} className={`px-lg-4 px-3 ${data.style}`}>
                                        <div className="fs-3">{data.value}</div>
                                        <div className="text-muted d-flex">
                                          <CommonPieChart className='' data={data.pie_value} total={5} />
                                          <span className="ms-1">{data.text}</span>
                                        </div>
                                    </li>
                                )})}
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav nav-tabs tab-card border-0 li_animate px-1 mb-0" role="tablist">
                        <li className="nav-item"><Link className={`nav-link px-0 me-xl-4 me-3 fs-6 ${activeTab === 'task-today' ? 'active' : ''}`} data-bs-toggle="tab" to="#" onClick={() => handleTabClick('task-today')}><span>Today's</span></Link></li>
                        <li className="nav-item"><Link className={`nav-link px-0 me-xl-4 me-3 fs-6 ${activeTab === 'task-meeting' ? 'active' : ''}`} data-bs-toggle="tab" to="#" onClick={() => handleTabClick('task-meeting')}><span>Meetings</span></Link></li>
                        <li className="nav-item"><Link className={`nav-link px-0 me-xl-4 me-3 fs-6 ${activeTab === 'task-priority' ? 'active' : ''}`} data-bs-toggle="tab" to="#" onClick={() => handleTabClick('task-priority')}><span>Priority</span></Link></li>
                        <li className="nav-item ms-auto">
                            <div className="d-flex">
                                <input type="search" className="form-control d-none d-md-flex me-2" placeholder="Search task..."/>
                                <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#create_task">Create</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body z-1">
                <div className="tab-content" >
                    <div className={`tab-pane ${activeTab === 'task-today' ? 'active' : ''}`}>
                        <Todays/>
                    </div>
                    <div className={`tab-pane ${activeTab === 'task-meeting' ? 'active' : ''}`}>
                        <Meetings/>
                    </div>
                    <div className={`tab-pane ${activeTab === 'task-priority' ? 'active' : ''}`}>
                        <NoData/>
                    </div>
                </div>
            </div>
        </div>

        {/* <!--[ start offcanvas: create new task ]--> */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="create_task">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Create new Task</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form className="row g-3">
                    <div className="col-12">
                        <label className="form-label">Task Title</label>
                        <input className="form-control" type="text" required=""/>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Task Detail</label>
                        <textarea className="form-control" type="text" required="" rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Select Date/Time</label>
                        <div className="input-group">
                            <input type="date" className="form-control"/>
                            <input type="time" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Remindon"/>
                            <label className="form-check-label" htmlFor="Remindon">Remind on</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Task tag</label>
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue="">Open this select menu</option>
                            <option value="1">Design</option>
                            <option value="2">BugFix</option>
                            <option value="3">Help</option>
                            <option value="3">R&amp;D</option>
                        </select>
                    </div>
                </form>
                <div className="mt-4">
                    <button type="button" className="btn btn-secondary me-1" data-bs-dismiss="offcanvas">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyTasks