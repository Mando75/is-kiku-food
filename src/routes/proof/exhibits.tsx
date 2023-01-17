import Breadcrumbs, { Breadcrumb } from "../../components/Breadcrumbs";
import { HomeCrumb } from "../home";
import { ProofCrumb } from "../proof";
import classnames from "classnames";
import styles from "./exhibits.module.scss";
import { KikuRice } from "./exhibits/KikuRice";
import { KikuApples } from "./exhibits/KikuApples";
import { Eimfuud } from "./exhibits/Eimfuud";
import { FoodNotFriend } from "./exhibits/FoodNotFriend";
import KikuRestaurant from "./exhibits/KikuRestaurant";
import Nootie from "./exhibits/Nootie";

const breadcrumbs: Array<Breadcrumb> = [HomeCrumb, ProofCrumb];

function Exhibits() {
  return (
    <main className={classnames("container", styles.exhibits)}>
      <Breadcrumbs paths={breadcrumbs} />
      <KikuRice letter="A" />
      <KikuApples letter="B" />
      <KikuRestaurant letter="C" />
      <Eimfuud letter="D" />
      <Nootie letter="E" />
      <FoodNotFriend letter="F" />
    </main>
  );
}

export default Exhibits;
