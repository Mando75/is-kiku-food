import Breadcrumbs, { Breadcrumb } from "../components/Breadcrumbs";
import { HomeCrumb } from "./home";
import ExternalLink from "../components/ExternalLink";

const breadcrumbs: Array<Breadcrumb> = [HomeCrumb];
function credits() {
  return (
    <main>
      <Breadcrumbs paths={breadcrumbs} />
      <article>
        <header>
          We would like to thank the following individuals for granting us
          permission to use their creations on this site
        </header>
        <ul>
          <li>
            <ExternalLink href="https://twitter.com/ArchangelNevaeh">
              Nevaeh Archangel
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://twitter.com/penprah">
              Penprah
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discordapp.com/users/152182589484957697">
              P.È.N.G.U
            </ExternalLink>
          </li>
          <li>All the clippers who helped create an archive of Kiku footage</li>
        </ul>
        <footer>
          We would also like to thank Kiku for being a great sport despite
          chat's many, many, <strong>many</strong> attempts to snack on her.
        </footer>
      </article>
    </main>
  );
}

export default credits;
