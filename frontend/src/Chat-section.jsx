import { useState } from "react";
import "./Styles/Chat-section.css";
import userImg from "./assets/user.png";
import logoImg from "./assets/mantrilogo.png";
import aiImg from "./assets/ai.png";
import MoodTracker from "./Mood-tracker"; // ✅ important
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import Journal from "./Journal";
import Insights from "./Insights";

const sessionsData = [
  {
    id: 1,
    preview: "Hi. I'm feeling pretty anxious today...",
    feeling: "Anxious",
    summary:
      "During this session, you shared that you were feeling overwhelmed with racing thoughts.",
    messages: [
      {
        from: "ai",
        text: "Hi Emily, I'm here to support you.",
        time: "11:03 AM",
      },
      {
        from: "user",
        text: "Hi. I'm feeling pretty anxious today.",
        time: "11:03 AM",
      },
      {
        from: "ai",
        text: "Let’s take a few deep breaths together.",
        time: "11:04 AM",
      },
    ],
  },
];

const menuItems = [
  "Dashboard",
  "AI Support",
  "Mood Tracker",
  "Journal",
  "Insights",
  "Settings",
];

export default function ChatSection() {
  const [activeSession, setActiveSession] = useState(sessionsData[0]);
  const [message, setMessage] = useState("");
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="mb-container">
      {/* SIDEBAR */}
      <aside className="mb-sidebar">
        <div className="mb-logo">
          <img src={logoImg} alt="" />
          <span>MindBridge</span>
        </div>

        <div className="mb-menu">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`mb-menu-item ${activeMenu === item ? "active" : ""}`}
              onClick={() => setActiveMenu(item)}
            >
              <span className="circle">{i + 1}</span>
              <span className="menu-text">{item}</span>
            </div>
          ))}
        </div>

        <div className="mb-user">
          <img src={userImg} alt="" />
          <div>
            <p>Emily Johnson</p>
            <span>emily@email.com</span>
          </div>
        </div>
      </aside>

      {/* RIGHT SIDE SWITCH */}
      {activeMenu === "AI Support" && (
        <>
          {/* SESSION PANEL */}
          <section className="mb-session-panel">
            <h2>Previous Sessions</h2>

            <div className="mb-search">
              <input placeholder="Search sessions..." />
            </div>

            <div className="mb-session-list">
              {sessionsData.map((s) => (
                <div
                  key={s.id}
                  className="mb-session active"
                  onClick={() => setActiveSession(s)}
                >
                  <p className="preview">{s.preview}</p>
                </div>
              ))}
            </div>

            <div className="mb-alert">
              ⚠ If you're in immediate danger, call <b>112</b>.
            </div>
          </section>

          {/* CHAT PANEL */}
          <section className="mb-chat-panel">
            <div className="mb-chat-header">
              Session <span className="badge">{activeSession.feeling}</span>
            </div>

            <div className="mb-summary">{activeSession.summary}</div>

            <div className="mb-messages">
              {activeSession.messages.map((msg, i) => (
                <div key={i} className={`msg ${msg.from}`}>
                  {msg.from === "ai" && (
                    <img src={aiImg} className="ai-avatar" />
                  )}

                  <div className="bubble">
                    <p>{msg.text}</p>
                    <span className="time">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-input">
              <input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={() => setMessage("")}>➤</button>
            </div>
          </section>
        </>
      )}

      {/* ✅ MOOD TRACKER PAGE */}
      {activeMenu === "Mood Tracker" && <MoodTracker />}

      {/* OPTIONAL */}
      {activeMenu === "Dashboard" && (
        <div className="mb-chat-panel">
          <Dashboard />
        </div>
      )}

      {activeMenu === "Journal" && (
        <div className="mb-chat-panel">
          <Journal />
        </div>
      )}

      {activeMenu === "Insights" && (
        <div className="mb-chat-panel">
          <Insights />
        </div>
      )}

      {activeMenu === "Settings" && <Settings />}
    </div>
  );
}
