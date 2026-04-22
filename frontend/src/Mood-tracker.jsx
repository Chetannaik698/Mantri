import "./Styles/Mood-tracker.css";

export default function MoodTracker() {
  return (
    <section className="mt-container">

      {/* HEADER */}
      <div className="mt-header">
        <h2>Detailed Analytics</h2>

        <div className="mt-tabs">
          <span className="active">7 Days</span>
          <span>30 Days</span>
          <span>3 Months</span>
          <span>1 Year</span>
        </div>
      </div>

      {/* GRAPH */}
      <div className="mt-card">
        <h3>Mood Over Time</h3>

        <div className="mt-graph">
          {/* You can replace with chart later */}
          <div className="graph-placeholder">Graph Area</div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-stats">
        <div className="stat-box">
          <p>Average Mood Score</p>
          <h2>7.8 <span className="green">+0.4</span></h2>
        </div>

        <div className="stat-box">
          <p>Best Streak</p>
          <h2>🔥 8 days</h2>
        </div>

        <div className="stat-box">
          <p>Total Check-ins</p>
          <h2>25</h2>
        </div>
      </div>

      {/* EMOTION BREAKDOWN */}
      <div className="mt-card">
        <h3>Emotion Breakdown</h3>

        <div className="emotion-row"></div>
        <div className="emotion-row"></div>
        <div className="emotion-row"></div>
      </div>

      {/* INSIGHTS */}
      <div className="mt-insights">
        <div className="insight">
          <p>✔ Your mood is 30% better on days you sleep 7+ hours</p>
          <span className="green">+30%</span>
        </div>

        <div className="insight">
          <p>📊 Anxiety spikes on Mondays</p>
        </div>

        <div className="insight">
          <p>📈 Journaling improves your mood by +2 points</p>
          <span className="green">+2</span>
        </div>
      </div>

    </section>
  );
}