import React from 'react';

export default function Home(){
    return (
      <>
        <section
          id="home"
          className="section-image section-full-width-right light section-bottom-layer bg-blue"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-anima="fade-in" data-time="1000">
                <hr className="space-sm" />
                <h1>Looking for Web Developer?</h1>
                <p>
                  Hi, my name is Achmad, I am a web developer with more than 9
                  years of experience. I am used to building websites using
                  Laravel Framework and Nextjs, etc.
                </p>
                <a
                  href="#overview"
                  className="btn-text active scroll-to hidden-sm"
                >
                  Overview
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  className="width-750"
                  src="/assets/images/WebInformationTechnology.svg"
                  alt=""
                />
              </div>
              <hr className="space-sm" />
            </div>
          </div>
        </section>
        <section className="section-base">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 align-self-center">
                <p className="quote offset-4">
                  {" "}
                  “The loser is the one who stops learning”{" "}
                </p>
                <span className="quote-author">
                  {" "}
                  <small> -Achmad Joko Priyono- </small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}