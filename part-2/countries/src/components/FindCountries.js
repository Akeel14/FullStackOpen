import React from 'react'

export default function FindCountries({ filter, setFilter }) {
  return (
    <div>
        find countries: {" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}
