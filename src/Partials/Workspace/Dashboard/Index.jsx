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
import welcomelogo from '../../../assets/Logos/welcomelogo.png';
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
							<img className="mb-3" src={welcomelogo}/>
							<div className="d-flex align-items-start">
								<div className="ms-3">
									<h2 className="mb-4 text-gradient title-font">A Smarter Way To Manage Your Social Marketing Campaigns</h2>
									<h5 className="mt-4 mb-1 text-muted">The Spark Tool Suite allows both companies and individuals to seemlessly operate their social campaigns.</h5>
									<h5 className="mb-1 text-muted">Marketing objectives are achieved by extensively monitoring social interactivity using Onchain analysis, </h5>
									<h5 className="mb-4 text-muted">resulting in timely automated payments to all of the project contributors.  </h5>

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
											What is Spark?
										</button>
									</h3>
									<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Spark is a decentralized marketing application. It aims to provide transparent and trsutless marketing campaign management solutions </div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
											Where is Spark deployed?
										</button>
									</h3>
									<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Spark is a decentralized application built on Base as part of the On Chain Summer Hackathon. It is deployed both on Base-Sepolia and Base mainnet.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Who can use Spark?
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Anyone can register and run marketing cmapaigns on Farcaster using Spark. You need to define a budget, a tagline a website url and a start and end time. Then let Spark and Influencers do their magic. See FAQ Guide for user guidance.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingFour">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
											What are the key benefits of using Spark?
										</button>
									</h3>
									<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Some key benefits are that you can set a campaign budget as high or as low as you like. When you register a cmapaign you also state the points an
											influencer will receive for a successful action such as Follow your account, Like any of your casts, recasting or replying to any of your casts, cast themselves mentioned 
											your company Farcaster username and/or including your company tagline and/or your company website.
											This ensures that at all times the both parties, the cmapaigner and the influencer are aware of the terms of the agreement and abide to it. 
											Payment allocations to the influencers are done automatically by the smart contract on a proportional basis to the points they have earned against the total points earned by all influencers (campaign total points).
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingFive">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
											How does Spark make money?
										</button>
									</h3>
									<div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>

							</div>
						</div>

						<div className="col-4">
							<div className="accordion accordion-flush" id="accordionFlushExample2">
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingSix">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
											What happens at the payments at the end of a campaing period?
										</button>
									</h3>
									<div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingSeven">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
											I am an infuencer, how do I get paid?
										</button>
									</h3>
									<div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingEight">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
											What is Spam Factor?
										</button>
									</h3>
									<div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingNine">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
										How do I register a new campaign?
										</button>
									</h3>
									<div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
										What is All and Hot campaigns?
										</button>
									</h3>
									<div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>

							</div>
						</div>



						
						<div className="col-4">
							<div className="accordion accordion-flush" id="accordionFlushExample2">
						
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingEight">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
											What is the Details page of a campaign?
										</button>
									</h3>
									<div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingNine">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
											What is Squawk Box?
										</button>
									</h3>
									<div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
											I am an infuencer How do I register on the Platform?
										</button>
									</h3>
									<div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>



							

								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
											I am an infuencer How do I register for a campaign?
										</button>
									</h3>
									<div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
									</div>
								</div>

								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
											What is the Details page of an infuencer ?
										</button>
									</h3>
									<div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample2">
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