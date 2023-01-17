import styles from "../exhibits.module.scss";
import kikuApples from "../../../assets/img/kiku-apples.png";
import ExternalLink from "../../../components/ExternalLink";

export function KikuApples({ letter }: { letter: string }) {
  return (
    <details>
      <summary role="button">Exhibit {letter} - Kiku Apples</summary>
      <div className={styles.media}>
        <figure>
          <img alt="Kiku Apples" src={kikuApples} />
        </figure>
      </div>
      <p>
        When researching Kiku Rice, our team also stumbled upon Kiku Apples.
        Kiku Apples are{" "}
        <ExternalLink href="https://specialtyproduce.com/produce/Kiku_Apples_8800.php">
          "known for their sweetness." and "are one of the sweetest apples
          available today."{" "}
        </ExternalLink>
        Is it a coincidence that Kiku, the sweetest Sea Bunny on Twitch, shares
        her name with one of the sweetest apples on the market today? Perhaps
        Kiku would make a great dessert as well.
      </p>
    </details>
  );
}
