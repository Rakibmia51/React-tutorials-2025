import React, { useEffect, useState } from 'react'



const url = "https://restcountries.com/v3.1/all?fields=name";
const COUNTRY_APP = () => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);

    const fetchData = async (url) => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setLoading(false)
            setError(null)

            console.log(countries)

        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    useEffect(()=>{
        fetchData(url)
    },[])

  return (
    <div>app</div>
  )
}

export default COUNTRY_APP