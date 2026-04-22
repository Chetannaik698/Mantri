import React from "react";
import "./Styles/Landing.css";
import { Link } from "react-router-dom";
import mantrilogo from "./assets/mantrilogo.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-wrapper">

        {/* LEFT SIDE */}
        <div className="landing-left">

          {/* LOGO */}
          <div className="logo">
            {/* 👉 Add your logo here */}
            <img src={mantrilogo} />
            <span>MindBridge</span>
          </div>

          {/* TEXT */}
          <h1>
            Your Mental Health,
            <br /> Supported by AI
          </h1>

          <p className="subtitle">
            Private. Intelligent. Always here.
          </p>

          {/* BUTTONS */}
<div className="buttons">
  <Link to="/signup">
    <button className="primary-btn">Get Started Free</button>
  </Link>

  <Link to="/signin">
    <button className="secondary-btn">Sign In</button>
  </Link>
</div>

          {/* FEATURES */}
          <div className="features">
            <div>✔ HIPAA Compliant</div>
            <div>🔒 Private & Secure</div>
            <div>✔ Clinically Informed</div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="landing-right">

          {/* 👉 ADD MAIN IMAGE HERE */}
          <img src="/src/assets/illustration.png" alt="illustration" />

        </div>

      </div>
    </div>
  );
}

export default Landing;