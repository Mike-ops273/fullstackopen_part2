//the purpose of this component is to show countries

import WeatherData from "./WeatherData";

const Countries = ({ countries, query, setQuery }) => {
  const reg = new RegExp(query, "i"); //assists in querry field

  //store filtered countries in queryCountries
  let queryCountries = countries.filter((country) =>
    country.name.common.match(reg)
  );

  //button will set the selected country as query via event.target.value
  const clickedShowBtn = (event) => {
    console.log("clicked show button!");
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  //the display logic
  //show empty list when no query specified
  console.log("return of promise:", countries);
  if (query == "") {
    return <>{""}</>;
  } else if (queryCountries.length > 10) {
    //if too many results, encourage specification
    return <>Too many countries, please be more specific</>;
  } else if (queryCountries.length <= 10 && queryCountries.length > 1) {
    //if 10 results or less, display matched countries
    console.log(queryCountries);
    return (
      <>
        {queryCountries.map((country, index) => (
          <ul key={country.name.common}>
            {country.name.common}
            <button
              onClick={clickedShowBtn}
              index={index}
              value={country.name.common}
            >
              show
            </button>
          </ul>
        ))}
      </>
    );
  } else if (queryCountries.length == 1) {
    //for when the query results in a singular country
    return (
      <>
        <SingleCountry queryCountry={queryCountries[0]} />
      </>
    );
  } else {
    //when there are no matches
    return <p>No matches</p>;
  }
};

//renders a single country with facts and a flag
const SingleCountry = ({ queryCountry }) => {
  return (
    <>
      {console.log(queryCountry)}
      <h2>{queryCountry.name.common}</h2>
      <li>capital: {queryCountry.capital}</li>
      <li>area: {queryCountry.area}</li>
      <h2>Languages</h2>
      {Object.values(queryCountry.languages).map((value, index) => {
        return (
          <div key={index}>
            <p>{value}</p>
          </div>
        );
      })}
      <img src={queryCountry.flags.png} alt={"flag"} />
      <br />
      <WeatherData queryCountry={queryCountry} />
    </>
  );
};

export default Countries;
