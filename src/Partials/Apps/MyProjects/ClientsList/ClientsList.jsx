import React from 'react'
import { ClientsData } from './Components/ClientsListData'

const ClientsList = () => {
  return (
        <div className="px-4 py-3 page-body">
            <ul className="row g-1 li_animate list-unstyled" id="MyClients">
                {ClientsData.map((data, index) => {
                return(
                <li key={index} className="col-12">
                    <div className="bg-light p-3 rounded-4 d-flex align-items-center flex-column flex-md-row">
                        <img className="avatar lg rounded-circle img-thumbnail ms-auto me-auto shadow" src={data.img} alt=""/>
                        <div className="ms-md-2 ms-lg-3 text-md-start text-center w-100 mt-4 mt-md-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-3 mb-md-0">
                                    <h6 className="mb-1">{data.name}</h6>
                                    <span className="text-muted">{data.address}</span>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 text-center">
                                    <ul className="list-unstyled d-flex mb-0 text-center text-md-start">
                                        <li className="flex-fill p-2 rounded-start">
                                            <h6 className="mb-1">{data.total_project}</h6>
                                            <span className="small text-muted">Total Project</span>
                                        </li>
                                        <li className="flex-fill p-2 mx-1">
                                            <h6 className="mb-1">{data.payment}</h6>
                                            <span className="small text-muted">Payment Received</span>
                                        </li>
                                        <li className="flex-fill p-2 rounded-end">
                                            <h6 className="mb-1">{data.pending_amount}</h6>
                                            <span className="small text-muted">Amount Pending</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 text-center text-md-end mt-3 mt-md-0">
                                    <button type="button" className="btn px-2 me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i className="fa fa-envelope"></i></button>
                                    <button type="button" className="btn px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                )})}
            </ul>
        </div>
    )
}

export default ClientsList