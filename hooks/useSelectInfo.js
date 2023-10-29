import { SelectedDataContext } from 'context/SelectedData'
import { useContext } from 'react'
import { useData } from './useData'

export const useSelectInfo = () => {
  const { selected, setSelected } = useContext(SelectedDataContext)
  const { weather } = useData()

  const changeDayDetails = (i) => {
    let dayInfo = weather.week.find((e) => e.dayId == i)
    let allHours = dayInfo.allHours
    let hourInfo = allHours[0]

    setSelected((s) => ({ ...s, hourInfo, day: i, allHours }))
  }

  const changeHourDetails = (time) => {
    const hourInfo = selected.allHours.find((e) => e.time === time)
    setSelected((s) => ({ ...s, hourInfo }))
  }
  return { changeDayDetails, changeHourDetails, selected }
}
