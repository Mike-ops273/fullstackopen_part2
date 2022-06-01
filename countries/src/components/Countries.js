//the purpose of this component is to show countries
import { useState } from "react";

const Countries = ({ countries, query }) => {
  const [countryView, setCountryView] = useState({}); //object for showing country view

  const reg = new RegExp(query, "i"); //assists in querry field
  let queryCountries = countries.filter((country) => //store filtered countries in queryCountries
    country.name.common.match(reg)
  );

  //using countryView, set & show select country data
  const clickedShow = () => {
    const countryViewObject = {
      name: queryCountries[index].name.common, //doesnt work
      language: "language", 
      population: "population", 
      flag: "flag",
    }; 
    setCountryView(countryViewObject);
  }

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
            <button onClick={clickedShow} index={index}>show</button> 
            <br />
            {countryView.name}
          </ul>
        ))}
      </>
    );
  } else if (queryCountries.length == 1) {
    //a singular result
    return (
      <>
        <SingleCountry queryCountry={queryCountries[0]} /> 
      </>
    );
  } else { 
    //when there are no matches
    return (
      <p>No matches</p>
    )
  }
}; 

const SingleCountry = ({queryCountry}) => {
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
      <img src={queryCountry.flags.png} />
    </>
  )
}

export default Countries;
