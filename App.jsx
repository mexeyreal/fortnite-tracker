
import { Trophy, Users, Zap } from "lucide-react";

const events = [
  ["FNCS Division 3", "#237", "78.2"],
  ["Reload Elite", "#4,657", "10.7"],
  ["Solo Victory Cup", "#5,622", "4.4"],
];

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">TRN</div>
        <nav>
          <span>Home</span>
          <span>Events</span>
          <span>Leaderboards</span>
        </nav>
      </header>

      <section className="hero">
        <div className="avatar">K</div>
        <div>
          <h1>Kwixfnbr</h1>
          <p>Fortnite Tracker Profile Clone</p>
        </div>
      </section>

      <div className="grid">
        <div className="card">
          <div className="card-title">
            <Zap />
            Power Ranking
          </div>
          <h2>690 PR</h2>
          <p>Top 12,575 EU</p>
        </div>

        <div className="card">
          <div className="card-title">
            <Trophy />
            Lifetime Totals
          </div>
          <h2>1,243 PR</h2>
          <p>$0 Earnings</p>
        </div>

        <div className="card">
          <div className="card-title">
            <Users />
            Teammates
          </div>
          <p>XP42 Lyphex</p>
          <p>cosmoreyli</p>
        </div>
      </div>

      <section className="events">
        <h2>Event Results</h2>

        {events.map((e) => (
          <div className="event" key={e[0]}>
            <div>
              <strong>{e[0]}</strong>
            </div>

            <div>{e[1]}</div>

            <div>{e[2]} PR</div>
          </div>
        ))}
      </section>
    </div>
  );
}
