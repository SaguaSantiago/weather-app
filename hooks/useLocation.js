import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export const useLocation = ()=> {
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleChange = (e) => {
    setLocation(e.target.value)
  }
  const handleClick = () => {
    const text = location
    let arr = text.split(',')
    arr = arr.map((e) => e.toLowerCase())

    const [city, country] = arr
    router.push(`/w/ubication/${city}/${country}`)
    setLoading(true)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position
      const { latitude: lat, longitude: long } = coords

      router.push(`/w/coords/${lat}/${long}`)
      setLoading(true)
    })
  }, [])

  return {
    handleChange,
    handleClick,
    location,
    loading
  }
}