import WeatherPageComponent from 'Components/WeatherPageComponent'

import { getAllData } from 'api/getData'

export default function Weather(props) {
  return <WeatherPageComponent {...props} />
}

export async function getServerSideProps({ params }) {
  const { city, countryCode } = params
  const weatherData = await getAllData(city, countryCode, 'ubication')

  return {
    props: { ...weatherData },
  }
}
