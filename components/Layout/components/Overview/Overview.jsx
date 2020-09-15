import React from 'react';

export default function Overview() {
    return (
      <section
        id="overview"
        className="section-base section-color section-full-width-left"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="/assets/images/iso-2.png" alt="" />
            </div>
            <div className="col-lg-6" data-anima="fade-right" data-time="1000">
              <hr className="space" />
              <h2>Overview.</h2>
              <p>
                The development of technology is getting more advanced. The
                Internet is one of the fastest growing technologies today.
                People from many cities and towns have easy access to the
                internet. <br />
                With the internet and others, it is considered very supportive
                of all forms of activity, including commercial for a company or
                individual. Given the importance of a website for a company,
                making this website provides many benefits and even benefits for
                a company.
              </p>
              <a className="btn btn-border btn-circle btn-sm" href="about.html">
                About Me
              </a>
              <hr className="space hidden-md" />
            </div>
          </div>
        </div>
      </section>
    );
}