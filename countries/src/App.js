import { useState, useEffect } from "react";
import axios from "axios";
import Query from "./components/Query";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]); //countries
  const [query, setQuery] = useState(""); //query for a country 

  
  

  //retrieve & store data from restcountries
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);
  console.log("Array of", countries.length, "countries");

  //update Query field
  const handleFilterChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Query query={query} handleFilterChange={handleFilterChange} />
      <br />
      <Countries countries={countries} query={query} />
    </div>
  );
};

export default App;
