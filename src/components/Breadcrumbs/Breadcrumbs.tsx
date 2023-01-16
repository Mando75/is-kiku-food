import { Link, LinkProps } from "react-router-dom";
import classnames from "classnames";

import "./Breadcrumbs.scss";

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
    <nav className={classnames("breadcrumbs", props.className)}>
      <ul>
        {props.paths.map((path) => (
          <li className="breadcrumb" key={path.label}>
            <Link to={path.to}>{path.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
