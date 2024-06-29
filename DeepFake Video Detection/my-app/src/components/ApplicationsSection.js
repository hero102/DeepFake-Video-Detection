import React from 'react';
import app1 from '../images/topics/undraw_Remote_design_team_re_urdx.png'
import app2 from '../images/topics/colleagues-working-cozy-office-medium-shot.png'
import app3 from '../images/topics/undraw_Remote_design_team_re_urdx.png'
import '../css/bootstrap-icons.css';
import '../css/bootstrap.min.css';
import './style.css';


function ApplicationsSection() {
  return (
    <section className="explore-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="">Applications</h2>
          </div>
        </div>
      </div>
      
      <div className="container bg-blue">
        <div className="row ">
          <div className="col-12">
            <div className="" id="myTabContent">
              <div className="tab-pane fade show bg-blue active" role="tabpanel" aria-labelledby="design-tab" tabIndex="0">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12  shadow-lg ">
                    <div className="custom-block">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Content Verification</h5>
                            <p className="mb-0">Safeguards the integrity of media content by verifying its authenticity, ensuring only genuine material reaches the public, bolstering trust in news sources.</p>
                          </div>
                        </div>
                        <img src={app1} className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block  shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Combat Misinformation</h5>
                            <p className="mb-0">Combat misinformation by detecting and flagging manipulated media content, safeguarding journalistic integrity and promoting informed discourse.</p>
                          </div>
                        </div>
                        <img src={app2} className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block  shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Source Authentication</h5>
                            <p className="mb-0">Authenticate sources of media, ensuring transparency and reliability in news reporting by confirming the origin and integrity of content before publication.</p>
                          </div>
                        </div>
                        <img src={app3} className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add similar blocks for other tabs */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationsSection;