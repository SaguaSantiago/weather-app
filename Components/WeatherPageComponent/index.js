import { useState } from 'react'

import CurrentWeatherSection from 'Components/CurrentWeatherSection'
import DaysForecast from 'Components/DaysForecast'

import { Container, styled } from '@mui/material'

const StyledContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
`

export default function WeatherPageComponent({ week, current }) {
  const [detailsOpen, setDetailsOpen] = useState(false)
  return (
    <StyledContainer
      className='customScrollbar'
      sx={{ overflow: !detailsOpen ? 'hidden' : 'auto' }}
    >
      <CurrentWeatherSection detailsOpen={detailsOpen} data={current} />
      <DaysForecast open={detailsOpen} setOpen={setDetailsOpen} data={week} />

      {/* TODO: a menu that changes the language */}
      {/* <TranslateIcon
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            opacity: !detailsOpen ? 1 : 0,
            display: detailsOpen && 'none',
            transition: 'opacity .4s',
          }}
        /> */}
    </StyledContainer>
  )
}
