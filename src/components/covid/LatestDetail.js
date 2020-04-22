import React from "react";
import covidStyle from "../../styles/content/covidStyle";

const LatestDetail = ({ totalData, singleData }) => {
  return (
    <p style={covidStyle.pStyle}>
      {totalData}
      <span style={covidStyle.spanStyle}>( +{singleData} )</span>
    </p>
  );
};

export default LatestDetail;
