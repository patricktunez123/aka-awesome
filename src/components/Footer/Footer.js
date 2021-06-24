import React from "react";
import TECHSEAL from "../../images/TECHSEAL.png";
import "./_footer.scss";

const Footer = () => {
  return (
    <div className="aka--awesome--footer">
      <div className="aka--awesome--footer-top">
        <div className="row">
          <div className="lg-col-4 md-col-4 sm-col-1">
            <img src={TECHSEAL} alt="" />
          </div>
          <div className="lg-col-4 md-col-4 sm-col-1">
            <h6>REACH US</h6>
            <div className="footer--contact--info">
              <span>+250 785 160 354</span>
              <span>team@awesomity.rw</span>
            </div>

            <h6>OUR OFFICE</h6>
            <div className="footer--contact--info">
              <span>KG 625 St, Kigali, Kimihurura</span>
              <span>Open 9AM to 5PM</span>
            </div>
          </div>
          <div className="lg-col-4 md-col-4 sm-col-1">
            <h6>Drop us a line</h6>
            <p>
              — We would like to hear from you. what is your bold idea? Your
              timeline? Your location?
            </p>
            <form>
              <input placeholder="Full names" />
              <input placeholder="Email" />
              <textarea placeholder="Your text" />
              <button className="btn btn-black">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="aka--awesome--footer-bottom">
        Follow us Copy right 2015 - 2021
      </div>
    </div>
  );
};

export default Footer;
