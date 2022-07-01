import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FindCountries from "./components/FindCountries";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  
  
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }
  useEffect(hook, []);

  return (  
    <>
    <FindCountries filter={filter} setFilter={setFilter}/>
    <Countries countries={countries} filter={filter} />
    </>
  );
};

export default App;
