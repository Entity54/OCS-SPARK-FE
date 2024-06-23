import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SparkContext } from '@SparkContext';
// import { useTable, useFilters, useGlobalFilter, usePagination, useSortBy } from 'react-table';
import { TableList } from './Components/ProjectListData';

import DataTable from '../../../../Common/DataTable/DataTable1';
  
import { createCampaign, 
  getAccountInfo,
  getPendingCampaigns,
  getActiveCampaignUIDs,
  getExpiredCampaignUIDs,
  getReadyFroPaymentCampaignUIDs,
  getCompletedCampaignUIDss,
  get_Campaign_Specs,
  get_Campaign_PointMarking,
  get_Campaign_platform_fees,
  get_withdrawable_platform_fees,
  get_Campaign_isActive,
  get_campaignBalances,
  get_isCampaignDistributionComplete,
  get_isCampaignPaymentsComplete,
  ADMIN_withdrawPlatformFees,

  get_Formatted_Campaign_Specs
} from "@Setup_EVM";



const campaign_columns = [
  {
    Header: 'UUID',
    accessor: 'uuid',
  },
  {
    Header: 'Owner',
    accessor: 'owner',
  },
  {
    Header: 'Fid',
    accessor: 'fid',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Budget',
    accessor: 'budget',
  },
  {
    Header: 'Start Date',
    accessor: 'startDate',
  },
  {
    Header: 'End Date',
    accessor: 'endDate',
  },
  {
    Header: 'Progress',
    accessor: 'progress',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];




const ProjectList = () => {

  const { refreshCampaign, lastRefreshTimeStamp, broadcast_ChosenCampaign } = useContext(SparkContext);

  const [pageSize, setPageSize] = useState(10); // Default page size
  const [globalFilter, setGlobalFilter] = useState('');
  const sizeOptions = [10, 25, 50, 100]; // Available size options
   
  const [Table_List, setTable_List] = useState([]);  
  const [dataTT, setDataTT] = useState([]);  
  let Campaign_Table_List = [];

  const get_PendingCampaigns = async () => {
    const pendingCampaigns = await getPendingCampaigns();
    console.log('pendingCampaigns:', pendingCampaigns);
    await get_Campaign_Specs_List(pendingCampaigns);
  }
  const get_ActiveCampaignUIDs = async () => {
    const activeCampaignUIDs = await getActiveCampaignUIDs();
    console.log('activeCampaignUIDs:', activeCampaignUIDs);
    await get_Campaign_Specs_List(activeCampaignUIDs);
  }
  const get_ExpiredCampaignUIDs = async () => {
    const expiredCampaignUIDs = await getExpiredCampaignUIDs();
    console.log('expiredCampaignUIDs:', expiredCampaignUIDs);
    await get_Campaign_Specs_List(expiredCampaignUIDs);
  }
  const get_ReadyFroPaymentCampaignUIDs = async () => {
    const readyFroPaymentCampaignUIDs = await getReadyFroPaymentCampaignUIDs();
    console.log('readyFroPaymentCampaignUIDs:', readyFroPaymentCampaignUIDs);
    await get_Campaign_Specs_List(readyFroPaymentCampaignUIDs);
  }
  const get_CompletedCampaignUIDss = async () => {
    const completedCampaignUIDss = await getCompletedCampaignUIDss();
    console.log('completedCampaignUIDss:', completedCampaignUIDss);
    await get_Campaign_Specs_List(completedCampaignUIDss);
  }


  const get_Campaign_Specs_List = async (arrayOfCampaign_uids) => {
    for (let i = 0; i < arrayOfCampaign_uids.length; i++) {
      const campaign_uid = `${arrayOfCampaign_uids[i]}`;
      // console.log(`campaign_uid: `,campaign_uid);
      const campaignObject = await get_Formatted_Campaign_Specs(campaign_uid);
      // console.log('campaignObject:', campaignObject);
      Campaign_Table_List.push(campaignObject);
    }
  }

  const selectedCampaign = (campaign_uuid) => {
    console.log(`selectedCampaign campaign_uuid: `,campaign_uuid);
    broadcast_ChosenCampaign(campaign_uuid);
  }


  const prepareCampignData = () => {
        const datetimeNow = `${Math.floor(Date.now() / 1000)}`;

        let campaign_data = Table_List.map((data, index) => {
        let progress_percent, ends_in_mins=0, start_in_mins=0;
        const startTime_secs = data.campaign_start_date_secs;
        const endtTime_secs = data.campaign_end_date_secs;

        if (datetimeNow > endtTime_secs)
        {
            progress_percent = 100;
        }
        else if (datetimeNow > startTime_secs)
        {
            const space = endtTime_secs - startTime_secs
            const current_space = datetimeNow - startTime_secs
            progress_percent = Math.min(100,Math.floor(100*(current_space / space)));
            ends_in_mins = Math.floor((endtTime_secs - datetimeNow) / 60);
        } else { 
            progress_percent=0;
            start_in_mins = Math.floor((startTime_secs - datetimeNow) / 60);
        }
        // console.log(`prepareCampignData datetimeNow: `,datetimeNow,`  data.campaign_end_date_secs: `,data.campaign_end_date_secs,`  progress_percent: `,progress_percent);

        return {
          uuid: (<a key={index} href="/app/project-details">{data.campaign_uuid}</a>),
          owner: `${`${(data.campaign_owner).slice(0, 5)}...${(data.campaign_owner).slice(-5)}`}`,   //data.campaign_owner,
          fid: data.campaign_fid,
          title: (
              <Link key={index} to="/app/project-details" onClick = { () => selectedCampaign(data.campaign_uuid) }>
                  {data.campaign_title}
              </Link>
          ),
          budget: data.campaign_budget,
          startDate: data.campaign_start_date,
          endDate: data.campaign_end_date,
          progress: 
          (
            <>
              <small className="text-muted">{progress_percent}%</small>
              <div className="progress" style={{height: "2px"}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: `${progress_percent}%`}} aria-valuenow={datetimeNow} aria-valuemin="0" aria-valuemax={data.campaign_end_date_secs}></div>
              </div>
            </>
          ),
          status: (<span className={`badge ${data.status_c}`}>{data.campaign_state}</span>),
        };
      });
      setDataTT(campaign_data);
  }

   useEffect(() => {
      const retrieveData = async () => {
        Campaign_Table_List = []
        await get_PendingCampaigns();
        await get_ActiveCampaignUIDs();
        await get_ExpiredCampaignUIDs();
        await get_ReadyFroPaymentCampaignUIDs();
        await get_CompletedCampaignUIDss();
        setTable_List(Campaign_Table_List);
        // console.log(`Campaign_Table_List: `,Campaign_Table_List);
        console.log(`retrieveData lastRefreshTimeStamp: `,new Date(lastRefreshTimeStamp));
      }
      retrieveData();
    }, [lastRefreshTimeStamp]);  


    useEffect(() => {
      if (Table_List.length>0) prepareCampignData();
      // refreshCampaign(); //UNCOMMNENT THIS TO KEEP REFRESHING
      console.log(`refreshCampaign lastRefreshTimeStamp: `,new Date(lastRefreshTimeStamp));
    }, [Table_List]); 


 
    const handlePageSizeChange = (e) => {
      const newSize = parseInt(e.target.value);
      setPageSize(newSize);
    };


//#region columns
    // const columns = [
    //     {
    //       Header: 'Project Name',
    //       accessor: 'projectName',
    //     },
    //     {
    //       Header: 'Assign',
    //       accessor: 'assign',
    //     },
    //     {
    //       Header: 'Start Date',
    //       accessor: 'startDate',
    //     },
    //     {
    //       Header: 'Deadline',
    //       accessor: 'deadline',
    //     },
    //     {
    //       Header: 'Task',
    //       accessor: 'task',
    //     },
    //     {
    //       Header: 'Progress',
    //       accessor: 'progress',
    //     },
    //     {
    //       Header: 'Status',
    //       accessor: 'status',
    //     },
    //     {
    //       Header: 'Action',
    //       accessor: 'action',
    //     },
    //   ];
//#endregion columns

//#region dataT
    // let dataT = TableList.map((data, index) => {
    //   return {
    //     projectName: (<a key={index} href="/app/project-details">{data.project_name}</a>),
    //     assign: (
    //       <>
    //         <div className="avatar-list avatar-list-stacked d-flex ps-2">
    //         {data.assign.map((img, index) => {
    //           return (
    //           <img key={index} className="avatar sm rounded-circle" src={img} data-bs-toggle="tooltip" title="Avatar" alt={`Avatar ${index}`} />
    //           )})}
    //         </div>
    //       </>
    //     ),
    //     startDate: data.start_date,
    //     deadline: data.deadline,
    //     task: data.task,
    //     progress: (
    //       <>
    //         <small className="text-muted">{data.valuenow} / {data.valuemax}</small>
    //         <div className="progress" style={{height: "2px"}}>
    //             <div className="progress-bar bg-primary" role="progressbar" style={{width: `${data.valuenow}%`}} aria-valuenow={data.valuenow} aria-valuemin="0" aria-valuemax={data.valuemax}></div>
    //         </div>
    //       </>
    //     ),
    //     status: (<span className={`badge ${data.status_c}`}>{data.status}</span>),
    //     // action: (
    //     //   <>
    //     //     {/* {{> widgets/card-ellipsis }} */}
    //     //   </>
    //     // ),
    //   };
    // });

    // const tableInstance = useTable(
    //   {
    //     columns,
    //     data: dataT,
    //     initialState: { pageIndex: 0, pageSize: 10 }, // Initial pagination settings
    //   },
    //   useFilters, // Enables filtering
    //   useGlobalFilter, // Enables global search
    //   useSortBy, // Enables sorting
    //   usePagination // Enables pagination
    // );
  
    // const {
    //   state,
    //   // setGlobalFilter,
    //   // setPageSize,
    // } = tableInstance;
  
    // const { pageIndex } = state;
//#endregion dataT


  return (
      // <div className="px-4 py-3">
      <div className="px-4 py-3 page-body">

        {/* <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            Show{' '}
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="form-select form-select-sm ms-2"
          >
            {sizeOptions.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
            &nbsp;entries
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Search:</span>
            <input
              value={globalFilter || ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="form-control form-control-sm"
            />
          </div>
        </div> */}


        {/* <DataTable columns={columns} data={dataT} /> */}
        {
          Table_List.length>0?
          (
            <DataTable columns={campaign_columns} data={dataTT} />
          )

          :
          (
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )  
        }


        {/* <div className="d-flex justify-content-between align-items-center">
          <div>
            Showing 1 to{' '} 10 of {dataT.length} entries
          </div>
          <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
            <ul className="pagination">
              <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
              </li>
              <li className="paginate_button page-item active">
                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
              </li>

              <li className="paginate_button page-item active">
                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabIndex="0" className="page-link">2</a>
              </li>
              <li className="paginate_button page-item next disabled" id="DataTables_Table_0_next">
                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabIndex="1" className="page-link">Next</a>
              </li>
            </ul>
          </div>
        </div> */}



      </div>
    )
}

export default ProjectList