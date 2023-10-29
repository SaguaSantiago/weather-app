import WeatherPageComponent from 'Components/WeatherPageComponent'

import fetchData from '../../../../../api/GetData'

export default function Weather(props) {
  return <WeatherPageComponent {...props} />
}

export async function getServerSideProps({ params }) {
  const { city, countryCode } = params
  const weatherData = await fetchData({
    lat: null,
    long: null,
    typeFetch: 'ubication',
    ubi: city,
    code: countryCode,
  })

  return {
    props: { ...weatherData },
  }
}
