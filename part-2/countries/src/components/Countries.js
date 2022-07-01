import React from 'react'

export default function Countries(countries, filter) {
  return (
    <div>
        {/* if countries.length > 2 && countries.length < 10) || countries.length === 0  */}

       
            <h2>Countries</h2>

            <ul>
                {countries.map((country) => <li key={country.name}>{country.name}</li>)}
            </ul>


    </div>
  )
}

