import styles from "./home.module.scss";
import Breadcrumbs, { Breadcrumb } from "../components/Breadcrumbs";
import { HomeCrumb } from "./home";

const breadcrumbs: Array<Breadcrumb> = [HomeCrumb];
function kikubro() {
  return (
    <main className="container">
      <Breadcrumbs paths={breadcrumbs} />
      <div className={styles.answer}>
        <h1>Yes.</h1>
      </div>
    </main>
  );
}

export default kikubro;
