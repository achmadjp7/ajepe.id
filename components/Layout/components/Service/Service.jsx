import React from 'react';

export default function Service(){
    return (
      <>
        <section id="services" className="section-image light bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Bring your business to online .</h2>
                <p>
                  We create <strong className="light">beautiful</strong> &{" "}
                  <strong className="light">functional</strong> websites for
                  small business. <br />
                  Bellow are a few services we provide :
                </p>
              </div>
              <div className="col-lg-6">
                <div className="progress-bar">
                  <h4>Website Development</h4>
                  <div>
                    <div data-progress="95">
                      <span
                        className="counter"
                        data-to="95"
                        data-speed="2000"
                        data-unit="%"
                      >
                        95%
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="space-sm" />
                <div className="progress-bar">
                  <h4>Logo Design</h4>
                  <div>
                    <div data-progress="80">
                      <span
                        className="counter"
                        data-to="80"
                        data-speed="2000"
                        data-unit="%"
                      >
                        80%
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="space-sm" />
                <div className="progress-bar">
                  <h4>IT Solutions</h4>
                  <div>
                    <div data-progress="70">
                      <span
                        className="counter"
                        data-to="70"
                        data-speed="2000"
                        data-unit="%"
                      >
                        70%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-base section-top-overflow section-full-width-left">
          <div className="container">
            <hr className="space-lg" />
            <div
              className="tab-box tab-icon tab-vertical"
              data-tab-anima="fade-right"
            >
              <ul className="tab-nav">
                <li className="active">
                  <a href="#">
                    <i className="im-speach-bubbledialog"></i>First discussion
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <i className="im-monitor-analytics"></i>Requirements
                    analysis, Timeline and cost estimation
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <i className="im-retouching"></i>The design, conception, and
                    planning
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <i className="im-coding"></i>The development
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <i className="im-eye-scan"></i>The testing phase
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <i className="im-paper-plane"></i>Launch
                  </a>
                </li>
              </ul>
              <div className="panel active fade-right tab-panel">
                <div
                  className="grid-list"
                  data-columns="3"
                  data-columns-md="2"
                  data-columns-xs="1"
                >
                  <img
                    className="serve"
                    src="/assets/images/services/meeting.svg"
                    alt=""
                  />
                  <p>
                    We hold discussions with clients to find out what they need,
                    so that in the future we can easily provide what clients
                    need for their business.
                  </p>
                </div>
              </div>
              <div className="panel fade-right tab-panel">
                <div
                  className="grid-list"
                  data-columns="3"
                  data-columns-md="2"
                  data-columns-xs="1"
                >
                  <img
                    className="serve"
                    src="/assets/images/services/timeline.svg"
                    alt=""
                  />
                  <p>
                    Analyze what requirements are needed to build a project. And
                    determine the estimated time and cost required to complete a
                    project.
                  </p>
                </div>
              </div>
              <div className="panel fade-right tab-panel">
                <div
                  className="grid-list"
                  data-columns="3"
                  data-columns-md="2"
                  data-columns-xs="1"
                >
                  <img
                    className="serve"
                    src="/assets/images/services/analyst.svg"
                    alt=""
                  />
                  <p>
                    Determine the design, concept and planning, to make it
                    easier for users to use the application.
                  </p>
                </div>
              </div>
              <div className="panel fade-right tab-panel">
                <div
                  className="grid-list"
                  data-columns="3"
                  data-columns-md="2"
                  data-columns-xs="1"
                >
                  <img
                    className="serve"
                    src="/assets/images/services/development.svg"
                    alt=""
                  />
                  <p>
                    Our team is people who have more than 9 years experience in
                    their fields, and have worked on many projects. We build
                    applications with a solid and professional teamwork.
                  </p>
                </div>
              </div>
              <div className="panel fade-right tab-panel">
                <div
                  className="grid-list"
                  data-columns="3"
                  data-columns-md="2"
                  data-columns-xs="1"
                >
                  <img
                    className="serve"
                    src="/assets/images/services/testing.svg"
                    alt=""
                  />
                  <p>
                    Before the application is launched, we perform various tests
                    to ensure the application is running as it should.
                  </p>
                </div>
              </div>
              <div className="panel fade-right tab-panel">
                <div
                  className="grid-list"
                  data-columns="3"
                  data-columns-md="2"
                  data-columns-xs="1"
                >
                  <img
                    className="serve"
                    src="/assets/images/services/launch.svg"
                    alt=""
                  />
                  <p>
                    Hooray, congratulations, your application has been launched,
                    and it's time for you to feel the various benefits of having
                    your own website. User trust will increase if you or your
                    company have an official website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}