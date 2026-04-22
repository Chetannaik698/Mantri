import "./Styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="db-container">

      {/* GREETING */}
      <div className="db-hero">
        <h2>Good Morning, Arjun 👋</h2>
        <p>You’ve logged in 7 days straight. Keep it up! 🔥</p>
      </div>

      {/* STATS */}
      <div className="db-stats">

        <div className="stat-card">
          <h4>Today's Mood</h4>
          <div className="emoji">😊</div>
          <span className="badge green">Good</span>
        </div>

        <div className="stat-card">
          <h4>Risk Level</h4>
          <div className="emoji">🛡️</div>
          <span className="badge green">Low Risk</span>
        </div>

        <div className="stat-card">
          <h4>Sessions This Week</h4>
          <div className="emoji">📅</div>
          <p className="big">3 sessions</p>
        </div>

        <div className="stat-card">
          <h4>Mindfulness Streak</h4>
          <p className="big">7 days 🔥</p>
        </div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="db-middle">

        {/* GRAPH */}
        <div className="db-card large">
          <h3>Mood Trends (Last 7 Days)</h3>

          <div className="graph-placeholder">
            Graph Area
          </div>
        </div>

        {/* ACTIONS */}
        <div className="db-card actions">
          <h3>Today's Actions</h3>

          <button className="btn primary">Start Check-In</button>
          <button className="btn outline">Talk to AI</button>
          <button className="btn outline">View Resources</button>
        </div>

      </div>

      {/* JOURNAL */}
      <div className="db-journal">

        <h3>Recent Journal Entries</h3>

        <div className="journal-grid">

          <div className="journal-card">
            <h4>Morning Reflections</h4>
            <span>Apr 26, 2024</span>
            <p>Feeling calm and focused after meditation.</p>
          </div>

          <div className="journal-card">
            <h4>Evening Walk</h4>
            <span>Apr 26, 2024</span>
            <p>Went for a walk and enjoyed the sunset.</p>
          </div>

        </div>

      </div>

    </div>
  );
}