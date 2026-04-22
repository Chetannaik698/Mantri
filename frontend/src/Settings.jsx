import { useState } from "react";
import "./Styles/Settings.css";

export default function Settings() {

  // ✅ FIX: define state
  const [email, setEmail] = useState("");

  return (
    <div className="settings-container">

      <h2 className="settings-title">Settings</h2>

      {/* EMAIL CARD */}
      <div className="settings-card full">
        <h3>Email Address</h3>
        <p className="sub">Your primary email address</p>

        <div className="input-row">
          <input
            placeholder="abc@example.com"   // ✅ placeholder here
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn primary">Update</button>
        </div>

        <p className="hint">
          We'll send you an email to confirm the change.
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="settings-grid">

        {/* PASSWORD */}
        <div className="settings-card">
          <h3>Password</h3>
          <p className="sub">Last updated 2 months ago</p>

          <button className="btn primary">
            Change Password
          </button>
        </div>

        {/* DELETE ACCOUNT */}
        <div className="settings-card danger">
          <h3>Delete Account</h3>
          <p className="sub">
            Permanently delete your account and all of your data.
          </p>

          <button className="btn danger">
            Delete Account
          </button>
        </div>

      </div>

      {/* EXTRA DELETE INFO */}
      <div className="settings-card muted">
        <h3>Delete Account</h3>
        <p className="sub">
          Permanently delete your account and all of your data.
        </p>
      </div>

    </div>
  );
}