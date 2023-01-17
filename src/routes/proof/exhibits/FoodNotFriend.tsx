import styles from "../exhibits.module.scss";
import kikuIsFoodNotFriend from "../../../assets/video/kiku-food-not-friend.mp4";
import ExternalLink from "../../../components/ExternalLink";

export function FoodNotFriend({ letter }: { letter: string }) {
  return (
    <details>
      <summary role="button">
        Exhibit {letter} - Kiku is Food Not Friend
      </summary>
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
        Our team discovered this clip hidden away deep in the Kiku archives.
        When asked if she is Food not Friend, she immediately replies in the
        affirmative. There was no hesitation, she is food. Q.E.D.
      </p>
    </details>
  );
}
