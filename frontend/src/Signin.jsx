import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Signin.css";
import illustration from "./assets/illustration.png";

function Signin() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="login-card">
            {/* LOGO */}
            <div className="login-brand">
              <img src={googleIcon} alt="" />
              <span>MindBridge</span>
            </div>

            <h2>Welcome back</h2>
            <p className="subtitle">We’ve missed you.</p>

            {/* INPUTS */}
            <input type="email" placeholder="Email Address" />

            <div className="input-box">
              <input type="password" placeholder="Password" />
              <span>👁</span>
            </div>

            <p className="forgot">Forgot password?</p>

            {/* BUTTON */}
            <button className="login-btn">Sign In</button>

            <div className="divider">
              <span></span> or <span></span>
            </div>

            {/* GOOGLE */}
            <button className="google-btn">
              <img src={googleIcon} alt="" />
              Continue with Google
            </button>

            {/* SIGNUP LINK */}
            <p>
              Don’t have an account?
              <Link to="/"> Sign up</Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="testimonial">
            <div className="user">
              <img src={illustration} alt="" />
              <div>
                <h4>Sarah M., 29</h4>
                <p>Woman</p>
              </div>
            </div>

            <p className="quote">
              “MindBridge has been a lifesaver for my mental health. The AI
              support is so understanding and helpful.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
