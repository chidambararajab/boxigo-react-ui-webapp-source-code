import React from "react";
import "./App.css";
import MyMove from "./Component/MyMove.js";
import Sidebar from "./Component/Sidebar.js";
import MyProfile from "./Component/MyProfile.js";
import GetQuote from "./Component/GetQuote.js";
import LogOut from "./Component/LogOut.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewMore from "./Component/ViewMore";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app_page">
          <Sidebar />
          <Switch>
            <Route path="/myprofile">{<MyProfile />}</Route>
            <Route path="/getquote">{<GetQuote />}</Route>
            <Route path="/logout">{<LogOut />}</Route>
            <Route path="/viewmore">{<ViewMore />}</Route>
            <Route path="/">{<MyMove />}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
