import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import logo from "../../images/white-logo.svg";
import ui from "../../images/services/uiux.svg";
import discovery from "../../images/services/discovery.svg";
import ios from "../../images/services/ios.svg";
import web from "../../images/services/web.svg";

import gov from "../../images/clients/gov.png";
import snap from "../../images/clients/snap.png";
import vw from "../../images/clients/vw.png";
import coa from "../../images/clients/coa.png";
import ox from "../../images/clients/ox.png";
import bag from "../../images/clients/bag.png";
import grun from "../../images/clients/grun.png";
import sg from "../../images/clients/sg.png";
import cw from "../../images/clients/cw.png";
import jsr from "../../images/clients/jsr.png";
import unity from "../../images/clients/unity.png";
import wzn from "../../images/clients/wzn.png";
import "./_home.scss";

const Home = () => {
  return (
    <div className="aka--awesome--container">
      <div className="aka--awesome--hero">
        <div className="aka--awesome--hero--left">
          <img src={logo} alt="" />
          <h5 className="hero--title">
            Breathing life <br /> into Code
          </h5>
          <div className="aka--awesome--hero--left--btns">
            <button className="btn btn-black">Reach us</button>
            <button className="btn btn-outline">Our Work</button>
          </div>
        </div>

        <div className="aka--awesome--hero--right">
          <img src="https://awesomity.rw/images/screen_editor.svg" alt="" />
        </div>
      </div>
      <Nav />
      <div className="aka--awesome--services">
        <div className="aka--awesome--services--right">
          <h5 className="aka--awesome--title">Our services</h5>
          <p>
            Discover our very high-quality end-to-end services
            <br /> for your website and mobile application projects.
          </p>
          <button className="link--btn">Learn more </button>
        </div>

        <div className="aka--awesome--services--left">
          <img src={ui} alt="" />
          <img src={ios} alt="" />
          <img src={discovery} alt="" />
          <img src={web} alt="" />
        </div>
      </div>

      <div className="aka--awesome--step--one">
        <h5 className="step-title">
          From just <br /> <span>sketches,</span>
        </h5>
      </div>
      <div className="aka--awesome--step--two">
        <h5 className="step-title">
          To the final <br /> <span>product.</span>
        </h5>
        <button className="link--btn">Our work</button>
      </div>

      <div className="aka--awesome--clients">
        <div className="aka--awesome--clients--left">
          <div className="row">
            <div>
              <img src={gov} alt="" />
            </div>
            <div className="white-col">
              <img src={snap} alt="" />
            </div>
            <div>
              <img src={vw} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="white-col">
              <img src={coa} alt="" />
            </div>
            <div>
              <img src={ox} alt="" />
            </div>
            <div className="white-col">
              <img src={bag} alt="" />
            </div>
          </div>

          <div className="row">
            <div>
              <img src={grun} alt="" />
            </div>
            <div className="white-col">
              <img src={sg} alt="" />
            </div>
            <div>
              <img src={cw} alt="" />
            </div>
          </div>

          <div className="row">
            <div>
              <img src={jsr} alt="" />
            </div>
            <div className="white-col">
              <img src={unity} alt="" />
            </div>
            <div>
              <img src={wzn} alt="" />
            </div>
          </div>
        </div>
        <div className="aka--awesome--clients--right">
          <h5 className="aka--awesome--title">What they say about us</h5>
          <p>
            "It goes like this: young men graduate from Lycée de Kigali; join a
            code club managed by HeHe Ltd; start their own firm; RDB Rwanda sees
            a potential, introduces them to Volkswagen which selects them to
            develop mobile solutions for Rwanda's car operations. Did you say
            Awesomity Lab?"
          </p>
          <div className="client--info">
            <h6>Diyana GITERA</h6>
            <span className="text-muted">Advisor - NEPAD and APRM</span>
          </div>
        </div>
      </div>
      <div className="aka--awesome--achievements">
        <div className="aka--awesome--achievements--left">
          <h5 className="aka--awesome--title">Our achievements</h5>
          <p>
            Abracadabra, here are a few awards we’ve pulled out of our hat
            <br /> these last couple of years.
          </p>
          <button className="link--btn">Our story</button>
        </div>
        <div className="aka--awesome--achievements--right">
          <div className="card">
            <h6>RDB BUSINESS EXCELLENCE AWARDS</h6>⇜ • ⇝
            <p>Young Entrepreneur of the year 2020</p>
          </div>
          <div className="card">
            <h6>RWANDA TECH-SEAL</h6> ⇜ • ⇝<p>Best Programing Practices</p>
          </div>
          <div className="card">
            <h6>GOV.RW UI/UX CHALLENGE</h6> ⇜ • ⇝<p>Winner</p>
          </div>
          <div className="card">
            <h6>SEEDSTAR COMPETITION</h6> ⇜ • ⇝<p>1st runner up</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
