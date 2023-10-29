import WeatherPageComponent from 'Components/WeatherPageComponent'
import fetchData from 'api/GetData'

export default function Weather(props) {
  return <WeatherPageComponent {...props} />
}

export async function getServerSideProps({ params }) {
  const { lat, long } = params
  const weatherData = await fetchData({ lat, long, typeFetch: 'coords', ubi: null, code: null })
  return {
    props: { ...weatherData },
  }
}
