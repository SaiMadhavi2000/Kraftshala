import {useState} from 'react'
import axios from 'axios'
import './App.css' 
import Weather from './components/Weather'

function App() {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [errorMessage, setError] = useState(null)

  const handleSearch = async e => {
    e.preventDefault()
    if (!location) return

    try {
      const API_KEY = '84f1062ded490ce12eab36131c350d43' 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      const response = await axios.get(url)
      console.log(response)
      if (response.status === 200) {
        setWeatherData(response.data)
        setError(null)
      } else {
        throw new Error('Failed to fetch weather data')
      }
    } catch (error) {
      setError('Error fetching weather data. Please try again.')
      setWeatherData(null) // Clear previous weather data on error
    } finally {
      setLocation('') // Clear input field after search
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Weather App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter city or zip code"
          />
          <button type="submit">Search</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {weatherData && <Weather weatherData={weatherData} />}
      </header>
    </div>
  )
}

export default App
