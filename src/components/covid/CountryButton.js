import React from "react";
import covidStyle from "../../styles/content/covidStyle";

const CountryButton = ({ clickEventCountry, activeClass }) => {
  return (
    <div style={covidStyle.divStyle}>
      <ul style={covidStyle.bListUlStyle}>
        <li style={covidStyle.bListliStyle}>
          <button
            className={`${activeClass === "Japan" ? "menu-active" : ""}`}
            style={covidStyle.buttonStyle}
            value="Japan"
            onClick={clickEventCountry}
          >
            Japan
          </button>
        </li>
        <li style={covidStyle.bListliStyle}>
          <button
            className={`${activeClass === "Philippines" ? "menu-active" : ""}`}
            style={covidStyle.buttonStyle}
            value="Philippines"
            onClick={clickEventCountry}
          >
            Philippines
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CountryButton;
