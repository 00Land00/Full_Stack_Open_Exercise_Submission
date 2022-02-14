import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'

const App = () => {
  // we need states to store the data from the server
  const [countries, setCountries] = useState([])
  const [fC, setFC] = useState([])
  const [st, setST] = useState('')

  // we need effect to get the data from this link: https://restcountries.com/v3.1/all
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then((response => {
      setCountries(response.data)
    }))
  }, [])

  console.log(countries)

  // we need event handlers
  const handleSTChange = (event) => {
    setST(event.target.value)

    // filter out countries based on what we got in the event
    const countryIncludes = country => country.name.common.toUpperCase().includes(event.target.value.toUpperCase())
    const newFC = countries.filter(country => countryIncludes(country))
    setFC(newFC)
  }

  return (
    <div>
      find countries <input value={st} onChange={handleSTChange} />
      <Countries filteredCountries={fC} />
    </div>
  )
}

export default App
