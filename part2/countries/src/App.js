import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  // we need states to store the data from the server
  const [countries, setCountries] = useState([])
  const [fC, setFC] = useState([])
  const [st, setST] = useState('')

  // we need effect to get the data from this link: https://restcountries.eu/rest/v2/all
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response => {
        setCountries(response.data)
      }))
  }, [])

  // we need event handlers
  const handleSTChange = (event) => {
    setST(event.target.value)

    // filter out countries based on what we got in the event
    const countryIncludes = country => country.name.toUpperCase().includes(event.target.value.toUpperCase())
    const newFC = countries.filter(country => countryIncludes(country))
    setFC(newFC)
  }

  return (
    <div>
      find countries <input value={st} onChange={handleSTChange} />
      <Countries filteredCountries={fC} />
    </div>
  ) // 
}

const Countries = ({filteredCountries}) => {
  let fCD = filteredCountries.map(country => <div key={country.numericCode}>{country.name}</div>)

  if(filteredCountries.length > 10) {
    fCD = 'Too many matches, specify another filter'
  }
  if(filteredCountries.length === 0){
    fCD = 'No matching results, try another filter'
  }

  if(filteredCountries.length === 1){
    fCD = (
      <>
        <h1>{filteredCountries[0].name}</h1>
        <div>capital {filteredCountries[0].capital}</div>
        <div>population {filteredCountries[0].population}</div>

        <h3>languages</h3>
        <ul>
          {filteredCountries[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={filteredCountries[0].flag} alt={`flag of ${filteredCountries[0].name}`} width={200} />
      </>
    )
  }

  return (
    <div>
      {fCD}
    </div>
  )
}

export default App
