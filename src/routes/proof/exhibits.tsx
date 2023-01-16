import Breadcrumbs, { Breadcrumb } from "../../components/Breadcrumbs";
import { HomeCrumb } from "../home";
import { ProofCrumb } from "../proof";
import classnames from "classnames";
import styles from "./exhibits.module.scss";
import kikuRice from "../../assets/video/kiku-rice.mp4";
import kikuIsFoodNotFriend from "../../assets/video/kiku-food-not-friend.mp4";
import ExternalLink from "../../components/ExternalLink";

export type ProofSlug = "exhibit-a" | "exhibit-b" | "exhibit-c" | "exhibit-d";

const breadcrumbs: Array<Breadcrumb> = [HomeCrumb, ProofCrumb];

function Exhibits() {
  return (
    <main className={classnames("container", styles.exhibits)}>
      <Breadcrumbs paths={breadcrumbs} />
      <details>
        <summary role="button">Exhibit A - Kiku Rice</summary>
        <div className={styles.media}>
          <figure>
            <video controls>
              <source src={kikuRice} type="video/mp4" />
            </video>
            <figcaption>
              <ExternalLink href="https://www.twitch.tv/kikuvtuber/clip/SuaveDependableOrcaBuddhaBar-ot1wEjM21Onn0Xze">
                <small>Twitch Mirror</small>
              </ExternalLink>
            </figcaption>
          </figure>
        </div>
        <p>
          This is the first recorded mention of Kiku Rice. From our
          investigation, we have learned that Kiku Rice is a smol-grain rice
          which was specifically bred over many years to pair perfectly with
          scrumptious flavors of the Sea Bunny. Much like pairing fine wines
          with high-class entrées, we can be sure that Kiku will taste her best
          when rolled into a sushi packed with Kiku Rice.
        </p>
      </details>
      <details>
        <summary role="button">Exhibit B - Kiku Apples</summary>
        <div className={styles.media}>
          <figure>
            <ExternalLink
              title="Kiku Apples - © Jörgens.mi"
              href="https://commons.wikimedia.org/wiki/File:Fuji-Kiku_(apple)_jm123569.jpg"
            >
              <img
                alt="Fuji-Kiku (apple) jm123569"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Fuji-Kiku_%28apple%29_jm123569.jpg/512px-Fuji-Kiku_%28apple%29_jm123569.jpg"
              />
            </ExternalLink>
          </figure>
        </div>
      </details>
      <details>
        <summary role="button">Exhibit C - Eimfuud</summary>
        <div className={styles.media}>
          <figure>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/c_AJ4A8Xwmw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <figcaption>
              <ExternalLink href="https://www.twitch.tv/kikuvtuber/clip/FilthyNicePassionfruitCoolStoryBob-dofvFquWMggEuwat">
                <small>Twitch Mirror</small>
              </ExternalLink>
            </figcaption>
          </figure>
        </div>
        <p>
          This excellent investigative piece compiled by Nevaeh_Archangel led to
          a major breakthrough in the investigation. Using cutting edge
          techniques, Nevaeh was able to extract a public confession from the
          Sea Bunny herself:
          <blockquote>
            I'm food
            <footer>
              <cite>- Kiku</cite>
            </footer>
          </blockquote>
        </p>
      </details>
      <details>
        <summary role="button">Exhibit D- Kiku is Food Not Friend</summary>
        <div className={styles.media}>
          <figure>
            <video controls>
              <source src={kikuIsFoodNotFriend} type="video/mp4" />
            </video>
            <figcaption>
              <ExternalLink href="https://www.twitch.tv/kikuvtuber/clip/RelievedOnerousSproutBudStar-_c5dcHj8dIQD8q1K">
                <small>Twitch Mirror</small>
              </ExternalLink>
            </figcaption>
          </figure>
        </div>
        <p>
          Digging deep in the Kiku archives, our team discovered this clip
          hidden away. When asked if she is Food not Friend, she immediately
          replies in the affirmative. This indicates that Kiku knows she is
          food, despite her many denials.
        </p>
      </details>
    </main>
  );
}

export default Exhibits;
