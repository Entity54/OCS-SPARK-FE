import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'weather-icons/css/weather-icons.css';
import 'prismjs/themes/prism.css';
import '../src/assets/scss/styles.scss';

import { SparkProvider } from '@SparkContext';

import App from './App';




import { NeynarContextProvider, Theme } from "@neynar/react";
import "@neynar/react/dist/style.css";

// import { Inter } from "next/font/google";
// import '@fontsource/inter'; // Import the Inter font
// const inter = Inter({ subsets: ["latin"] });
import '@fontsource/inter/latin.css'; // Import Inter font with latin subset


const NEYNAR_CLIENT_ID = "696821f7-62b7-4b42-ba58-762d7f64030a"; //process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <SparkProvider>


      <NeynarContextProvider
        settings={{
          clientId: NEYNAR_CLIENT_ID || "",
          defaultTheme: Theme.Light,
          eventsCallbacks: {
            onAuthSuccess: () => {},
            onSignout() {},
          },
        }}
      >



          <App />



      </NeynarContextProvider>



      </SparkProvider>
    </BrowserRouter>
  </Provider>
);

