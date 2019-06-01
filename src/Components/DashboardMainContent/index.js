/*eslint-disable */
import React from 'react'

const DashboardMainContent = () => {
    return (
        <div className="col-lg-12">
            <div className="dash-main-content">
                <div className="row" style={{ padding: '20px' }}>
                    <div className="col-md-4">
                        <div className="dash-main-content-search  bdr"><br />
                            <div className="col-md-12 input-container-search">
                                <input type="text" placeholder="Search" className="form-control " />
                                <span className="fa fa-search"></span>
                            </div>
                            <hr />

                            {/* P1 */}
                            <div class="panel-group" id="accordion">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <span class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Sales Products</a>
                                            <span className="fa fa-angle-down"></span>
                                        </span>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            {/* P1 CH-1 */}
                                            <div class="panel-group" id="accordion11">
                                                <div class="panel panel-default ">
                                                    <div class="panel-heading child">
                                                        <span class="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion11" href="#collapse11">Enterprice Solutions</a>
                                                            <span className="fa fa-caret-down"></span>
                                                        </span>
                                                    </div>
                                                    <div id="collapse11" class="panel-collapse collapse in">
                                                        <div class="panel-body child">
                                                            <ul>
                                                                <li>Platinum Tier</li>
                                                                <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                            </ul>
                                                            <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end CH 1st */}
                                            {/* P1 CH-2 */}
                                            <div class="panel-group" id="accordion12">
                                                <div class="panel panel-default ">
                                                    <div class="panel-heading child">
                                                        <span class="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion12" href="#collapse12">Government Solutions</a>
                                                            <span className="fa fa-caret-down"></span>
                                                        </span>
                                                    </div>
                                                    <div id="collapse12" class="panel-collapse collapse in">
                                                        <div class="panel-body child">
                                                            <ul>
                                                                <li>Platinum Tier</li>
                                                                <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                            </ul>
                                                            <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end CH 2 */}
                                            {/* P1 CH-3 */}
                                            <div class="panel-group" id="accordion13">
                                                <div class="panel panel-default ">
                                                    <div class="panel-heading child">
                                                        <span class="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion13" href="#collapse13">Small Business</a>
                                                            <span className="fa fa-caret-down"></span>
                                                        </span>
                                                    </div>
                                                    <div id="collapse13" class="panel-collapse collapse in">
                                                        <div class="panel-body child">
                                                            <ul>
                                                                <li>Platinum Tier</li>
                                                                <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                            </ul>
                                                            <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end CH 3 */}
                                        </div>
                                    </div>
                                </div><hr />
                                {/* end P1 */}
                                {/* P2 */}
                                <div class="panel-group" id="accordion2">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <span class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion2" href="#collapse2">Marketing Products</a>
                                                <span className="fa fa-angle-down"></span>
                                            </span>
                                        </div>
                                        <div id="collapse2" class="panel-collapse collapse in">
                                            <div class="panel-body">
                                                {/* P1 CH-1 */}
                                                <div class="panel-group" id="accordion21">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion21" href="#collapse21">Enterprice Solutions</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse21" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end CH 1st */}
                                            {/* P1 CH-2 */}
                                            <div class="panel-group" id="accordion22">
                                                <div class="panel panel-default ">
                                                    <div class="panel-heading child">
                                                        <span class="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion22" href="#collapse22">Government Solutions</a>
                                                            <span className="fa fa-caret-down"></span>
                                                        </span>
                                                    </div>
                                                    <div id="collapse22" class="panel-collapse collapse in">
                                                        <div class="panel-body child">
                                                            <ul>
                                                                <li>Platinum Tier</li>
                                                                <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                            </ul>
                                                            <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end CH 2 */}
                                            {/* P1 CH-3 */}
                                            <div class="panel-group" id="accordion23">
                                                <div class="panel panel-default ">
                                                    <div class="panel-heading child">
                                                        <span class="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion23" href="#collapse23">Small Business</a>
                                                            <span className="fa fa-caret-down"></span>
                                                        </span>
                                                    </div>
                                                    <div id="collapse23" class="panel-collapse collapse in">
                                                        <div class="panel-body child">
                                                            <ul>
                                                                <li>Platinum Tier</li>
                                                                <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                            </ul>
                                                            <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end CH 3 */}
                                        </div>
                                    </div>
                                </div><hr />
                                {/* end P2 */}
                                {/* P3 */}
                                <div class="panel-group" id="accordion3">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <span class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion3" href="#collapse3">Amazing Products</a>
                                                <span className="fa fa-angle-down"></span>
                                            </span>
                                        </div>
                                        <div id="collapse3" class="panel-collapse collapse in">
                                            <div class="panel-body">
                                                {/* P1 CH-1 */}
                                                <div class="panel-group" id="accordion31">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion31" href="#collapse31">Enterprice Solutions</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse31" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end CH 1st */}
                                                {/* P3 CH-2 */}
                                                <div class="panel-group" id="accordion32">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion32" href="#collapse32">Government Solutions</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse32" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end CH 2 */}
                                                {/* P3 CH-3 */}
                                                <div class="panel-group" id="accordion33">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion33" href="#collapse33">Small Business</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse33" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end CH 3 */}
                                            </div>
                                        </div>
                                    </div>
                                </div><hr />
                                {/* end P3 */}
                                {/* P4 */}
                                <div class="panel-group" id="accordion4">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <span class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion4" href="#collapse4">Xass Products</a>
                                                <span className="fa fa-angle-down"></span>
                                            </span>
                                        </div>
                                        <div id="collapse4" class="panel-collapse collapse in">
                                            <div class="panel-body">
                                                {/* P1 CH-1 */}
                                                <div class="panel-group" id="accordion41">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion41" href="#collapse41">Enterprice Solutions</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse41" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end CH 1st */}
                                                {/* P1 CH-2 */}
                                                <div class="panel-group" id="accordion42">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion42" href="#collapse42">Government Solutions</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse42" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end CH 2 */}
                                                {/* P1 CH-3 */}
                                                <div class="panel-group" id="accordion43">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading child">
                                                            <span class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion43" href="#collapse43">Small Business</a>
                                                                <span className="fa fa-caret-down"></span>
                                                            </span>
                                                        </div>
                                                        <div id="collapse43" class="panel-collapse collapse in">
                                                            <div class="panel-body child">
                                                                <ul>
                                                                    <li>Platinum Tier</li>
                                                                    <li style={{ color: '#35add9' }}> Obsidian 2.0</li>
                                                                </ul>
                                                                <div className="addProduct"><span className="fa fa-plus" /> &nbsp;New Product</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end CH 3 */}
                                            </div>
                                        </div>
                                    </div>
                                </div><hr />
                                {/* end P4 */}

                            </div>
                            {/*  */}

                        </div>
                    </div>
                    <div className="col-md-8 bdr" style={{ paddingBottom: '100px' }}>
                        <div className="row d-left-top-content">
                            <div className="col-md-10 col-sm-10"><h4>Product Detail - Obsidian 2.0</h4></div>
                            <div className="col-md-2 col-sm-2" style={{ color: '#6c7384' }}><i className="fa fa-edit fa-xs" />&nbsp;Edit</div>
                        </div><br />
                        <h5 className="description">Description</h5>
                        <p>Obsidian 2.0 is our next- generation, context, customer focused, locally sourced, artisanally- handcrafted, grass-fed, sales solution. By exploiting the meta-commercial synergies present in your market, Obsidian 2.0 will make you and your shareholders a ton of money. The best money. And believe me folks, I know money</p>
                        <h5 className="description">Content</h5>
                        <div className="col-md-6 input-container-search">
                            <input type="text" placeholder="Search" className="form-control " />
                            <span className="fa fa-search"></span>
                        </div>
                        <div className="content-detail">
                            <span>Security Feacture Deep Drive - Text Approved, waiting an Video Approval</span>
                            <p>Security Warning - Marked as Unnecessessary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMainContent
