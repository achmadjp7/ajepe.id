import React from 'react';

export default function Blog(){
    return (
      <>
        <section id="blog" className="section-base section-color">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2>Latest posts.</h2>
                <p>
                  Articles about current technological developments and the
                  like.
                </p>
              </div>
              <div className="col-lg-4 align-right align-left-md">
                <a href="#" className="btn btn-circle btn-border btn-sm">
                  View all
                </a>
              </div>
            </div>
            <hr className="space" />
            <div className="row">
              <div className="col-lg-4">
                <div className="grid-list" data-columns="1">
                  <div className="grid-box">
                    <div className="grid-item">
                      <div className="cnt-box cnt-box-blog-top boxed">
                        <a href="#" className="img-box">
                          <div className="blog-date">
                            <span>23</span>
                            <span>JAN 2018</span>
                          </div>
                          <img
                            src="http://via.placeholder.com/800x600"
                            alt=""
                          />
                        </a>
                        <div className="caption">
                          <h2>
                            Ten Red Bull Music Festival performers and
                            musicians.
                          </h2>
                          <ul className="icon-list icon-list-horizontal">
                            <li>
                              <i className="icon-bookmark"></i>
                              <a href="#">Events</a>
                            </li>
                            <li className="icon-links">
                              <a
                                href="#"
                                data-social="share-fadebook"
                                data-social-url=""
                              >
                                <i className="icon-facebook"></i>
                              </a>
                              <a
                                href="#"
                                data-social="share-twitter"
                                data-social-url=""
                              >
                                <i className="icon-twitter"></i>
                              </a>
                              <a
                                href="#"
                                data-social="share-linkedin"
                                data-social-url=""
                              >
                                <i className="icon-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sitamet consectetur adipisicing
                            elito sed do eiusmod tempore. Duis aute irure dolor
                            in reprehenderit in velie.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="grid-list" data-columns="1">
                  <div className="grid-box">
                    <div className="grid-item">
                      <div className="cnt-box cnt-box-blog-side boxed">
                        <a href="#" className="img-box">
                          <div className="blog-date">
                            <span>01</span>
                            <span>JAN 2018</span>
                          </div>
                          <img
                            src="http://via.placeholder.com/800x600"
                            alt=""
                          />
                        </a>
                        <div className="caption">
                          <h2>
                            How far will an elite jumper go for the chance to
                            break boundaries in their sport
                          </h2>
                          <ul className="icon-list icon-list-horizontal">
                            <li>
                              <i className="icon-bookmark"></i>
                              <a href="#">Music</a>
                            </li>
                            <li className="icon-links">
                              <a
                                href="#"
                                data-social="share-fadebook"
                                data-social-url=""
                              >
                                <i className="icon-facebook"></i>
                              </a>
                              <a
                                href="#"
                                data-social="share-twitter"
                                data-social-url=""
                              >
                                <i className="icon-twitter"></i>
                              </a>
                              <a
                                href="#"
                                data-social="share-linkedin"
                                data-social-url=""
                              >
                                <i className="icon-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sitamet consectetur adipisicing
                            elito sed do eiusmod tempore. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum
                            dolore eu fugia.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="cnt-box cnt-box-blog-side boxed">
                        <a href="#" className="img-box">
                          <div className="blog-date">
                            <span>12</span>
                            <span>JAN 2018</span>
                          </div>
                          <img
                            src="http://via.placeholder.com/800x600"
                            alt=""
                          />
                        </a>
                        <div className="caption">
                          <h2>
                            Hit the hiking and trail running routes with endless
                            trails over beautiful peaks
                          </h2>
                          <ul className="icon-list icon-list-horizontal">
                            <li>
                              <i className="icon-bookmark"></i>
                              <a href="#">Events</a>
                            </li>
                            <li className="icon-links">
                              <a
                                href="#"
                                data-social="share-fadebook"
                                data-social-url=""
                              >
                                <i className="icon-facebook"></i>
                              </a>
                              <a
                                href="#"
                                data-social="share-twitter"
                                data-social-url=""
                              >
                                <i className="icon-twitter"></i>
                              </a>
                              <a
                                href="#"
                                data-social="share-linkedin"
                                data-social-url=""
                              >
                                <i className="icon-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sitamet consectetur adipisicing
                            elito sed do eiusmod tempore. Duis aute irure dolor
                            in reprehenderit in voluptate velit e dolore eu
                            fugiat nulla pariature.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section-image light"
          data-parallax="scroll"
          data-image-src="/assets/images/code.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h2>Subscribe now.</h2>
                <hr className="space-xs" />
                <p>Join our mailing list to receive latest updates & news.</p>
              </div>
              <div className="col-lg-8">
                <form
                  action=""
                  className="form-box form-ajax form-inline"
                  method="post"
                  data-email="example@domain.com"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <p>Type your email</p>
                      <input
                        id="email"
                        name="email"
                        placeholder=""
                        type="email"
                        className="input-text"
                        required
                      />
                    </div>
                    <div className="col-lg-4">
                      <p></p>
                      <button className="btn btn-sm" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="check"
                      name="check"
                      value="check"
                      required
                    />
                    <label htmlFor="check">
                      You accept the terms of service and the privacy policy
                    </label>
                  </div>
                  <div className="success-box">
                    <div className="alert alert-success">
                      Congratulations. Your message has been sent successfully
                    </div>
                  </div>
                  <div className="error-box">
                    <div className="alert alert-warning">
                      Error, please retry. Your message has not been sent
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}