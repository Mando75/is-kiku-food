import { Link, LinkProps } from "react-router-dom";
import classnames from "classnames";

export type Breadcrumb = {
  label: string;
  to: LinkProps["to"];
};

interface IBreadcrumbsProps {
  paths: Array<Breadcrumb>;
  className?: string;
}

function Breadcrumbs(props: IBreadcrumbsProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={classnames("breadcrumbs", props.className)}
    >
      <ul>
        {props.paths.map((path) => (
          <li key={path.label}>
            <Link to={path.to}>{path.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
