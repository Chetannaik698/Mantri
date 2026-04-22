import React from "react";
import { Link } from "react-router-dom"; //newly added
import "./Styles/Signup.css";
import googleIcon from "./assets/google.png";
import illustration from "./assets/illustration.png";
import mantrilogo from "./assets/mantrilogo.png";

function Signup() {
  return (
    <div className="login-container">
      <div className="login-wrapper">

        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="login-card">

            {/* LOGO */}
            <div className="login-brand">
              <div className="logo-dot">
                <img src={mantrilogo} alt="" />
              </div>
              <span>MindBridge</span>
            </div>

            <h2>Create your account</h2>
            <p className="subtitle">Start your mental wellness journey</p>

            {/* GOOGLE */}
            <button className="google-btn">
              <img src={googleIcon} alt="" />
              Continue with Google
            </button>

            <div className="divider">
              <span></span> or <span></span>
            </div>

            {/* INPUTS */}
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />

            <div className="input-box">
              <input type="password" placeholder="Password" />
              <span>👁</span>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Confirm Password" />
              <span>👁</span>
            </div>

            {/* CHECKBOX */}
            <div className="checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className="privacy-policy">
                I agree to <b>Terms</b> & <b>Privacy Policy</b>
              </label>
            </div>

            {/* BUTTON */}
            <button className="create-btn">Create Account</button>

            {/* SIGNIN TEXT */}
           <p className="signin">
  Already have an account?
  <Link to="/signin" className="link"> Sign in</Link>
</p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="right-inner">
            <img src={illustration} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;