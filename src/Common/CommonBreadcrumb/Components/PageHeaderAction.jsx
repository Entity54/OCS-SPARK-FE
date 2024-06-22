import React from 'react'
import { Dropdown } from 'react-bootstrap'

const PageHeaderAction = ({ toggleRightbar }) => {
  return (
    <>
        <Dropdown className="dropdown">
          <Dropdown.Toggle as="a" to="#" className='hide-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 12l6 0"></path>
                  <path d="M12 9l0 6"></path>
              </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-end p-2 p-xl-3 shadow rounded-4">
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">New folder</Dropdown.Item>
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">File upload</Dropdown.Item>
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">Google docs</Dropdown.Item>
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">Google sheets</Dropdown.Item>
              <hr className="dropdown-divider"></hr>
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">+ Invite</Dropdown.Item>
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">Generate report</Dropdown.Item>
              <Dropdown.Item className="dropdown-item rounded-pill" to="#">New Reports</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown mx-3">
              <Dropdown.Toggle as='a' to="#" className='hide-toggle' type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"></path>
                  </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-end p-2 p-xl-3 shadow rounded-4" style={{"width": "300px"}}>
                  <h6>Filter Options</h6>
                  <div className="row g-3 mt-3">
                      <div className="col-12">
                          <label className="form-label small text-muted">Sorted by:</label>
                          <input type="email" className="form-control" placeholder="Search"/>
                          </div>
                      <div className="col-12">
                          <label className="form-label small text-muted">Status:</label>
                          <select className="form-select">
                              <option selected>Choose...</option>
                              <option>...</option>
                          </select>
                      </div>
                      <div className="col-12">
                          <label className="form-label small text-muted">Notifications:</label>
                          <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" role="switch"/>
                                  <label className="form-check-label">Enabled</label>
                            </div>
                      </div>
                      <div className="col-12 text-end mt-4">
                          <button type="reset" className="btn btn-sm btn-light me-2">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary">Apply</button>
                      </div>
                  </div>
              </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="pe-3 col-auto">
              <div className="vr d-none d-sm-flex h-100 mx-sm-2"></div>
        </Dropdown>
        <Dropdown className="d-none d-xxl-inline-flex">
              <Dropdown.Toggle as="button" className="btn px-0 rightbar-toggle hide-toggle" type="button" onClick={toggleRightbar}>
                  <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M15 4v16"></path>
                      <path d="M9 10l2 2l-2 2"></path>
                  </svg>
              </Dropdown.Toggle>
        </Dropdown>
        <Dropdown className="d-inline-flex d-xxl-none">
              <Dropdown.Toggle as="button" className="btn border-0 p-0 hide-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_rightbar">
                  <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M15 4v16"></path>
                      <path d="M9 10l2 2l-2 2"></path>
                  </svg>
              </Dropdown.Toggle>
        </Dropdown>
    </>
  )
}

export default PageHeaderAction