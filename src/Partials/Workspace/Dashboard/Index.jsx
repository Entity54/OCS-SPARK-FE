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
										<div className="accordion-body">Spark is a decentralized marketing management application. It aims to provide transparent and trustless marketing campaign management solutions.
										<br/><br/>Disclaimer: Spark is part of the On Base Chain Summer Hackathon and is a prototype. It has not been audited and is not ready for production. Loss of funds is possible.
										
										 </div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
											Where is Spark deployed?
										</button>
									</h3>
									<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Spark is a decentralized application built on Base as part of the On Chain Summer Hackathon. It is deployed both on Base mainnet and Base-Sepolia testnet. Ensure what chain you are connected to by clicking the Smart Wallet at the top right corner
										Ensure your account has some ETH to pay for gas fees and campaign budget if you plan on launching a campaign (Click the connected account address to see your balance and top up if needed)
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
											Who can use Spark?
										</button>
									</h3>
									<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Anyone can register and run marketing campaigns on Farcaster using Spark. You need to define a budget, a tagline, a website or frame url and a start and end time. Then let Spark and Influencers do their magic.</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingFour">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
											What are the key benefits of using Spark?
										</button>
									</h3>
									<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
										<div className="accordion-body">Some key benefits are that you can set a campaign budget as high or as low as you like. When you register a campaign you also state the points an
											influencer will receive for a successful action such as Follow your account, Like any of your casts, recasting or replying to any of your casts, cast themselves mentioning 
											your company Farcaster username and/or including your company tagline and/or your company website or frame.
											This ensures that at all times both parties, the campaigner and the influencer are aware of the terms of the agreement and abide to these. 
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
										<div className="accordion-body">Spark charges a fee of 10% of a campaign budget. All payments are done in ETH</div>
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
										<div className="accordion-body">At the end of the campaign period, the total points acrued for the campaign and for each Influencer is known. The distribution of each Infuencer is calculated based on his/her total points against the total campaign points. This percentage is then mutliplied with the 90% of the campaign Budget. (Spark charges a 10% fee of the Budget). Budget and all payments are done in ETH</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingSeven">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
											I am an infuencer, how do I get paid?
										</button>
									</h3>
									<div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">When an Infuencer registers in the Spark Protocol, an Ethereum account that belongs to his/her verified Farcaster Accounts is registered. This is the account the Influencer will receive campaign fees based on his points performance</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingEight">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
											What is Spam Factor?
										</button>
									</h3>
									<div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">Since every campaign has a score card with points allocated per Farcaster action and since the points an Influencer accrues are dependant on the Farcaster action he/she performs x the number of follower he/she has 
										then there must be a way to deduct these points back if an action is negated e.g. a previous liked cast is unliked. To also avoid the case where the Influencer tries to game the system with fake followers, we have introduced the Spam Factor. 
										Each Infuencer starts with Spam Factor 1. This means that the total points deducted when an action is negated e.g. a re-cast is deleted is a factor of the action mark as per the campaign mark card x the Infuencer's number of followers x Spam Factor. 
										But each time an action is negated the Spam factor doubles resolving quickly in the Infuencer ending up with zero points for that campaign and having to restart again. The Infuencer's Spam factor is also a global feature for his/her profile i.e. for any new campaign the Spam Factor is the same.
										If an Infuencer reaches zero points the Spam Factor reverts to its original value of 1 </div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingNine">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
										How do I register a new campaign?
										</button>
									</h3>
									<div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">After Connecting with the Smart Wallet, head to the Campaigns/New , fill in the Campaign Title, Description the Farcaster Id (Fid) that the campaign will cast messages, the Ethereum account that pays for the campaign budget fess,
										as a default this is the connected Smart Wallet account and the Budget fee in ETH that you are willing to spend for this campaign
										Next define a start and end date for the campaign and the points that an Influencer will receive for each action. The actions are Follow your account, Like any of your casts, recasting or replying to any of your casts, casting themselves mentioning your company Farcaster username and/or including your company tagline and/or your company embed url (website or frame).
										Url Embed and Tag Line are the campaign assets. These are the url and or taglines that depict this campaign and you would like the infuencers to include in their casts. Finally click  "Create Campaign"
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
										What is All and Hot campaigns?
										</button>
									</h3>
									<div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample2">
										<div className="accordion-body">All campaigns page has the list of all campaigns on the protocol. This includes pending, active, paid and void campaigns and it is a reference point for analytics e.g. if one wants to compare campaigns scores and run A/B tests
										The Hot campaigns incudes only the pending and active campaigns that an Infuencer can register for. </div>
									</div>
								</div>

							</div>
						</div>



						
						<div className="col-4">
							<div className="accordion accordion-flush" id="accordionFlushExample3">
						
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingEleven">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
											What is the Details page of a campaign?
										</button>
									</h3>
									<div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample3">
										<div className="accordion-body">
											One can either input the Campaign uid he cares about or arrive to this page by clicking on the relevant campaign title in the All page or View Details in the Hot campaigns page.
											In the Details page of a campaign you can see the campaign details, the campaign score card, the campaign assets, the campaign budget and the campaign actions. You can also see the list of influencers that have registered for the campaign and their points performance.	
											Furthermore when the campaign is active you can see the campaign progress bar. When the campaign is completed you can see the campaign total points, for each participating infuencer his/her total points but also points per specific action performed
											and the ETH amounts sent to each Infuencer.
											Finall there is a button "Sing in With Neynar " that allows you to sign in with Neynar and then click the Register To Campaign button for an Infuencer to register for this campaign.
											Note: It is important that the Infuencer is already registered to the Spark Protocol, which is only required once
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingTwelve">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
											What is Squawk Box?
										</button>
									</h3>
									<div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample3">
										<div className="accordion-body">For active campaigns and actions performed by Infuencers registered to campaigns, Spark webhook server feeds the Spark SquawkProcessor smart contract
											Therefore Squawk box is a list of historical time series Farcaster actions elegible for points being awarded or deducted, as stored in the SquawkProcessor smart contract.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingThirteen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
											I am an infuencer How do I register on the Platform?
										</button>
									</h3>
									<div id="flush-collapseThirteen" className="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample3">
										<div className="accordion-body">
											Registration is done via the Smart Wallet and Sign in with Neynar. You need to connect your Smart Wallet to the Spark Protocol. Once connected you can Sign in with Neynar. This will read 
											your Farcaster profile and a Farcaster verified ethereum address which will be the address you receive any funds when a completed campaign is paid out.
											An Influencer is only required to register once on the Spark protocol. Once registered you can register for any campaign you like.
										</div>
									</div>
								</div>

								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingFourteen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
											I am an infuencer How do I register for a campaign?
										</button>
									</h3>
									<div id="flush-collapseFourteen" className="accordion-collapse collapse" aria-labelledby="flush-headingFourteen" data-bs-parent="#accordionFlushExample3">
										<div className="accordion-body">Either visit the Campaign details page and insert the campaign uid or choose the campaign you are interested in from the Hot campaigns by clicking View details 
											Once on the Campaign/Details page, sign in with Neynar (Ensure you are connected with the Smart Wallet) and click the Register To Campaign button.  
										</div>
									</div>
								</div>

								<div className="accordion-item">
									<h3 className="accordion-header" id="flush-headingFifteen">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
											What is the Details page of an infuencer ?
										</button>
									</h3>
									<div id="flush-collapseFifteen" className="accordion-collapse collapse" aria-labelledby="flush-headingFifteen" data-bs-parent="#accordionFlushExample3">
										<div className="accordion-body">The Details page for an Influencer shows the influencer username, Farcaster id (Fid), number of followers, Spam Factor and the Smart Wallet account used to register this Influencer.
										One can either insert the Infuencer Fid he cares about or arrive to this page by clicking on the relevant Influencer in the All page.
										</div>
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