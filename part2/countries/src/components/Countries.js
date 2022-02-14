import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ViewWeatherData = ({country}) => {
  const [newWD, setWD] = useState({
    temp: NaN, w_spe: NaN, w_dir: '', w_img: '', w_desc: ''
  })

  const handleWDChange = (wd) => {
    console.log(wd)

    const WD = {
      temp: wd.current.temperature,
      w_spe: wd.current.wind_speed,
      w_dir: wd.current.wind_dir,
      w_img: wd.current.weather_icons[0],
      w_desc: wd.current.weather_description
    }
    setWD(WD)
  }

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital
    }

    axios
    .get(`http://api.weatherstack.com/current`, {params})
    .then(response => handleWDChange(response.data))
  }, [country])

  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <div><strong>temperature:</strong> {newWD.temp} Celcius</div>
      <div><img src={newWD.w_img} alt={newWD.w_desc + ' weather'} /></div>
      <strong>wind:</strong> {newWD.w_spe} mph direction {newWD.w_dir}
    </div>
  )
}

const ViewCountry = ({country}) => {
  console.log(country)
  var countryLangs = []
  for (const property in country.languages) {
    countryLangs = [...countryLangs, country.languages[property]]
  }
  console.log(countryLangs)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital.map(c => <li key={c}>{c}</li>)}</div>
      <div>population {country.population}</div>

      <h3>languages</h3>
      <ul>
        {countryLangs.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} width={200} />
    </div>
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
    return (
      <div>
        <ViewCountry country={filteredCountries[0]} />
        <ViewWeatherData country={filteredCountries[0]} />
      </div>
    )
  }

  const fC = filteredCountries.map((country, index) => {
    return (
      <div key={country.ccn3}>
        {country.name.common} <button onClick={showingCI[index] ? () => handleCIHide(index) : () => handleCIShow(index)}>{showingCI[index] ? 'hide' : 'show'}</button>
        {showingCI[index] ? <ViewCountry country={country} /> : undefined}
      </div>
    )
  })

  return <div>{fC}</div>
}

export default Countries