import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
			<div className="card mb-3">
				<div className="card-body">





{/* <div className="row g-4 li_animate">
		<div className="col-xl-4 col-lg-4">

			<div id="readNumberSW">  
              <button style={{backgroundColor:"blue", color:"white"}} onClick={readMyNumber_SW}>
                Read My Number SW
              </button>
              <input type="text" readOnly value = {my_number_SW} placeholder="" className="form-control fs-14" style={{backgroundColor:"lightgrey",  textAlign:"center", color:"black" }} />
          </div>
          <div id="readSenderSW">
              <button style={{backgroundColor:"blue", color:"white"}} onClick={readSender_SW}>
                Read Sender Address SW
              </button>
              <input type="text"  readOnly value = {msgSender_SW} placeholder="" className="form-control fs-14" style={{backgroundColor:"lightgrey",  textAlign:"center", color:"black"}} />
          </div>
          <div id="setNumberSW">
              <button style={{backgroundColor:"blue", color:"white"}} onClick={setMyNewNumber_SW}>
               Set My Number SW
              </button>
              <input type="text" value = {newNumber_SW} placeholder="" className="form-control fs-14" style={{backgroundColor:"lightgrey",  textAlign:"center", color:"black" }} 
                onChange={(event) => setNewNumber_SW(event.target.value)}
              />
          </div>

    </div>
</div> */}










					<div className="row g-4 li_animate">
						<div className="col-xl-4 col-lg-4">
							<span className="small">Welcome back!</span>
							<h2 className="fw-bold mb-xl-5 mb-4">My Dashboard SPARK</h2>
							<div className="d-flex align-items-start">
								<img className="avatar lg rounded-circle border border-3" src={profileImage} alt="avatar"/>
								<div className="ms-3">
									<h4 className="mb-0 text-gradient title-font">Hello, Michelle!</h4>
									<span className="text-muted small">michelle.glover@bvite.com</span>
									<p className="mb-0 mt-xl-4 mt-3 text-muted small">"Power up your web app with our sleek (Bvite) Bootstrap admin dashboard template.</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
							<ul className="list-inline d-flex flex-column mb-0 ms-5 ms-sm-0 ps-4 ps-sm-0">
								{YearData.map((data, index) => {
								return(
								<li key={index} className="list-inline-item mb-4">
									<span className="small text-muted">{data.year}<span className={`ps-2 ${data.icon} ${data.text_color}`}> {data.per}</span></span>
									<h6 className="mb-0 mt-1">
										<CountingAnimation
										start={0}
										separator={'.'}
										currency={data.currency}
										end={data.value}
										duration={5000}
										/>
									</h6>
								</li>
								)})}
								<li className="list-inline-item">
									<button type="button" className="btn btn-primary px-lg-3 py-lg-2">View Reports</button>
								</li>
							</ul>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-8 col-sm-8">
							<Chart
							id="apex-MyAnalytics"
							className="apex-extra-none"
							key={chartKey}
							options={MyAnalytics}
							series={MyAnalytics.series}
							height={MyAnalytics.chart.height}
							type={MyAnalytics.chart.type}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row g-3">
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
			</div>
		</div>
  	)
}

export default Index