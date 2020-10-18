//Main JS file in this project

import React from 'react';
import ReactDOM from 'react-dom';

//import BrowserRouter for routing
import { BrowserRouter } from 'react-router-dom'

import App from './app.js';

///Using for Modal (react-tostify)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/////
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import "./css/open-iconic-bootstrap.min.css";
import "./css/animate.css";
import "./css/owl.theme.default.min.css";
import "./css/magnific-popup.css";
import "./css/aos.css";
import "./css/ionicons.min.css";
import "./css/jquery.timepicker.css";
import "./css/flaticon.css";
import "./css/icomoon.css";



ReactDOM.render(
    //Making BrowserRouter wrappe App it enalbe app to access BOM
    <BrowserRouter>
    <ToastContainer/>
        <App />
    </BrowserRouter>
    , document.querySelector("#root1"));
