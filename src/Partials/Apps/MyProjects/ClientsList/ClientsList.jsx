// import React from 'react'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { SparkContext } from '@SparkContext';

import { 
    get_SquawkBoxLength,
    get_lastProcessedIndex,
    get_SquawkBoxElementRange,
    getUserInfo_withFids_Bulk
  } from "@Setup_EVM";


 
const ClientsList = () => {

    const { refreshCampaign, lastRefreshTimeStamp } = useContext(SparkContext);

    const [last_ProcessedIndex, setLast_ProcessedIndex]   = useState(-1);
    const [arrayOfSquawkObjects, setArrayOfSquawkObjects]   = useState([]);

    const [fids, setFids]   = useState([]);
    const [fids_urls, setFids_Urls]   = useState([]);


    const get_pfpForFid = (fid) => {
        const index = fids.indexOf(fid);
        if (index > -1) {

            console.log(` *** ${fid} fids_urls[index]: ${fids_urls[index]}`);
            return fids_urls[index];
        }
        return "";
    }

    const getSquawkBoxLength = async () => {
        const squawkBoxLength = await get_SquawkBoxLength();
        console.log(`squawkBoxLength: ${squawkBoxLength}`);
        return squawkBoxLength;
    }

    const getLastProcessedIndex = async () => {
        const lastProcessedIndex = await get_lastProcessedIndex();
        console.log(`lastProcessedIndex: ${lastProcessedIndex}`);
        return lastProcessedIndex;
    }

    const getSquawkBoxElementRange = async (end) => {
        const start = last_ProcessedIndex + 1;
        
        const newArrayOfSquawkObjects = await get_SquawkBoxElementRange(start, end);
        // console.log(`getSquawkBoxElementRange  newArrayOfSquawkObjects: `,newArrayOfSquawkObjects);

        let new_fids = [];
        for (let i = 0; i < newArrayOfSquawkObjects.length; i++) {
            const element = newArrayOfSquawkObjects[i];
            const fid = Number(element.infuencerFid);

            const temp_fids = [...fids, ...new_fids];

            if (!temp_fids.includes(fid)) {
                new_fids.push(fid);
            }
        }

        if (new_fids.length > 0) {
            const new_users_pfp_urls_array = await getUserInfo_withFids_Bulk(new_fids);
            console.log(`new_users_pfp_urls_array: `,new_users_pfp_urls_array);

            console.log(`new_fids: `,new_fids);

            setFids([...fids, ...new_fids]);
            setFids_Urls([...fids_urls, ...new_users_pfp_urls_array]);
        }


        setArrayOfSquawkObjects([...arrayOfSquawkObjects, ...newArrayOfSquawkObjects]);
        setLast_ProcessedIndex(end);
    }


    useEffect(() => {

        const retrieveData = async () => {
            const squawkBoxLength = await getSquawkBoxLength();
            const lastProcessedIndex = await getLastProcessedIndex();
            if (squawkBoxLength > 0 && lastProcessedIndex > last_ProcessedIndex ) {
                await getSquawkBoxElementRange(lastProcessedIndex);
            }

            console.log(`Refreshing soon...`);
            refreshCampaign(); //UNCOMMNENT THIS TO KEEP REFRESHING
        }
        retrieveData();
    }, [lastRefreshTimeStamp]);  



  return (
        <div className="px-4 py-3 page-body">

            {
            arrayOfSquawkObjects.length>0 ? 
            (
            <ul className="row g-1 li_animate list-unstyled" id="MyClients">

                {arrayOfSquawkObjects.map((data, index) => {
                return(
                <li key={index} className="col-12">
                    <div className="bg-dark p-3 rounded-4 d-flex align-items-center flex-column flex-md-row">
                        
                        <img className="avatar lg rounded-circle img-thumbnail ms-auto me-auto shadow" src={get_pfpForFid(Number(data.infuencerFid))} alt=""/>
                        
                        <div className="ms-md-2 ms-lg-3 text-md-start text-center w-100 mt-4 mt-md-0">
                            <div className="row g-0 align-items-center">
                               
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 mb-3 mb-md-0">
                                    <h6 className="mb-1">Influencer {data.infuencerFid}</h6>
                                    <span className="text-muted">Followers {data.infuencerFollowers}</span>
                                </div>
                                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 text-center">
                                        <h6 className="mb-1">{data.squwak_message}</h6>
                                        <span className="small text-muted">Farcaster Action</span>
                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 text-center">
                                        <h6 className="mb-1">{data.nonce}</h6>
                                        <span className="small text-muted">Nonce</span>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 text-center">
                                        <h6 className="mb-1">{data.timestamp}</h6>
                                        <span className="small text-muted">Timestamp</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>
                )})}

            </ul>
            )
            :
            (
                <div>Loading...</div>
            )
            }

        </div>
    )
}

export default ClientsList