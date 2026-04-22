import { useState } from "react";
import "./Styles/Journal.css";

const journalData = [
  {
    id: 1,
    date: "April 26, 2024",
    title: "Evening Walk",
    desc: "Went for a walk and enjoyed the sunset.",
    mood: "Peaceful 😊",
  },
  {
    id: 2,
    date: "April 26, 2024",
    title: "Morning Reflections",
    desc: "Feeling calm and focused after meditation.",
    mood: "Grateful 😊",
  },
  {
    id: 3,
    date: "April 25, 2024",
    title: "Productive Start",
    desc: "Got a lot done this morning. Feeling accomplished.",
    mood: "Motivated 😊",
  },
  {
    id: 4,
    date: "April 24, 2024",
    title: "Social Catch-Up",
    desc: "Had a great chat with an old friend today.",
    mood: "Connected 😊",
  },
  {
    id: 5,
    date: "April 22, 2024",
    title: "Dealing with Stress",
    desc: "Had a stressful day and tried to manage it.",
    mood: "Stressed 😔",
  },
];

export default function Journal() {
  const [selectedMood, setSelectedMood] = useState("All");

  const moods = ["All", "😊", "😐", "🙂", "😡", "😴"];

  const filteredData =
    selectedMood === "All"
      ? journalData
      : journalData.filter((j) => j.mood.includes(selectedMood));

  return (
    <div className="jr-container">
      {/* HEADER */}
      <h2>My Journal</h2>
      <p className="sub">How are you feeling today?</p>

      {/* MOOD SELECT */}
      <div className="jr-top">
        <div className="mood-selector">
          {moods.map((m, i) => (
            <span
              key={i}
              className={selectedMood === m ? "active" : ""}
              onClick={() => setSelectedMood(m)}
            >
              {m}
            </span>
          ))}
        </div>

        <div className="filters">
          <select>
            <option>All Moods</option>
          </select>

          <select>
            <option>April 2024</option>
          </select>
        </div>
      </div>

      {/* LIST */}
      <h3>Your Thoughts</h3>
      <p className="sub">How you've been feeling lately</p>

<div className="jr-list">
  {filteredData.map((item) => (
    <div key={item.id} className="jr-card">

      <div className="jr-left">
        <span className="jr-date">{item.date}</span>

        <h4 className="jr-title">{item.title}</h4>

        <p className="jr-desc">{item.desc}</p>
      </div>

      <div className="jr-right">
        <span className="jr-badge">{item.mood}</span>
      </div>

    </div>
  ))}
</div>

      {/* FOOTER NOTE */}
      <div className="jr-note">
        💙 Your journal is private and safe
        <br />
        🌱 You're doing great. Keep expressing yourself!
      </div>
    </div>
  );
}
