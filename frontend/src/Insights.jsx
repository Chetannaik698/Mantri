import { useState } from "react";
import "./Styles/Insights.css";

export default function Insights() {
  const [range, setRange] = useState("Last 30 Days");

  return (
    <div className="in-container">

      {/* HEADER */}
      <h2>Insights</h2>
      <p className="sub">Here’s how you’ve been feeling lately.</p>

      {/* FILTER BAR */}
      <div className="in-top">

        <div className="moods">
          <span>😊</span>
          <span>😐</span>
          <span>🙂</span>
          <span>😡</span>
          <span>😴</span>
        </div>

        <div className="filters">
          <select value={range} onChange={(e) => setRange(e.target.value)}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>3 Months</option>
          </select>

          <select>
            <option>All Moods</option>
          </select>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="in-grid">

        {/* CHART */}
        <div className="in-card chart">
          <h3>Mood Trends</h3>
          <p>Your mood over the last 30 days</p>

          <div className="chart-box">
            📈 Chart Area
          </div>
        </div>

        {/* BREAKDOWN */}
        <div className="in-card">
          <h3>Mood Breakdown</h3>

          <div className="row">
            <span>😊 Good</span>
            <div className="bar good">43%</div>
          </div>

          <div className="row">
            <span>😐 Neutral</span>
            <div className="bar neutral">24%</div>
          </div>

          <div className="row">
            <span>🙂 Anxious</span>
            <div className="bar anxious">20%</div>
          </div>

          <div className="row">
            <span>😡 Stressed</span>
            <div className="bar stressed">9%</div>
          </div>

        </div>

      </div>

      {/* RECENT EMOTIONS */}
      <h3 className="mt">Recent Emotions</h3>
      <p className="sub">Your latest recorded emotions.</p>

      <div className="in-cards">

        <div className="mini good">
          😊 Good
          <p>8 times</p>
        </div>

        <div className="mini neutral">
          😐 Neutral
          <p>4 times</p>
        </div>

        <div className="mini anxious">
          🙂 Anxious
          <p>3 times</p>
        </div>

        <div className="mini stressed">
          😡 Stressed
          <p>2 times</p>
        </div>

      </div>

      {/* FOOTER */}
      <div className="in-footer">
        Remember, it's helpful to look at trends, not just individual days. 🌱
      </div>

    </div>
  );
}