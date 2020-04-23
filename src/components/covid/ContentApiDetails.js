import React from "react";
import covidStyle from "../../styles/content/covidStyle";
import CovidLineChart from "./CovidChart";
import DisplayDetail from "./DisplayDetail";
import ToDoInstruction from "./ToDoInstruction";

const ContentApiDetails = ({ covidDetails, loadingIcon }) => {
  const { Latest } = covidDetails;
  const latestDate = Latest[Latest.length - 1];
  const { country, covid_date } = latestDate;

  return (
    <div>
      <h1 style={covidStyle.h1Style}>COVID-19 in {country}</h1>
      <h5 style={covidStyle.h5Style}>Last updated: {covid_date}</h5>
      <DisplayDetail covidDetails={covidDetails} loadingIcon={loadingIcon} />
      <CovidLineChart covidDetails={covidDetails} />
      <ToDoInstruction />
    </div>
  );
};

export default ContentApiDetails;
