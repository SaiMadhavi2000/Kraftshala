import './index.css'

const Weather = ({weatherData}) => {
  if (!weatherData) return null

  const {name, main, weather, sys} = weatherData
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  return (
    <div className="bg-container">
      <div className="container">
        <h2 className="name">{name}</h2>
        <img src={iconUrl} alt={weather[0].description} />
        <p>
          Temperature: {Math.floor(main.temp - 273.15)}°C (
          {Math.floor(((main.temp - 273.15) * 9) / 5 + 32)}°F)
        </p>
        <p>Description: {weather[0].description}</p>
        <p>
          Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()} | Sunset:{' '}
          {new Date(sys.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}

export default Weather
