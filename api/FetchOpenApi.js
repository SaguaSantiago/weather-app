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

export const getAllData = async (param1, param2, typeFetch) => {
  let todayId = null
  let lastDay = null
  let days = [
    { name: 'Sunday', data: [], temp: null, weather: null, id: '0' },
    { name: 'Monday', data: [], temp: null, weather: null, id: '1' },
    { name: 'Tuesday', data: [], temp: null, weather: null, id: '2' },
    { name: 'Wednesday', data: [], temp: null, weather: null, id: '3' },
    { name: 'Thursday', data: [], temp: null, weather: null, id: '4' },
    { name: 'Friday', data: [], temp: null, weather: null, id: '5' },
    { name: 'Saturday', data: [], temp: null, weather: null, id: '6' },
  ]
  let data = await fetchData(param1, param2, typeFetch)

  data.week.data.list.forEach((weather, i) => {
    const date = new Date(weather.dt_txt)
    const day = date.getDay()

    if (day !== lastDay && lastDay !== null) {
      const LAST_DAY_OBJECT = days[lastDay]
      LAST_DAY_OBJECT.temp = Math.trunc(LAST_DAY_OBJECT.temp / LAST_DAY_OBJECT.data.length)
      const { weather } = LAST_DAY_OBJECT.data[Math.trunc(LAST_DAY_OBJECT.data.length / 2)]
      LAST_DAY_OBJECT.weather = weather[0]
    }

    lastDay = day
    days[day].data.push(weather)
    days[day].temp += weather.main.temp
    if (i === 0) {
      todayId = day
    }
  })

  const arr1 = days.slice(todayId)
  const arr2 = days.slice(0, todayId)

  data = { current: data.current.data, week: [...arr1, ...arr2] }

  return data
}
