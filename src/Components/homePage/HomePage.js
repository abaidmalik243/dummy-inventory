import React, { Component } from "react";
import LeftNavBar from "../leftNavBar/LeftNavBar";
import DashboardLeftContent from "../dashboardLeftContent/DashboardLeftContent";
import DashboardRightContent from "../dashboardRightContent/DashboardRightContent";

class HomePage extends Component {
  render() {
    return (
      <div className="site-main-wrp">
        <LeftNavBar />
        <div className="site-right-main-content">
          <div className="site-main-contnet-inner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h1>Approve</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <DashboardLeftContent />
                <DashboardRightContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
