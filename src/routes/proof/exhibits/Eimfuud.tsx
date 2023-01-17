import styles from "../exhibits.module.scss";
import ExternalLink from "../../../components/ExternalLink";

export function Eimfuud({ letter }: { letter: string }) {
  return (
    <details>
      <summary role="button">Exhibit {letter} - Eimfuud</summary>
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
        This excellent investigative piece compiled by{" "}
        <ExternalLink href="https://twitter.com/ArchangelNevaeh">
          Nevaeh_Archangel
        </ExternalLink>{" "}
        led to a major breakthrough in the investigation. Using cutting edge
        interrogation techniques, Nevaeh was able to extract a public confession
        from the Sea Bunny herself:
        <blockquote>
          I'm food
          <footer>
            <cite>- Kiku</cite>
          </footer>
        </blockquote>
      </p>
    </details>
  );
}
