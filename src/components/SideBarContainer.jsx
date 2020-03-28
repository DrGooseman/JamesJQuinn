import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import SideBar from "./SideBar";

function SideBarContainer() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <React.Fragment>
      <div className="App-header-mobile">
        {/* <Accordion defaultActiveKey="0" className="App-header-mobile">
          <div>
            <Button></Button>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <SideBar />
            </Accordion.Collapse>
          </div>
        </Accordion> */}

        <button
          className={
            isVisible
              ? "App-header-mobile-button notVis"
              : "App-header-mobile-button"
          }
          onClick={() => setIsVisible(true)}
        >
          <i class="fa fa-bars"></i>
        </button>
        {isVisible && (
          <div
            onClick={() => setIsVisible(false)}
            className="App-header-mobile-background"
          ></div>
        )}
        <div
          className={
            isVisible
              ? "App-header-mobile-body slideIn"
              : "App-header-mobile-body slideOut"
          }
        >
          <SideBar />
        </div>
      </div>
      <div className="App-header-desktop">
        <SideBar />
      </div>
    </React.Fragment>
  );
}

export default SideBarContainer;
