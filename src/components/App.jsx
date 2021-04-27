import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router-dom";
import Route from "react-router-dom/Route";
import Landing from "./Landing"
import Footer from "./Footer";
import Timeline from "./Timeline";
import events from "./events";
import Leadership from "./Leadership";

function App(){

    return(
       
        <Router>
        <Switch>
        <div>
        <Route path = "/" exact strict render = {props =>
        <div>
        <Landing></Landing>
        <Footer></Footer>
        </div>}/>        
        
         <Route path = "/about" exact strict render = {props =>
             <div>
        <Timeline events = {events}></Timeline>   
        <Leadership></Leadership>   
        </div>}>
        </Route>
        </div>
        </Switch>
        </Router>
       
    );
}



export default App;
