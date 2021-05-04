import React, {useState} from 'react'

const viewCountry = (country) => {
  return (
    <>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>

      <h3>languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt={`flag of ${country.name}`} width={200} />
    </>
  )
}

const Countries = ({filteredCountries}) => {
  const [showingCI, setSCI] = useState(filteredCountries.map(country => false))
  if(filteredCountries.length > 10) {
    return <div>{'Too many matches, specify another filter'}</div>
  }

  const handleCIShow = (index) => {
    const SCI = {...showingCI}
    SCI[index] = true
    setSCI(SCI)
  }
  const handleCIHide = (index) => {
    const SCI = {...showingCI}
    SCI[index] = false
    setSCI(SCI)
  }

  if(filteredCountries.length === 0) {
    return <div>{'No matching results, try another filter'}</div>
  }
  if(filteredCountries.length === 1) {
    return viewCountry(filteredCountries[0])
  }

  const fC = filteredCountries.map((country, index) => {
    return (
      <div key={country.numericCode}>
        {country.name} <button onClick={showingCI[index] ? () => handleCIHide(index) : () => handleCIShow(index)}>{showingCI[index] ? 'hide' : 'show'}</button>
        {showingCI[index] ? viewCountry(country) : undefined}
      </div>
    )
  })
  return <div>{fC}</div>
}

export default Countries