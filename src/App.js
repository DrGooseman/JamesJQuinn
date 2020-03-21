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

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
