import React from 'react';

export default function Navbar() {
    return (
      <>
        <div id="preloader"></div>
        <nav
          className="menu-classic menu-fixed menu-transparent menu-one-page align-right light"
          data-menu-anima="fade-bottom"
          data-scroll-detect="true"
        >
          <div className="container">
            <div className="menu-brand">
              <a href="#home">
                <img
                  className="logo-default"
                  src="/assets/images/logo/logo-light.svg"
                  alt="logo"
                />
                <img
                  className="logo-retina"
                  src="/assets/images/logo/logo-light.svg"
                  alt="logo"
                />
              </a>
            </div>
            <i className="menu-btn"></i>
            <div className="menu-cnt">
              <ul>
                <li>
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className="menu-right">
                <div className="menu-custom-area">
                  <a className="btn btn-border btn-circle btn-xs" href="#">
                    Download CV
                  </a>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </nav>
      </>
    );
}