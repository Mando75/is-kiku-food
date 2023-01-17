import styles from "./Footer.module.scss";
import ExternalLink from "../ExternalLink";
import classnames from "classnames";

function Footer() {
  return (
    <footer className={classnames(styles.footer)}>
      <div className="grid">
        <ul>
          <li>
            <small>
              Copyright {new Date().getFullYear()} - Definitely Not Mando0975
            </small>
          </li>
          <li>
            <small>
              Made with &#10084;&#65039;
              <span> - </span>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  style={{ borderWidth: 0 }}
                  src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                />
              </a>
            </small>
          </li>
        </ul>
        <div className={styles.kikuSocials}>
          <h6>Follow Kiku!</h6>
          <ul>
            <li>
              <ExternalLink href="https://twitch.tv/kikuvtuber">
                <small>Twitch</small>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://twitter.com/kikuvtuber">
                <small>Twitter</small>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://throne.me/kikuvtuber/">
                <small>Throne</small>
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className={styles.disclaimer}>
          <p>
            <small>
              This is an unofficial fan project for educational purposes only.
            </small>
          </p>
          <p>
            <small>We do not condone any attempts to eat the sea bun!</small>
          </p>
          <p>
            <a href="/credits">
              <small>Credits</small>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
