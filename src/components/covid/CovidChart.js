import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment-timezone";

const divStyle = {
  position: "relative",
  width: "100%",
  marginTop: "30px",
};

const CovidLineChart = ({ covidDetails }) => {
  const currentYear = moment().tz("Asia/Tokyo").format("YYYY");
  const currentMonth = moment().tz("Asia/Tokyo").format("MMMM");
  const currentMonthL = moment().tz("Asia/Tokyo").format("L");

  const { Latest: latest } = covidDetails;

  const filterCurrentMonth = latest.filter(
    (latests) =>
      currentMonthYear(latests.covid_date) === currentMonthYear(currentMonthL)
  );

  const positiveArray = [];
  const deathArray = [];
  const recoveriesArray = [];

  for (let filterCurrentMonths of filterCurrentMonth) {
    positiveArray.push(filterCurrentMonths.covid_positive);
    deathArray.push(filterCurrentMonths.covid_death);
    recoveriesArray.push(filterCurrentMonths.covid_recovered);
  }

  const graphDetails = {
    labels: getDays(currentMonth, currentYear),
    datasets: [
      {
        label: "Positives",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#f2f2f2",
        borderColor: "#FF8C00",
        borderWidth: 1,
        data: positiveArray,
      },
      {
        label: "Deaths",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#000000",
        borderColor: "#B22222",
        borderWidth: 1,
        data: deathArray,
      },
      {
        label: "Recoveries",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#000000",
        borderColor: "#006400",
        borderWidth: 1,
        data: recoveriesArray,
      },
    ],
  };
  return (
    <div style={divStyle}>
      <Line
        data={graphDetails}
        options={{
          title: {
            display: true,
            text: `Covid Case Graph of ${currentMonth}`,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </div>
  );
};

const currentMonthYear = (date) => {
  const splitDate = date.split("/");
  splitDate.splice(1, 1);
  return splitDate.join("");
};

const getDays = (month, year) => {
  const dateArray = [];
  const monthYear = moment(year + "-" + month, "YYYY-MMM");
  for (
    const end = moment(monthYear).add(1, "month");
    monthYear.isBefore(end);
    monthYear.add(1, "day")
  ) {
    dateArray.push(monthYear.format("D-ddd"));
  }
  return dateArray;
};

export default CovidLineChart;
