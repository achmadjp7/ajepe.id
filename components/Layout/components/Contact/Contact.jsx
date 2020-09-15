import React from 'react';

export default function Contact(){
    return (
      <section
        id="contact"
        className="section-base section-color "
      >
        <div className="container">
          <div
            className="row fade-bottom contact-row"
            data-anima=""
            data-time="1000"
            aid="0.08160763298708185"
          >
            <div className="col-lg-6">
              <form
                action="themekit/scripts/contact-form/contact-form.php"
                className="form-box form-ajax boxed-area"
                method="post"
                data-email="example@domain.com"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <p>Name</p>
                    <input
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      className="input-text"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <p>Email</p>
                    <input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="input-text"
                      required=""
                    />
                  </div>
                  <div className="col-lg-12">
                    <p>Subject</p>
                    <input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      type="text"
                      className="input-text"
                      required=""
                    />
                  </div>
                  <div className="col-lg-12">
                    <p>Message</p>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="message"
                      className="input-text"
                      required=""
                    ></textarea>
                  </div>
                </div>
                <button className="btn btn-sm btn-circle" type="submit">
                  Send message
                </button>
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    value="check"
                    required=""
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
            <div className="col-lg-6">
              <hr className="space-sm visible-md" />
              <h2>
                Contact Us<span className="dot">.</span>
              </h2>

              <ul className="icon-list icon-circle">
                <li>Do you have any questions about our services?</li>
                <li>Interested in working on a joint project?</li>
              </ul>
              <hr className="space space-40" />
              <img src="/assets/images/sign-dark.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}