import React, { Component } from "react";
import LeftNavBar from "../leftNavBar/LeftNavBar";
import DashboardLeftContent from "../dashboardLeftContent/DashboardLeftContent";
import DashboardRightContent from "../dashboardRightContent/DashboardRightContent";
import DashboardMainContent from "../DashboardMainContent";

class HomePage extends Component {
    render() {
        return (
            <div className="site-main-wrp">
                <LeftNavBar />
                <div className="site-right-main-content">
                    <div className="site-main-contnet-inner">
                        <div className="container-fluid">
                            <div className="row" style={{ marginBottom: '5px' }}>
                                <div className="col-md-6">
                                    <div className="section-title">
                                        <span>Manage Product Inventory</span>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 alignTopbarCol">
                                    <div className="newProductCategory"><span className="fa fa-plus" />&nbsp;New Product Category</div>
                                </div>
                                <div className="col-md-2 col-sm-4 alignTopbarCol">
                                    <div className="import"><span className="fa fa-arrow-to-top" />&nbsp;&nbsp;Import from CSV</div>
                                </div>
                                <div className="col-md-2 col-sm-4 alignTopbarCol">
                                    <div className="import"><span className="fa fa-arrow-to-top" />&nbsp;Import from sales force</div>
                                </div>
                            </div>
                            <div className="row">

                                <DashboardMainContent />
                            </div>
                            {/* <div className="row">
                                <DashboardLeftContent />
                                <DashboardRightContent />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
