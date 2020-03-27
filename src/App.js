import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Games from "./pages/Games";
import WebApps from "./pages/WebApps";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
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
