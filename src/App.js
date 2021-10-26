import React from 'react';
// @ts-ignore

import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Route, Switch,Link,useLocation} from 'react-router-dom';
import Sprint from './component/sprint';
import MainPage from './mainPage';



export default function App(props) {
   
        return (<div>
        
          <BrowserRouter>
            <Switch>
             <Route exact path="/">
              <MainPage/>
             </Route>  
             <Route path="/mainPage">
               <MainPage/>
             </Route> 
              <Route path="/sprint">
              {props.pokemonName}
               <Sprint/>
             </Route> 

            </Switch>
        </BrowserRouter>
        </div>);
}
