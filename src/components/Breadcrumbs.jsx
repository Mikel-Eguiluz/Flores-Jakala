import React from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "./Breadcrumbs.module.scss";
const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  const crumbs = pathnames.map((crumb) => crumb.split("-"));
  return (
    <ul className={classes.crumbs}>
      <li>
        <Link to="/">Home</Link>
      </li>
      {crumbs.map((crumb) => (
        <li key={crumb[0]}>
          <Link to={pathnames}>{decodeURIComponent(crumb.at(-1))}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
