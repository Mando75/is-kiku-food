import styles from "../exhibits.module.scss";
import kikuRice from "../../../assets/video/kiku-rice.mp4";
import React from "react";
import ExternalLink from "../../../components/ExternalLink";

type IKikuRiceProps = {
  letter: string;
};

export function KikuRice({ letter }: IKikuRiceProps) {
  return (
    <details>
      <summary role="button">Exhibit {letter} - Kiku Rice</summary>
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
        This is the first recorded mention of Kiku Rice. From our investigation,
        we have learned that Kiku Rice is a smol-grain rice which was
        specifically bred over many years to pair perfectly with scrumptious
        flavors of the Sea Bunny. Much like pairing fine wines with high-class
        entrées, we can be sure that Kiku will taste her best when rolled into a
        sushi packed with Kiku Rice.
      </p>
    </details>
  );
}
