import WeatherPageComponent from 'Components/WeatherPageComponent'

import { getAllData } from 'api/getData'

export default function Weather(props) {
  return <WeatherPageComponent {...props} />
}

export async function getServerSideProps({ params }) {
  const { lat, long, } = params
  const weatherData = await getAllData(lat, long, 'coords')

  return {
    props: { ...weatherData },
  }
}
