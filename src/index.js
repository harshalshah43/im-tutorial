import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase =require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBt9GsVN77xgzdQnNXdJFKub3inRn68xSo",
    authDomain: "im-tutorial-afcb5.firebaseapp.com",
    databaseURL: "https://im-tutorial-afcb5.firebaseio.com",
    projectId: "im-tutorial-afcb5",
    storageBucket: "im-tutorial-afcb5.appspot.com",
    messagingSenderId: "1009237367443",
    appId: "1:1009237367443:web:938c037ab1679de5240b66",
    measurementId: "G-960K8P3Q4M"
});

const routing =(
  <Router>
    <div id ='routing-container'> 
    <Route path='/login' component={LoginComponent}></Route>
    <Route path='/signup' component={SignupComponent}></Route>
    <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>

);

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
