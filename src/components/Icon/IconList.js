import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import covidStyle from "../../styles/content/covidStyle";

const IconSpinner = ({ propStyle }) => (
  <span style={propStyle}>
    <FontAwesomeIcon icon="spinner" spin />
  </span>
);
const IconPositive = () => (
  <span style={covidStyle.posStyle}>
    <FontAwesomeIcon icon="sad-tear" />
  </span>
);
const IconRecovery = () => (
  <span style={covidStyle.recStyle}>
    <FontAwesomeIcon icon="grin-alt" />
  </span>
);
const IconDeath = () => (
  <span style={covidStyle.deStyle}>
    <FontAwesomeIcon icon="dizzy" />
  </span>
);

export { IconSpinner, IconPositive, IconRecovery, IconDeath };
