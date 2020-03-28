import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Games from "./pages/Games";
import WebApps from "./pages/WebApps";
import Resume from "./pages/Resume";
import SideBarContainer from "./components/SideBarContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBarContainer />
        {/* <SideBar /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/games" exact>
            <Games />
          </Route>
          <Route path="/webapps" exact>
            <WebApps />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
