import "./home.scss";
import { Link } from "react-router-dom";

function home() {
  return (
    <main className="home">
      <span className="question">Is Kiku Food?</span>
      <h1>Yes.</h1>
      <Link to="/proof" className="proof-link">
        Need Proof?
      </Link>
    </main>
  );
}

export default home;
