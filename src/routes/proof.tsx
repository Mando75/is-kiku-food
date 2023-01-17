import React from "react";

import kikuSushi from "../assets/img/kiku-sushi-by-penprah.jpg";
import Breadcrumbs, { Breadcrumb } from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import classnames from "classnames";
import styles from "./proof.module.scss";
import ExternalLink from "../components/ExternalLink";
import { HomeCrumb } from "./home";

export const ProofCrumb: Breadcrumb = {
  to: "/proof",
  label: "Proof",
};

const breadcrumbs: Array<Breadcrumb> = [HomeCrumb];

function proof() {
  return (
    <main className={classnames("container", styles.proof)}>
      <Breadcrumbs paths={breadcrumbs} />
      <article>
        <hgroup>
          <h1>Welcome, Seeker of Truth!</h1>
          <h5>(and snacks?)</h5>
        </hgroup>
        <figure className="kiku-sushi">
          <img
            src={kikuSushi}
            alt="Kiku Sushi by Penprah"
            title="Kiku Sushi by Penprah"
          />
          <figcaption>
            <small>
              <ExternalLink href="https://twitter.com/penprah">
                by Penprah
              </ExternalLink>
            </small>
          </figcaption>
        </figure>
        <p>
          Despite what Kiku may often claim on her{" "}
          <ExternalLink href="https://twitch.tv/kikuvtuber">
            Twitch stream
          </ExternalLink>
          , there is considerable evidence that she is, in fact, food.
        </p>
        <p>
          The team here at iskikufood.com is dedicated to compiling and
          presenting <strong>all</strong> the evidence so that you, dear reader,
          can make an informed decision about just how tasty of a snack Kiku
          might be. What you choose to do with this evidence is up to you.
        </p>
        <h5>We do not condone any attempts to eat the Sea Bun!</h5>
        <p>
          She may be the perfect bite-sized snack, but she is also our friend!
          Friends don't eat friends.
        </p>
      </article>
      <section className="actions">
        <Link to="/proof/exhibits">
          <button>View Exhibits</button>
        </Link>
      </section>
    </main>
  );
}

export default proof;
