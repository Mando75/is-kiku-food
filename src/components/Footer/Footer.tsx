import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
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
        <li></li>
      </ul>
    </footer>
  );
}

export default Footer;
