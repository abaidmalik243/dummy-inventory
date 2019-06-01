import React from 'react'

const DashboardRightContent = () => {
    return (
        <div className="col-lg-6">
        <div className="dash-main-left-content">
            <div className="d-left-top-content">
                <h4>Written Content Approval <span>Review, Edit, Approve</span></h4>

            </div>

            <div className="mission-inner-text">
                <div className="m-top-text">
                    <h3>Company Mission <span>What is the mission of your company?</span></h3>
                </div>
                <div className="older-v">
                    <h4>Old Version</h4>
                    <div className="v-inner-contnet">
                        <p>This is where an example mission statement would go. This is the old version of the <br/>
                            mission statement.</p>
                    </div>

                </div>
                <div className="older-v upd-v">
                    <h4>Updated Version</h4>
                    <div className="v-inner-contnet">
                        <p>This is where an example mission statement would go. This is the old version of the <br/>
                            mission statement.</p>
                    </div>

                </div>
                <div className="buttons-list">
                    <div className="button-list-wrp">
                        <div className="sigle-btn">
                            <div className="s-iner-btn">
                                <button><img src="assets/img/b-1.svg" alt="" />Revise</button>
                            </div>
                        </div>
                        <div className="sigle-btn">
                            <div className="s-iner-btn">
                                <button><img src="assets/img/b-2.svg" alt="" />Edit</button>
                            </div>
                        </div>
                        <div className="sigle-btn">
                            <div className="s-iner-btn">
                                <button><img src="assets/img/b-3.svg" alt="" />Approve</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-blk">
                    <h4>Update Comments</h4>
                    <textarea name="" id="" cols="30" rows="10" placeholder="These are example comments where a comment would go. "></textarea>
                </div>
                <div className="step-bar">
                    <div className="step-bar-list">
                        <div className="sigle-tep-bar-lst active-stp">
                            <div className="stp-blk">
                                <span>STEP 1</span>
                            </div>

                        </div>
                        <div className="sigle-tep-bar-lst">
                            <span>STEP 2</span>
                        </div>
                        <div className="sigle-tep-bar-lst">
                            <span>STEP 3</span>
                        </div>
                        <div className="sigle-tep-bar-lst">
                            <span>STEP 4</span>
                        </div>
                        <div className="sigle-tep-bar-lst">
                            <span>STEP 5</span>
                        </div>
                        <div className="sigle-tep-bar-lst">
                            <span>STEP 6</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DashboardRightContent
