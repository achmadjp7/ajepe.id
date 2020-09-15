import React from 'react';

export default function Footer() {
    return (
      <>
        <i className="scroll-top-btn scroll-top show"></i>
        <footer className="footer-parallax light">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h4>Company and team</h4>
                <div className="menu-inner menu-inner-vertical">
                  <ul>
                    <li>
                      <a href="http://nabatis.com/">Company details and team</a>
                    </li>
                    <li>
                      <a href="#">News and blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <h4>Help and support</h4>
                <div className="menu-inner menu-inner-vertical">
                  <ul>
                    <li>
                      <a href="#">Partners</a>
                    </li>
                    <li>
                      <a href="#">Privacy and terms</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 list-news">
                <h4>Latest News or Blog</h4>
                <div className="row op-7">
                  <div className="col-2">
                    <img
                      className="thumb-news"
                      src="/assets/images/square.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <a href="#">
                      Lorem ipsum dolor sit amet. no sea takimata sanctus est
                      Lorem ipsum dolor sit amet
                    </a>
                  </div>
                </div>
                <div className="row op-7">
                  <div className="col-2">
                    <img
                      className="thumb-news"
                      src="/assets/images/square.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <a href="#">
                      Lorem ipsum dolor sit amet. no sea takimata sanctus est
                      Lorem ipsum dolor sit amet
                    </a>
                  </div>
                </div>
                <div className="row op-7">
                  <div className="col-2">
                    <img
                      className="thumb-news"
                      src="/assets/images/square.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <a href="#">
                      Lorem ipsum dolor sit amet. no sea takimata sanctus est
                      Lorem ipsum dolor sit amet
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <h4>Follow us</h4>
                <div className="icon-links icon-social icon-links-grid social-colors">
                  <a className="facebook">
                    <i className="icon-facebook"></i>
                  </a>
                  <a className="twitter">
                    <i className="icon-twitter"></i>
                  </a>
                  <a className="linkedin">
                    <i className="icon-linkedin"></i>
                  </a>
                  <a className="youtube">
                    <i className="icon-youtube"></i>
                  </a>
                  <a className="instagram">
                    <i className="icon-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bar">
            <div className="container">
              <span>
                © Codrop LTD 2019. Codrop is a powerful Landing Page App
                Template built with{" "}
                <a target="_blank" href="https://themekit.dev/code/">
                  Themekit
                </a>{" "}
                by the{" "}
                <a target="_blank" href="https://schiocco.com/">
                  Schiocco
                </a>{" "}
                Team.{" "}
              </span>
              <span>
                <img src="/assets/images/logo/logo-light.svg" />
              </span>
            </div>
          </div>
        </footer>
      </>
    );
}