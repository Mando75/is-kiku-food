import { Link } from "react-router-dom";
import styles from "./home.module.scss";
import { Breadcrumb } from "../components/Breadcrumbs";

export const HomeCrumb: Breadcrumb = {
  to: "/",
  label: "Home",
};
function home() {
  return (
    <main className="container">
      <div className={styles.answer}>
        <h1>Yes.</h1>
        <Link to="/proof" className="proof-link">
          <small>Need Proof?</small>
        </Link>
      </div>
    </main>
  );
}

export default home;
