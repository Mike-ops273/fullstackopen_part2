//show countries
const Countries = ({ countries, query }) => {
  const reg = new RegExp(query, "i");
  let queryCountries = countries.filter((country) =>
    country.name.common.match(reg)
  );
  //show empty list when no query specified
  console.log(countries);
  if (query == "") {
    return <>{""}</>;
  } else if (queryCountries.length > 10) {
    //if too many results
    return <>Too many countries, please be more specific</>;
  } else if (queryCountries.length <= 10 && queryCountries.length > 1) {
    //if 10 results or less
    console.log("in here");
    console.log(queryCountries);
    return (
      <>
        {queryCountries.map((country) => (
          <ul key={country.name.common}>{country.name.common}</ul>
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
