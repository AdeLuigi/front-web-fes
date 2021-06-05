import React from "react";
import ReactDOM from "react-dom";
import './style.css';

import JobList from "./JobList";
import Login from './screens/Login';
import App from './App'

ReactDOM.render(
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <App />
    </>
, document.getElementById("root"));
