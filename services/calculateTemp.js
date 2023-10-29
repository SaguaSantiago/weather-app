export const calculateTemp = (weather) => {
  let t = 0
  // console.log(weather.data)
  weather.data.forEach((e, i, a) => {
    t = t + e.main.feels_like
    if (i + 1 == a.length) {
      t = t / a.length
    }
  })
  return {
    min: Math.round(Math.min(...weather.data.map((e) => e.main.temp_min))),
    max: Math.round(Math.max(...weather.data.map((e) => e.main.temp_max))),
    feelsLike: Math.round(t),
  }
}
