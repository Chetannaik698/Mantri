import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Signin.css";
import googleIcon from "./assets/google.png";
import mantrilogo from "./assets/mantrilogo.png";

function Signin() {
  return (
    <div className="container">
      <div className="wrapper">

        {/* LEFT SIDE */}
        <div className="left">
          <div className="card">

            {/* LOGO */}
            <div className="logo">
              <img src={mantrilogo} alt="logo" />
              <span>MindBridge</span>
            </div>

            <h2>Welcome back</h2>
            <p className="subtitle">We’ve missed you.</p>

            <input type="email" placeholder="Email Address" />

            <div className="password-box">
              <input type="password" placeholder="Password" />
              <span>👁</span>
            </div>

            <p className="forgot">Forgot password?</p>

            <button className="signin-btn">Sign In</button>

            <div className="divider">
              <span></span> or <span></span>
            </div>

            <button className="google-btn">
                <img src={googleIcon} alt="" />
              Continue with Google
            </button>

           <p className="signup">
  Don’t have an account?
  <Link to="/" className="link"> Sign up</Link>
</p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">

        </div>

      </div>
    </div>
  );
}

export default Signin;