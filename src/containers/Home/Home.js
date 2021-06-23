import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import logo from "../../images/white-logo.svg";
import ui from "../../images/services/uiux.svg";
import discovery from "../../images/services/discovery.svg";
import ios from "../../images/services/ios.svg";
import web from "../../images/services/web.svg";
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
        <div className="aka--awesome--clients--left"></div>
        <div className="aka--awesome--clients--right">
          <h5>What they say about us</h5>
          <p>
            "It goes like this: young men graduate from Lycée de Kigali; join a
            code club managed by HeHe Ltd; start their own firm; RDB Rwanda sees
            a potential, introduces them to Volkswagen which selects them to
            develop mobile solutions for Rwanda's car operations. Did you say
            Awesomity Lab?"
          </p>
          <div className="client--info">
            Diyana GITERA Advisor - NEPAD and APRM
          </div>
        </div>
      </div>
      <div className="aka--awesome--achievements">achievements</div>
      <Footer />
    </div>
  );
};

export default Home;
