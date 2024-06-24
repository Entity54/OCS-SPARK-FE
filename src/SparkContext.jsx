// ThemeContext.js
import React, { createContext, useState } from 'react';

const SparkContext = createContext();

const SparkProvider = ({ children }) => {

  const [contextAccount, setContextAccount] = useState('');
  const [chosenCampaign, setChosenCampaign] = useState('');
  const [lastRefreshTimeStamp, setLastRefreshTimeStamp] = useState(0);

  const [chosenInfuencerFid, setChosenInfuencerFid] = useState('');

  const refreshCampaign = () => {
    console.log(`1 lastRefreshTimeStamp: ${new Date(lastRefreshTimeStamp) } NOW: ${new Date()}`);
    setTimeout(() => {
      setLastRefreshTimeStamp(Date.now());
      console.log(`2 lastRefreshTimeStamp: ${new Date(lastRefreshTimeStamp) } NOW: ${new Date()}`);
    }, 30000);
  };


  const broadcast = (newAccount) => {
    setContextAccount(newAccount);
  };

  const broadcast_ChosenCampaign = (campaign_uuid) => {
    setChosenCampaign(campaign_uuid);
  };

  const broadcast_ChosenInfuencerFid = (fid) => {
    setChosenInfuencerFid(fid);
  };


  return (
    <SparkContext.Provider value={{ contextAccount, broadcast, 
        refreshCampaign, lastRefreshTimeStamp, 
        broadcast_ChosenCampaign, chosenCampaign,  
        broadcast_ChosenInfuencerFid, chosenInfuencerFid
      }}
    >
      {children}
    </SparkContext.Provider>
  );

};

export { SparkContext, SparkProvider };
