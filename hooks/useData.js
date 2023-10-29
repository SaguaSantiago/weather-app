import { useContext, useEffect } from 'react'
import { DataContext } from 'context/Data'
import week from 'mock.json'

export const useData = (info) => {
  const current = info?.current
  const week = info?.week
  const { data, setData } = useContext(DataContext)
  const { detailsOpen, weather } = data
  useEffect(() => {
    if (week && current) {
      setData((s) => ({
        ...s,
        weather: {
          week,
          current,
        },
      }))
    }
  }, [])
  return { detailsOpen, weather, setData }
}
