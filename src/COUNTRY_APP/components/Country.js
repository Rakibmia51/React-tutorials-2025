import React from 'react'

import style from './country.module.css'

const Country = (props) => {
    const {country} = props
    const {name, flags, capital, population, area} = country;

    const handleRemoveCountry =(name)=>{
        props.onRemoveCountry(name)
    }

  return (
    <article className={style.country}>
       <div>
             <img src={flags.png} alt={name.common} className={style.flag}/>
            <h2>Country Name: {name.common}</h2>
            <p>Population :{name.official}</p>
            <p>Area :{area}</p>
       </div>
       <button className={style.btn} onClick={()=>{
        handleRemoveCountry(name.common)
       }}>
            Remove Country
       </button>
    </article>
  )
}

export default Country