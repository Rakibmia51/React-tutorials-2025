import React, { useEffect, useState } from 'react'

import Countries from './components/Countries';
import "./index.css";
import "./app.css";
import Country from './components/Country';
import Search from './components/Search';



const url = "https://restcountries.com/v3.1/all?fields=name,flags";
const COUNTRY_APP = () => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    
    const fetchData = async (url) => {
        setLoading(true);

        try {
            const response = await fetch(url);
             if(!response.ok){
                  throw Error("Fecthing is not successful")
                }
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data);
            setLoading(false)
            setError(null)

            console.log(countries)

        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(()=>{
        fetchData(url)
    },[])

    const handleRemoveCountry =(name)=>{
        const filter = filteredCountries.filter((country)=> country.name.common !== name);
        setFilteredCountries(filter)
    }

    const handleSeach = (searchValue)=>{
       let value = searchValue.toLowerCase();
       const newCountries = countries.filter((country)=>{
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value)
       })
       setFilteredCountries(newCountries);
    }

  return ( 
    <>
        <h1>Country App</h1>
        <Search onSearch ={handleSeach}/>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {countries && <Countries countries = {filteredCountries} onRemoveCountry = {handleRemoveCountry} />}
    </>
  )
}

export default COUNTRY_APP