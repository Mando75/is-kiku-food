import EightBall from "../../../assets/img/8ball.png";
import styles from "../exhibits.module.scss";
import ExternalLink from "../../../components/ExternalLink";

interface INootieProps {
  letter: string;
}

function Nootie({ letter }: INootieProps) {
  return (
    <details>
      <summary role="button">Exhibit {letter} - Her Mother</summary>
      <div className={styles.media}>
        <figure>
          <img
            src={EightBall}
            alt="@pengu_is_penguina: !8ball is Kiku food? @nootie: @penu_is_penguina As I see it, yes."
          />
          <figcaption>
            <ExternalLink href="https://discordapp.com/users/152182589484957697">
              <small>by P.È.N.G.U</small>
            </ExternalLink>
          </figcaption>
        </figure>
      </div>
      <p>
        Determined to discover the truth, P.È.N.G.U went undercover to question
        those close to the Sea Bun. Nootie is Kiku's mother (model artist and
        designer). When asked in one of her streams whether Kiku is food, her
        own mother agreed that she is indeed edible.
      </p>
    </details>
  );
}

export default Nootie;
