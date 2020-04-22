import React, { useState, useEffect } from "react";
import CountryButton from "./CountryButton";
import ContentApiDetails from "./ContentApiDetails";
import { IconSpinner } from "../Icon/IconList";

const CovidPage = () => {
  const [covid, setCovid] = useState({});
  const [countryName, setCountryName] = useState("Japan");
  const [loading, setLoading] = useState(false);
  const url = `https://covid-api-v1-2.herokuapp.com/covidUpdate/api/v1?country=${countryName}`;

  useEffect(() => {
    const fetchCovid = () => {
      setLoading(true);
      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          setCovid(data.covid) || setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchCovid();
  }, [url]);

  const handleOnclick = (e) => {
    e.preventDefault();
    setCountryName(e.target.value);
  };

  const spinStyle = {
    display: "block",
    textAlign: "center",
    fontSize: "100px",
    marginTop: "60px",
  };
  return (
    <div className="main-wrapper-content">
      <div className="container">
        <CountryButton
          clickEventCountry={handleOnclick}
          activeClass={countryName}
        />
        {Object.keys(covid).length === 0 ? (
          <IconSpinner propStyle={spinStyle} />
        ) : (
          <ContentApiDetails covidDetails={covid} loadingIcon={loading} />
        )}
      </div>
    </div>
  );
};

export default CovidPage;
