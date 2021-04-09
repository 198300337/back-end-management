import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.min.css'
import './index.css';
import App from './App';


ReactDOM.render(
  <Router><App /></Router>
  , document.getElementById('root')
);

