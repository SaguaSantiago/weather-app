import { fetchOData } from './FetchOpenApi'

const fetchTomorrowApi = ({ location }) =>
  fetch(
    `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1h&timesteps=1d&units=metric&apikey=EOIu2l99IT9iB8nDjOYd5WPn0lNwbs2d`,
  ).then((res) => res.json())

export default async function fetchData({ lat, long, ubi, typeFetch, code }) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let oData = await fetchOData({ lat, long, ubi, code, typeFetch })
  let tData = await fetchTomorrowApi({ location: oData.week.city.name || `${lat},${long}` })
  let data = {
    week: tData.timelines.daily.map((e) => {
      let dayId = new Date(e.time).getDay()
      let allHours = tData.timelines.hourly.filter((e, i) => {
        let hourDay = new Date(e.time).getDay()
        return hourDay === dayId
      })

      return { ...e, day: days[dayId], dayId, allHours }
    }),
    current: oData.current,
  }
  let weekArr = data.week.map((e) => {
    const newAllHours = e.allHours.map((h) => {
      let icon = null
      let value = 100
      const hDate = new Date(h.time)
      const differenceValues = oData.week.list.map((l) => {
        const lDate = new Date(l.dt_txt)
        return {
          value: Math.abs(hDate.getHours() - lDate.getHours()),
          icon: l.weather[0].icon,
        }
      })
      differenceValues.forEach((d) => {
        if (d.value < value) {
          icon = d.icon
          value = d.value
        }
      })
      return { ...h, icon }
    })
    return { ...e, allHours: newAllHours }
  })

  weekArr = weekArr.map((e) => {
    let acc = {}
    let actIcon = null
    let actAppearance = 0
    e.allHours.forEach((h) => {
      acc[h.icon] = acc[h.icon] ? acc[h.icon]++ : 1
    })
    Object.keys(acc).forEach((i) => {
      let appearance = acc[i]
      if (appearance > actAppearance) {
        actAppearance = appearance
        actIcon = i
      }
    })
    return { ...e, icon: actIcon }
  })
  return { ...data, week: weekArr }
}
