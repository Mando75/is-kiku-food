import React from "react";

import "./proof.scss";
import kikuSushi from "../assets/img/kiku-sushi-by-penprah.jpg";
import Breadcrumbs, { Breadcrumb } from "../components/Breadcrumbs/Breadcrumbs";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

const breadcrumbs: Array<Breadcrumb> = [
  { to: "/", label: "Home" },
  { to: "/proof", label: "Proof" },
];

function proof() {
  return (
    <main className="proof">
      <Breadcrumbs paths={breadcrumbs} />
      <article>
        <h1>Welcome, Seeker of Truth!</h1>
        <h5>(and snacks?)</h5>
        <figure className="kiku-sushi">
          <img
            src={kikuSushi}
            alt="Kiku Sushi by Penprah"
            title="Kiku Sushi by Penprah"
          />
          <figcaption>
            <a
              href="https://twitter.com/penprah"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              by Penprah
            </a>
          </figcaption>
        </figure>
        <p>
          Despite what Kiku may often claim on her{" "}
          <a
            className="twitch-link"
            href="https://twitch.tv/kikuvtuber"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Twitch stream
          </a>
          , there is considerable evidence that she is, in fact, food.
        </p>
        <p>
          The following pages will provide our collection of evidence that Kiku
          the Sea Bunny would indeed be a tasty snack if she were ever caught.
        </p>
        <p>
          What you choose to do with this evidence is up to you. We here at
          iskikufood.com do not condone any attempts to eat the Sea Bun. After
          all, she may be food, but she is also our friend! However, we are also
          passionate seekers of truth, and as the following evidence will
          demonstrate, Kiku is in fact Food (and Friend).
        </p>
      </article>
      <section className="actions">
        <Link to="/proof/test-slug">
          <Button>Next</Button>
        </Link>
      </section>
    </main>
  );
}

export default proof;
