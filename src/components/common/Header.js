import React from "react";
import { NavLink } from "react-router-dom";
import headerStyle from "../../styles/header/HeaderStyle";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <nav>
          <ul style={headerStyle.ulStyle}>
            <li style={headerStyle.liStyle}>
              <NavLink
                to="/"
                style={headerStyle.aStyle}
                activeStyle={headerStyle.activeStyleLink}
                exact
              >
                Home
              </NavLink>
            </li>
            <li style={headerStyle.liStyle}>
              <NavLink
                style={headerStyle.aStyle}
                to="/covid"
                activeStyle={headerStyle.activeStyleLink}
              >
                Covid Tracker
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
