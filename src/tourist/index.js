import React from 'react';
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavigationTopbar from "./navigation-topbar";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import AboutComponent from "./about";
import LoginComponent from "./login";

import locationReducer from "./reducers/location-reducer";
import userReducer from "./reducers/user-reducer";


const store = configureStore(
  {reducer: {locations: locationReducer, users: userReducer}});

function Tourist() {

  return (
    <Provider store={store}>
      <div><NavigationTopbar/></div>
      <div className="container">
        <div className="row">
            <div className="col-2 mt-4">
              <NavigationSidebar/>
            </div>
            <div className="col-8 mt-2">
              <HomeComponent/>
              {/* <AboutComponent/> */}
            </div>
            <div className="col-2 mt-2">
              <LoginComponent/>
            </div>
        </div>
      </div>
    </Provider>

  );
 
  }
  

export default Tourist;
