import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import Chart from 'react-apexcharts'

import { CardData } from './Components/DashboardData'
import { RecentSellers } from './Components/DashboardData'
import { SalesRevenueData } from './Components/DashboardData'
import { YearData } from './Components/DashboardData'

import { MyAnalytics } from './Components/MyAnalyticsChart'
import { SalesAnalytics } from './Components/SalesAnalyticsChart'
import { EmployeeSalary } from './Components/EmployeeSalaryChart'
import CountingAnimation from '../../../Common/CommonCounting/CountingAnimation'

import profileImage from '../../../assets/images/profile_av.png';
import avatar5 from '../../../assets/images/xs/avatar5.jpg';
import avatar6 from '../../../assets/images/xs/avatar6.jpg';
import avatar1 from '../../../assets/images/xs/avatar1.jpg';
import avatar4 from '../../../assets/images/xs/avatar4.jpg';
import CardAction from '../../Widgets/CardAction/CardAction'


// import {
// 	  getMyNumber_SW, getSender_SW, setMyNumber_SW
// } from "@Setup_EVM";


const Index = () => {
	const screenWidth = useSelector((state) => state.screenWidth.screenWidth);

	const [chartKey, setChartKey] = useState(0); // Add a key to force chart refresh


				// //Used for the Contract calls SmartWallet
				// const [my_number_SW, setMy_number_SW]   = useState("");
				// const [msgSender_SW, setMsgSender_SW]   = useState("");
				// const [newNumber_SW, setNewNumber_SW]   = useState(0);

				// ///#region Contract Calling Functions via SmartWallet
				// const readMyNumber_SW = async () => {
				// 	const response = await getMyNumber_SW();
				// 	setMy_number_SW(response);
				// }
				// const readSender_SW = async () => {
				// 	const response = await getSender_SW();
				// 	setMsgSender_SW(response);
				// }
				// const setMyNewNumber_SW = async () => {
				// 	setMyNumber_SW(newNumber_SW);
				// }
				// //#endregion



	useEffect(() => {
	// Update the key whenever rightbarHidden changes to force chart refresh
	setChartKey(prevKey => prevKey + 1);
	}, [screenWidth]);
	
  	return (
		
		<div className="px-4 py-3 page-body">
			{/* <div className="card mb-3">
				<div className="card-body"> */}

					<div className="row g-4 li_animate">
						<div className="col-xl-12 col-lg-12">
							{/* <span className="small">Welcome back!</span> */}
							<h2 className="fw-bold mb-xl-2 mb-2">Welcome To SPARK</h2>
							<div className="d-flex align-items-start">
								{/* <img className="avatar lg rounded-circle border border-3" src={profileImage} alt="avatar"/> */}
								<div className="ms-3">
									<h4 className="mb-0 text-gradient title-font">Put A Tag Line Or Description In Here</h4>
									{/* <span className="text-muted small">michelle.glover@bvite.com</span> */}
									<p className="mb-0 mt-xl-2 mt-2 ms-3 mb-4 text-muted">Maybe Even One More Line In Here Explaining The Project</p>
								</div>
							</div>
						</div>
					</div>
				{/* </div>
			</div> */}
					<div className="row mt-5">
						<h5>Questions On The Project</h5>
						<div className="col-4">
							<div className="accordion accordion-flush" id="accordionFlushExample">
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingOne">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
											Is Turkish Delight Really Greek?
										</button>
									</h3>
									<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Of course it is not. The answer is in the name.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
											Did Socrates know anything?
										</button>
									</h3>
									<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">He lived until 80 years of age, so he knew how to avoid covid.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #3
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #4
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #5
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>

							</div>
						</div>
						<div className="col-4">
							<div className="accordion accordion-flush" id="accordionFlushExample">
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingOne">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
											Accordion Item #6
										</button>
									</h3>
									<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
											Accordion Item #7
										</button>
									</h3>
									<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #8
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #9
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #10
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>

							</div>
						</div>
						<div className="col-4">
							<div className="accordion accordion-flush" id="accordionFlushExample">
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingOne">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
											Accordion Item #11
										</button>
									</h3>
									<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
											Accordion Item #12
										</button>
									</h3>
									<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #13
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #14
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Accordion Item #15
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>

							</div>
						</div>
					</div>



			{/* <div className="row g-3">
				{CardData.map((data, index) => {
				return(
				<div key={index} className="col-lg-3 col-md-6 col-sm-6">
					<div className="card p-3 px-4">
					<div>{data.title}</div>
					<div className="py-4 m-0 text-center h2">
						<CountingAnimation
						start={0}
						separator={'.'}
						currency={data.currency}
						end={data.value}
						duration={5000}
						/>
					</div>
					<div className="d-flex">
						<small className="text-muted">{data.year}</small>
						<div className="ms-auto">{data.per}</div>
					</div>
					</div>
				</div>
				)})}
				<div className="col-xxl-8 col-xl-7 col-lg-12">
					<div className="card">
						<div className="card-header">
							<h6 className="card-title">Sales Analytics</h6>
							<div className="dropdown card-action">
								<CardAction />
							</div>
						</div>
						<div className="card-body">
							<div>
								<Chart
								key={chartKey}
								options={SalesAnalytics}
								series={SalesAnalytics.series}
								height={SalesAnalytics.chart.height}
								type={SalesAnalytics.chart.type}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
					<div className="card">
						<div className="card-header">
							<h6 className="card-title mb-0">Sales Revenue</h6>
							<div className="dropdown card-action">
								<CardAction />
							</div>
						</div>
						<div className="card-body custom_scroll" style={{height: "320px"}}>
							<table className="table table-hover mb-0">
								<tbody>
								{SalesRevenueData.map((data, index) => {
									return(
									<tr key={index}>
										<td>
											{data.country}
											<div className="progress mt-1" style={{height: "2px"}}>
											<div className="progress-bar bg-primary" style={{width: data.width}}></div>
											</div>
										</td>
										<td className="text-end"><span className="text-muted">{data.revenue}</span></td>
									</tr>
									)})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
					<div className="card">
						<div className="card-header">
							<h6 className="card-title mb-0">Customer rating</h6>
							<div className="dropdown card-action">
								<CardAction/>
							</div>
						</div>
						<div className="card-body custom_scroll" style={{height: "280px"}}>
							<div className="d-flex align-items-center">
								<div className="avatar rounded-circle no-thumbnail theme-color4 text-white"><i className="fa fa-star fa-lg"></i></div>
								<h6 className="ms-3 mb-0">4.9 Rating </h6>
							</div>
							<div className="avatar-list avatar-list-stacked my-4 px-3">
								<img className="avatar rounded-circle me-1" src={avatar5} data-toggle="tooltip" title="Avatar" alt="avatar"/>
								<img className="avatar rounded-circle me-1" src={avatar6} data-toggle="tooltip" title="Avatar" alt="avatar"/>
								<img className="avatar rounded-circle me-1" src={avatar1} data-toggle="tooltip" title="Avatar" alt="avatar"/>
								<img className="avatar rounded-circle me-1" src={avatar4} data-toggle="tooltip" title="Avatar" alt="avatar"/>
								<span>+195K raters</span>
							</div>
							<p className="text-muted small mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
						</div>
						<div className="card-footer py-2">
							<a href="#" title="Rate Out Application">Rate Out Application<i className="fa fa-long-arrow-right ms-2"></i></a>
						</div>
					</div>
				</div>
				<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
					<div className="card">
						<div className="card-header">
							<h6 className="card-title mb-0">Employee Salary</h6>
							<div className="dropdown card-action">
								<CardAction/>
							</div>
						</div>
						<div className="card-body py-1">
							<div>
								<Chart
								key={chartKey}
								options={EmployeeSalary}
								series={EmployeeSalary.series}
								height={EmployeeSalary.chart.height}
								type={EmployeeSalary.chart.type}
								/>
							</div>
						</div>
						<div className="card-footer py-2">
							<a href="#" title="my task">View report<i className="fa fa-long-arrow-right ms-2"></i></a>
						</div>
					</div>
				</div>
				<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
					<div className="card">
						<div className="card-header">
							<h6 className="card-title mb-0">Recent Sellers</h6>
							<div className="dropdown card-action">
								<CardAction/>
							</div>
						</div>
						<div className="card-body custom_scroll" style={{height: "320px"}}>
							<ul className="list-group list-group-flush user-list mb-0" role="tablist">
							{RecentSellers.map((data, index) => {
								return(
								<li key={index} className="list-group-item b-dashed">
									<a href="#"  className="d-flex">
										{data.img ? 
										<img className="avatar rounded-circle" src={data.img} alt=""/>
										: <div className="avatar rounded-circle no-thumbnail">{data.initial}</div>}
										<div className="flex-fill ms-3">
											<h6 className="d-flex justify-content-between mb-0"><span>{data.name}</span></h6>
											<span className="text-muted small">{data.cust_id}</span>
										</div>
									</a>
								</li>
								)})}
							</ul>
						</div>
					</div>
				</div>
			</div> */}
		</div>
  	)
}

export default Index