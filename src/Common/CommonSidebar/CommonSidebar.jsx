import React from "react";
import { Link } from "react-router-dom";

import MenuItem from './MenuItem';
import menuItem from './menuItem.json';

const CommonSidebar = ( {iconColor} ) => {

    const { usersMenuItems, projectMenuItems, bootstrapMenuItems, fontIconMenuItems, chartMenuItems, widgetsMenuItems, authenticationMenuItems } = menuItem;
     
    return (
    <>
    <aside className="ps-4 pe-3 py-3 sidebar" id='sidebar' data-bs-theme="none">
        <nav className="navbar navbar-expand-xl py-0">
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvas_Navbar">
                
                <div className="offcanvas-header">
                    <div className="d-flex">
                        <Link to="/" className="brand-icon me-2">
                            <svg height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="var(--primary-color)" fillRule="evenodd" clipRule="evenodd" d="M8.30814 0C6.02576 0 4.33695 1.99763 4.41254 4.16407C4.48508 6.24542 4.39085 8.94102 3.7122 11.1393C3.03153 13.3441 1.88034 14.7407 0 14.92V16.9444C1.88034 17.1237 3.03153 18.5203 3.7122 20.7251C4.39085 22.9234 4.48508 25.619 4.41254 27.7003C4.33695 29.8664 6.02576 31.8644 8.30847 31.8644H31.6949C33.9773 31.8644 35.6658 29.8668 35.5902 27.7003C35.5176 25.619 35.6119 22.9234 36.2905 20.7251C36.9715 18.5203 38.1197 17.1237 40 16.9444V14.92C38.1197 14.7407 36.9715 13.3441 36.2905 11.1393C35.6119 8.94136 35.5176 6.24542 35.5902 4.16407C35.6658 1.99797 33.9773 0 31.6949 0H8.30814Z"/>
                                <path fill="white" d="M30.0474 8.81267L20.0721 26.7214C19.8661 27.0911 19.337 27.0933 19.128 26.7253L8.95492 8.81436C8.72711 8.41342 9.06866 7.92768 9.52124 8.009L19.5072 9.80102C19.5709 9.81245 19.6361 9.81234 19.6998 9.80069L29.4769 8.01156C29.928 7.92899 30.2711 8.41086 30.0474 8.81267Z"/>
                                <path fill="var(--primary-color)" d="M22.9634 11.0029L18.4147 11.8178C18.3784 11.8243 18.3455 11.8417 18.3211 11.8672C18.2967 11.8927 18.2823 11.9248 18.2801 11.9586L18.0003 16.2791C17.9937 16.3808 18.0959 16.4598 18.2046 16.4369L19.471 16.1697C19.5895 16.1447 19.6966 16.2401 19.6722 16.3491L19.2959 18.0335C19.2706 18.1468 19.387 18.2438 19.5081 18.2101L20.2903 17.9929C20.4116 17.9592 20.5281 18.0564 20.5025 18.1699L19.9045 20.8157C19.8671 20.9812 20.1079 21.0715 20.2083 20.9296L20.2754 20.8348L23.9819 14.0722C24.044 13.959 23.937 13.8299 23.8009 13.8539L22.4974 14.0839C22.3749 14.1055 22.2706 14.0012 22.3052 13.8916L23.156 11.1951C23.1906 11.0854 23.086 10.981 22.9634 11.0029Z"/>
                            </svg>
                        </Link>
                        <span className="fs-5">BVITE</span>
                    </div>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className="offcanvas-body flex-column custom_scroll ps-4 ps-xl-0">
                    {/* <!-- start: Workspace --> */}
                    {/* <h6 className="fl-title title-font ps-2 small text-uppercase text-muted"  style={{"--text-color": "var(--theme-color1)"}}>Workspace</h6> */}
                    <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
                        <MenuItem 
                        title="Dashboard-SPARK-INTRO" 
                        link="/index"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M10 12h4v4h-4z"></path>
                        </svg>} 
                        menuItems={[]} />

                        {/* <MenuItem 
                        title="My Wallet - SPARK-MAYBE" 
                        link="/my-wallet"           
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                        </svg>}
                        menuItems={[]} /> */}
                    </ul>
                    {/* <!-- start: Application --> */}
                    {/* <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{"--text-color": "var(--theme-color2)"}}>Apps</h6> */}
                    <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
                        <MenuItem 
                        title="Campaigns" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M6 5.3a9 9 0 0 1 0 13.4"></path>
                            <path d="M18 5.3a9 9 0 0 0 0 13.4"></path>
                        </svg>} 
                        menuItems={projectMenuItems} />
                        <MenuItem 
                        title="Infuencers" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                        </svg>} 
                        menuItems={usersMenuItems} />

                        {/* <MenuItem 
                        title="My Calendar" 
                        link="/app/calendar"
                        icon={
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M16 3l0 4"></path>
                            <path d="M8 3l0 4"></path>
                            <path d="M4 11l16 0"></path>
                            <path d="M8 15h2v2h-2z"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Inbox"
                        link="/app/inbox" 
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M4 13h3l3 3h4l3 -3h3"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Chat" 
                        link="/app/chat"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Blog Article" 
                        link="/app/blog"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5z"></path>
                            <path d="M7 7m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h3a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 -1.5 -1.5z"></path>
                            <path d="M7 14m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        <MenuItem 
                        title="File Manager-SPARK-ASSETS" 
                        link="/app/filemanager"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                            <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"></path>
                        </svg>} 
                        menuItems={[]} />


                    <MenuItem 
                        title="My Wallet - SPARK-MAYBE" 
                        link="/my-wallet"           
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                        </svg>}
                        menuItems={[]} />

                    </ul>




                    {/* <!-- start: Plugin --> */}
                    <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{"--text-color": "var(--theme-color3)"}}>Plugins</h6>
                    <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
                        <MenuItem 
                        title="Bootstrap UI" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
                            <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path>
                            <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path>
                        </svg>} 
                        menuItems={bootstrapMenuItems} />
                        <MenuItem 
                        title="Font Icon" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M5 7v10"></path>
                            <path d="M7 5h10"></path>
                            <path d="M7 19h10"></path>
                            <path d="M19 7v10"></path>
                            <path d="M10 10h4"></path>
                            <path d="M12 14v-4"></path>
                        </svg>} 
                        menuItems={fontIconMenuItems} />


                        {/* <MenuItem 
                        title="Charts" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M4 20l14 0"></path>
                        </svg>} 
                        menuItems={chartMenuItems} /> */}
                        {/* <MenuItem 
                        title="Bootstrap5 tags" 
                        link="/docs/bootstrap5-tags"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
                            <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path>
                            <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path>
                        </svg>} 
                        menuItems={[]} /> */}


                       <MenuItem 
                        title="Datatables" 
                        link="/docs/datatables"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M12 4l0 16"></path>
                        </svg>} 
                        menuItems={[]} />


                        {/* <MenuItem 
                        title="Flatpickr" 
                        link="/docs/flatpickr"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
                            <path d="M18 14v4h4"></path>
                            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M15 3v4"></path>
                            <path d="M7 3v4"></path>
                            <path d="M3 11h16"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Inputmask" 
                        link="/docs/inputmask"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"></path>
                            <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"></path>
                            <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"></path>
                            <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"></path>
                            <path d="M17 12h.01"></path>
                            <path d="M13 12h.01"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Jsvectormap" 
                        link="/docs/jsvectormap"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                            <path d="M9 4v13"></path>
                            <path d="M15 7v5.5"></path>
                            <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
                            <path d="M19 18v.01"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Sortablejs" 
                        link="/docs/sortablejs"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"></path>
                            <path d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"></path>
                            <path d="M14 15l3 3l3 -3"></path>
                            <path d="M17 18v-12"></path>
                        </svg>} 
                        menuItems={[]} /> */}

                        <MenuItem 
                        title="Sweet alert 2" 
                        link="/docs/sweetalert2"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
                            <path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5"></path>
                            <path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068"></path>
                            <path d="M10 10v.01"></path>
                            <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        </svg>} 
                        menuItems={[]} />


                        {/* <MenuItem 
                        title="Tagify" 
                        link="/docs/tagify"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="8.5" cy="8.5" r="1" fill="currentColor"></circle>
                            <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z"></path>
                        </svg>} 
                        menuItems={[]} /> */}

                        <MenuItem 
                        title="Tiny slider" 
                        link="/docs/tiny-slider"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M4 6l8 0"></path>
                            <path d="M16 6l4 0"></path>
                            <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M4 12l2 0"></path>
                            <path d="M10 12l10 0"></path>
                            <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M4 18l11 0"></path>
                            <path d="M19 18l1 0"></path>
                        </svg>} 
                        menuItems={[]} />


                        {/* <MenuItem 
                        title="Toast Calendar" 
                        link="/docs/toast-calendar"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path>
                            <path d="M16 3v4"></path>
                            <path d="M8 3v4"></path>
                            <path d="M4 11h16"></path>
                            <path d="M20 21l2 -2l-2 -2"></path>
                            <path d="M17 17l-2 2l2 2"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Toast editor" 
                        link="/docs/toast-editor"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                            <path d="M16 5l3 3"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                    </ul>


                    {/* <!-- start: More Pages --> */}
                    <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{"--text-color": "var(--theme-color4)"}}>Pages</h6>
                    <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
                        <MenuItem 
                        title="Widgets" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                        </svg>} 
                        menuItems={widgetsMenuItems} />

                        {/* <MenuItem 
                        title="Authentication" 
                        link="#"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"></path>
                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                            <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                            <path d="M20 21l2 -2l-2 -2"></path>
                            <path d="M17 17l-2 2l2 2"></path>
                        </svg>} 
                        menuItems={authenticationMenuItems} /> */}
                        <MenuItem 
                        title="Tables"
                        link="/pages/table" 
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M12 4l0 16"></path>
                        </svg>} 
                        menuItems={[]} />
                        <MenuItem 
                        title="Forms" 
                        link="/pages/form"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"></path>
                            <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"></path>
                            <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"></path>
                            <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"></path>
                            <path d="M17 12h.01"></path>
                            <path d="M13 12h.01"></path>
                        </svg>} 
                        menuItems={[]} />
                        {/* <MenuItem 
                        title="Pricing Table" 
                        link="/pages/pricing"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
                            <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
                        </svg>} 
                        menuItems={[]} />
                        <MenuItem 
                        title="Imgae Gallery" 
                        link="/pages/gallery"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7.5 7c2.485 0 4.5 1.974 4.5 4.409v.591h-8.397a.61 .61 0 0 1 -.426 -.173a.585 .585 0 0 1 -.177 -.418c0 -2.435 2.015 -4.409 4.5 -4.409z"></path>
                            <path d="M16.5 17c-2.485 0 -4.5 -1.974 -4.5 -4.409v-.591h8.397c.333 0 .603 .265 .603 .591c0 2.435 -2.015 4.409 -4.5 4.409z"></path>
                            <path d="M7 16.5c0 -2.485 1.972 -4.5 4.405 -4.5h.595v8.392a.61 .61 0 0 1 -.173 .431a.584 .584 0 0 1 -.422 .177c-2.433 0 -4.405 -2.015 -4.405 -4.5z"></path>
                            <path d="M17 7.5c0 2.485 -1.972 4.5 -4.405 4.5h-.595v-8.397a.61 .61 0 0 1 .175 -.428a.584 .584 0 0 1 .42 -.175c2.433 0 4.405 2.015 4.405 4.5z"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        {/* <MenuItem 
                        title="Search Page" 
                        link="/pages/search"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                        <MenuItem 
                        title="Documentation" 
                        link="/docs/index"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                        </svg>} 
                        menuItems={[]} />
                        {/* <MenuItem 
                        title="Changelog:" 
                        link="/docs/changelog"
                        icon={
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988"></path>
                            <path d="M7.05 11.038v-3.988"></path>
                        </svg>} 
                        menuItems={[]} /> */}
                    </ul>
                    {/* <div className="bg-gradient rounded-3 p-4 text-white mt-4 promo">
                        <p className="lh-sm fw-light">Start using our team and project management tools.</p>
                        <button className="btn btn-sm w-100 btn-light text-uppercase" type="button">View Details</button>
                    </div> */}
                </div>
            </div>
        </nav>
    </aside>
    </>
    )
}
  
  export default CommonSidebar
