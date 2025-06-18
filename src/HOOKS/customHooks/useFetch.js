import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // setTimeout(()=>{

              fetch(url)
              .then((res)=>{

                if(!res.ok){
                  throw Error("Fecthing is not successful")
                }

                  return res.json()
              })
              .then((data)=>{
                  setData(data);
                  // console.log(todos)
                  setIsLoading(false)
                  setError(null)
              })
              .catch((error)=>{
                  setError(error.message)
                  setIsLoading(false)
              })

        // },2000)

    },[url]);
    return {data, isLoading, error}
}

export default useFetch