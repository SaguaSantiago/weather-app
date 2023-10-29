import axios from 'axios'

export const fetchOData = async ({ lat, long, ubi, code, typeFetch }) => {
  const KEY = process.env.DB_API_KEY
  const PARAMS =
    typeFetch === 'coords'
      ? `lat=${lat}&lon=${long}&lang=en&units=metric&appid=${KEY}`
      : `q=${ubi},${code}&lang=en&units=metric&appid=${KEY}`

  let data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?${PARAMS}`)
  let currentData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${PARAMS}`)

  return {
    week: data.data,
    current: currentData.data,
  }
}
