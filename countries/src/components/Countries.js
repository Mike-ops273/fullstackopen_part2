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
        <SingleCountry queryCountries={queryCountries} />
      </>
    );
  }
};

const SingleCountry = ({ queryCountries }) => {
  return (
    <>
      {console.log("length inside", queryCountries.length)}
      {console.log(queryCountries)}

      {queryCountries.map((country) => (
        <ul key={country.name.common}>
          <h2>{country.name.common}</h2>
          <li>capital {country.capital}</li>
          <li>area: {country.area}</li>
        </ul>
      ))}
      <h2>Languages</h2>
      {console.log(queryCountries[0].languages)}
      {/*queryCountries[0].languages*/}
      {Object.values(queryCountries[0].languages).map((value, index) => {
        return (
          <div key={index}>
            <p>{value}</p>
          </div>
        );
      })}
      <h1>{/*queryCountries[0].flag*/}</h1>
      <img src={queryCountries[0].flags.png} />
    </>
  );
};

export default Countries;
