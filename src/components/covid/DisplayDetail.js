import React from "react";
import {
  IconSpinner,
  IconPositive,
  IconRecovery,
  IconDeath,
} from "../Icon/IconList";
import LatestDetail from "./LatestDetail";
import covidStyle from "../../styles/content/covidStyle";

const DisplayDetail = ({ covidDetails, loadingIcon }) => {
  const { TotalPositive, TotalDeath, TotalRecovered, Latest } = covidDetails;

  const latestDate = Latest[Latest.length - 1];

  const { covid_positive, covid_death, covid_recovered } = latestDate;

  return (
    <div>
      <ul>
        <li style={covidStyle.dataDetailStyle}>
          <h3 style={covidStyle.h3Style}>
            <IconPositive />
            Cases
          </h3>
          {loadingIcon ? (
            <IconSpinner />
          ) : (
            <LatestDetail
              totalData={TotalPositive}
              singleData={covid_positive}
            />
          )}
        </li>
        <li style={covidStyle.dataDetailStyle}>
          <h3 style={covidStyle.h3Style}>
            <IconDeath />
            Deaths
          </h3>
          {loadingIcon ? (
            <IconSpinner />
          ) : (
            <LatestDetail totalData={TotalDeath} singleData={covid_death} />
          )}
        </li>
        <li style={covidStyle.dataDetailStyle}>
          <h3 style={covidStyle.h3Style}>
            <IconRecovery />
            Recoveries
          </h3>
          {loadingIcon ? (
            <IconSpinner />
          ) : (
            <LatestDetail
              totalData={TotalRecovered}
              singleData={covid_recovered}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default DisplayDetail;
