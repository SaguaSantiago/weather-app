import { useData } from 'hooks/useData'
import { createContext, useState } from 'react'

export const SelectedDataContext = createContext()

export default function SelectedProvider({ children }) {
  const [selected, setSelected] = useState({
    day: null,
    allHours: [],
    hourInfo: null,
  })

  return (
    <SelectedDataContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedDataContext.Provider>
  )
}
