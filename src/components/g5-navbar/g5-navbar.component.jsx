import { Link } from "react-router-dom";

import { ReactComponent as AsArLogoLgWt } from "../../assets/asar-logo.svg";

import "./g5-navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="g5-navbar">
      <Link to="/">
        <i className="bi bi-house-door"></i> G5 Home
      </Link>
      <Link to="/box-one">
        <i className="bi bi-calendar-week"></i> Box One
      </Link>
      <Link to="/box-two">
        <i className="bi bi-calendar-week"></i> Box Two
      </Link>
      <Link to="/box-three">
        <i className="bi bi-calendar-week"></i> Box Three
      </Link>
      <Link to="/box-four">
        <i className="bi bi-calendar-week"></i> Box Four
      </Link>
      <Link to="/box-five">
        <i className="bi bi-calendar-week"></i> Box Five
      </Link>
      <Link to="/archive">
        <i className="bi bi-archive"></i> Archive
      </Link>
      <div style={{ minWidth: "100%" }}>
        <AsArLogoLgWt />
      </div>
    </div>
  );
};

export default Navbar;
