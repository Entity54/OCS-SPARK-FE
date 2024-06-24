import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";

import Signin from "./Partials/Pages/Authentication/Signin/Signin";
import Signup from "./Partials/Pages/Authentication/Signup/Signup";
import PasswordReset from "./Partials/Pages/Authentication/PasswordReset/PasswordReset";
import TwoStep from "./Partials/Pages/Authentication/TwoStep/TwoStep";
import Lockscreen from "./Partials/Pages/Authentication/Lockscreen/Lockscreen";
import Maintenance from "./Partials/Pages/Authentication/Maintenance/Maintenance";
import NoPageFound from "./Partials/Pages/Authentication/NoPageFound/NoPageFound";


import Calendar from "./Partials/Apps/MyCalendar/Calendar";

import Index from "./Partials/Workspace/Dashboard/Index";

import MyWallet from "./Partials/Workspace/MyWallet/MyWallet";
import Invoices from "./Partials/Apps/Users/Invoices/Invoices";
import UserActivity from "./Partials/Apps/Users/UserActivity/UserActivity";
import MyTasks from "./Partials/Apps/Users/MyTasks/MyTasks";
import MyContact from "./Partials/Apps/Users/MyContact/MyContact";
import Analytics from "./Partials/Apps/MyProjects/Analytics/Analytics";



import NewCampaign from "./Partials/Apps/MyProjects/NewProject/NewCampaign";
import AllCampaigns from "./Partials/Apps/MyProjects/ProjectList/ProjectList";
import HotCampaigns from "./Partials/Apps/MyProjects/ProjectGrid/Campaigns";
import CampaignDetails from "./Partials/Apps/MyProjects/ProjectDetails/ProjectDetails";


import MyProfile from "./Partials/Apps/Users/MyProfile/MyProfile";
import AccountSetting from "./Partials/Apps/Users/AccountSetting/AccountSetting";
import Infuencers from "./Partials/Apps/MyProjects/ProjectGrid/Infuencers";




import ClientsList from "./Partials/Apps/MyProjects/ClientsList/ClientsList";
import Inbox from "./Partials/Apps/Inbox/Inbox";
import Chat from "./Partials/Apps/Chat/Chat";
import Blog from "./Partials/Apps/Blog/Blog";
import FileManager from "./Partials/Apps/FileManager/FileManager";
import Accordion from "./Partials/Plugins/BootstrapUI/Accordion/Accordion";
import Alerts from "./Partials/Plugins/BootstrapUI/Alerts/Alerts";
import UserAvatar from "./Partials/Plugins/BootstrapUI/UserAvatar/UserAvatar";
import Badges from "./Partials/Plugins/BootstrapUI/Badges/Badges";
import Breadcrumb from "./Partials/Plugins/BootstrapUI/Breadcrumb/Breadcrumb";
import Buttons from "./Partials/Plugins/BootstrapUI/Buttons/Buttons";
import Cards from "./Partials/Plugins/BootstrapUI/Cards/Cards";
import Carousel from "./Partials/Plugins/BootstrapUI/Carousel/Carousel";
import Collapse from "./Partials/Plugins/BootstrapUI/Collapse/Collapse";
import Dropdowns from "./Partials/Plugins/BootstrapUI/Dropdowns/Dropdowns";
import Listgroup from "./Partials/Plugins/BootstrapUI/Listgroup/Listgroup";
import Modal from "./Partials/Plugins/BootstrapUI/Modal/Modal";
import Navbar from "./Partials/Plugins/BootstrapUI/Navbar/Navbar";
import Navstabs from "./Partials/Plugins/BootstrapUI/Navstabs/Navstabs";
import Offcanvas from "./Partials/Plugins/BootstrapUI/Offcanvas/Offcanvas";
import Pagination from "./Partials/Plugins/BootstrapUI/Pagination/Pagination";
import Placeholders from "./Partials/Plugins/BootstrapUI/Placeholders/Placeholders";
import PopoversContent from "./Partials/Plugins/BootstrapUI/Popovers/PopoversContent";
import Progressbar from "./Partials/Plugins/BootstrapUI/Progressbar/Progressbar";
import Spinners from "./Partials/Plugins/BootstrapUI/Spinners/Spinners";
import Toasts from "./Partials/Plugins/BootstrapUI/Toasts/Toasts";
import BootstrapIcon from "./Partials/Plugins/FontIcon/BootstrapIcon/BootstrapIcon";
import CountryFlagsIcon from "./Partials/Plugins/FontIcon/CountryFlagsIcon/CountryFlagsIcon";
import FontawesomeIcon from "./Partials/Plugins/FontIcon/FontawesomeIcon/FontawesomeIcon";
import LinearIcon from "./Partials/Plugins/FontIcon/LinearIcon/LinearIcon";
// import WeatherIcon from "./Partials/Plugins/FontIcon/WeatherIcon/WeatherIcon";
import ApexCharts from "./Partials/Plugins/Charts/ApexCharts/ApexCharts";
import PeityCharts from "./Partials/Plugins/Charts/PeityCharts/PeityCharts";
import Bootstrap5Tags from "./Partials/Plugins/Bootstrap5Tags/Bootstrap5Tags";
import Datatables from "./Partials/Plugins/Datatables/Datatables";
import Flatpickr from "./Partials/Plugins/Flatpickr/Flatpickr";
import InputmaskPlugin from "./Partials/Plugins/Inputmask/InputmaskPlugin";
import Jsvectormap from "./Partials/Plugins/Jsvectormap/Jsvectormap";
import SortableJS from "./Partials/Plugins/SortableJS/SortableJS";
import Sweetalert2 from "./Partials/Plugins/Sweetalert2/Sweetalert2";
import Tagify from "./Partials/Plugins/Tagify/Tagify";
import Tinyslider from "./Partials/Plugins/Tinyslider/Tinyslider";
import ToastUICalendar from "./Partials/Plugins/ToastUICalendar/ToastUICalendar";
import ToastUIEditor from "./Partials/Plugins/ToastUIEditor/ToastUIEditor";
import BasicCard from "./Partials/Pages/Widgets/BasicCard/BasicCard";
import CardTiles from "./Partials/Pages/Widgets/CardTiles/CardTiles";
import CardTab from "./Partials/Pages/Widgets/CardTab/CardTab";
import Tables from "./Partials/Pages/Tables/Tables";
import Forms from "./Partials/Pages/Forms/Forms";
import PricingTable from "./Partials/Pages/PricingTable/PricingTable";
import ImageGallery from "./Partials/Pages/ImageGallery/ImageGallery";
import SearchPage from "./Partials/Pages/SearchPage/SearchPage";
import Changelog from "./Partials/Pages/Changelog/Changelog";
import Documentation from "./Partials/Pages/Documentation/Documentation";
import AppIndex from "./Partials/Apps/AppIndex/AppIndex";
import PageIndex from "./Partials/Pages/PageIndex/PageIndex";

const Routes = () => {
  return (
    <ReactRoutes>
      {/* <Route exact path="/signin" element={<Signin/>} /> */}
      {/* <Route exact path="/signup" element={<Signup/>} /> */}
      {/* <Route exact path="/password-reset" element={<PasswordReset/>} /> */}
      {/* <Route exact path="/two-step" element={<TwoStep/>} /> */}
      {/* <Route exact path="/lockscreen" element={<Lockscreen/>} /> */}
      {/* <Route exact path="/maintenance" element={<Maintenance/>} /> */}
      {/* <Route exact path="/404" element={<NoPageFound/>} /> */}

      <Route exact path="/" element={<Index/>} />
      <Route exact path="/index" element={<Index/>} />

      <Route exact path="/my-wallet" element={<MyWallet/>} />

      
      {/* <Route exact path="/app" element={<AppIndex/>} /> */}
      <Route exact path="/app/new-campaign" element={<NewCampaign/>} />
      {/* <Route exact path="/app/campaigns-grid" element={<HotCampaigns/>} /> */}
      <Route exact path="/app/all-campaigns" element={<AllCampaigns/>} />
      <Route exact path="/app/hot-campaigns" element={<HotCampaigns/>} />
      <Route exact path="/app/campaign-details" element={<CampaignDetails/>} />
      
      {/* <Route exact path="/app/new-project" element={<NewCampaign/>} />
      <Route exact path="/app/project-grid" element={<Campaigns/>} /> */}


      <Route exact path="/app/my-profile" element={<MyProfile/>} />
      <Route exact path="/app/account-settings" element={<AccountSetting/>} />
      <Route exact path="/app/infuencers" element={<Infuencers/>} />

      
      <Route exact path="/app/invoice" element={<Invoices/>} />


      <Route exact path="/app/user-activity" element={<UserActivity/>} />
      <Route exact path="/app/my-task" element={<MyTasks/>} />
      <Route exact path="/app/my-contact" element={<MyContact/>} />

      

      <Route exact path="/app/analytics" element={<Analytics/>} />
      <Route exact path="/app/clients-list" element={<ClientsList/>} />
      
      {/* <Route exact path="/app/calendar" element={<Calendar/>} /> */}
      {/* <Route exact path="/app/inbox" element={<Inbox/>} />
      <Route exact path="/app/chat" element={<Chat/>} />
      <Route exact path="/app/blog" element={<Blog/>} /> */}


      <Route exact path="/app/filemanager" element={<FileManager/>} />
      <Route exact path="/docs/accordion" element={<Accordion/>} />
      <Route exact path="/docs/alerts" element={<Alerts/>} />
      <Route exact path="/docs/avatar" element={<UserAvatar/>} />
      <Route exact path="/docs/badges" element={<Badges/>} />
      <Route exact path="/docs/breadcrumb" element={<Breadcrumb/>} />
      <Route exact path="/docs/buttons" element={<Buttons/>} />
      <Route exact path="/docs/cards" element={<Cards/>} />
      <Route exact path="/docs/carousel" element={<Carousel/>} />
      <Route exact path="/docs/collapse" element={<Collapse/>} />
      <Route exact path="/docs/dropdowns" element={<Dropdowns/>} />
      <Route exact path="/docs/listgroup" element={<Listgroup/>} />
      <Route exact path="/docs/modal" element={<Modal/>} />
      <Route exact path="/docs/navbar" element={<Navbar/>} />
      <Route exact path="/docs/navstabs" element={<Navstabs/>} />
      <Route exact path="/docs/offcanvas" element={<Offcanvas/>} />
      <Route exact path="/docs/pagination" element={<Pagination/>} />
      <Route exact path="/docs/placeholders" element={<Placeholders/>} />
      <Route exact path="/docs/popovers" element={<PopoversContent/>} />
      <Route exact path="/docs/progress" element={<Progressbar/>} />
      <Route exact path="/docs/spinners" element={<Spinners/>} />
      <Route exact path="/docs/toasts" element={<Toasts/>} />
      <Route exact path="/docs/bootstrap-icon" element={<BootstrapIcon/>} />
      <Route exact path="/docs/flag-icon" element={<CountryFlagsIcon/>} />
      <Route exact path="/docs/fontawesome-icon" element={<FontawesomeIcon/>} />
      <Route exact path="/docs/linear-icon" element={<LinearIcon/>} />
      {/* <Route exact path="/docs/weather-icon" element={<WeatherIcon/>} /> */}
      <Route exact path="/docs/apex" element={<ApexCharts/>} />
      <Route exact path="/docs/peity" element={<PeityCharts/>} />
      <Route exact path="/docs/bootstrap5-tags" element={<Bootstrap5Tags/>} />
      <Route exact path="/docs/datatables" element={<Datatables/>} />
      <Route exact path="/docs/flatpickr" element={<Flatpickr/>} />
      <Route exact path="/docs/inputmask" element={<InputmaskPlugin/>} />
      <Route exact path="/docs/jsvectormap" element={<Jsvectormap/>} />
      <Route exact path="/docs/sortablejs" element={<SortableJS/>} />
      <Route exact path="/docs/sweetalert2" element={<Sweetalert2/>} />
      <Route exact path="/docs/tagify" element={<Tagify/>} />
      <Route exact path="/docs/tiny-slider" element={<Tinyslider/>} />
      <Route exact path="/docs/toast-calendar" element={<ToastUICalendar/>} />
      <Route exact path="/docs/toast-editor" element={<ToastUIEditor/>} />
      <Route exact path="/docs/widgets-basic-card" element={<BasicCard/>} />
      <Route exact path="/docs/widgets-card-tiles" element={<CardTiles/>} />
      <Route exact path="/docs/widgets-card-tab" element={<CardTab/>} />
      <Route exact path="/pages" element={<PageIndex/>} />
      <Route exact path="/pages/table" element={<Tables/>} />
      <Route exact path="/pages/form" element={<Forms/>} />
      {/* <Route exact path="/pages/pricing" element={<PricingTable/>} /> */}
      {/* <Route exact path="/pages/gallery" element={<ImageGallery/>} /> */}
      {/* <Route exact path="/pages/search" element={<SearchPage/>} /> */}
      {/* <Route exact path="/docs/changelog" element={<Changelog/>} /> */}
      <Route exact path="/docs/index" element={<Documentation/>} />
      <Route exact path="/docs" element={<Documentation/>} />
    </ReactRoutes>
  );
};

export default Routes;