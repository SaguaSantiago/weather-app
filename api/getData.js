import axios from 'axios'

async function fetchData(param1, param2, typeFetch) {
  const KEY = 'c92920c4c4672f3162c2c7e7680db340'
  const PARAMS =
    typeFetch === 'coords'
      ? `lat=${param1}&lon=${param2}&lang=en&units=metric&appid=${KEY}`
      : `q=${param1},${param2}&lang=en&units=metric&appid=${KEY}`

  let data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?${PARAMS}`)
  let currentData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${PARAMS}`)

  return {
    week: data,
    current: currentData,
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

  console.log(data)
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
