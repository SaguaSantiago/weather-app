import { useState } from 'react'

import CurrentWeatherSection from 'Components/CurrentWeatherSection'
import DaysForecast from 'Components/DaysForecast'

import { Container, styled } from '@mui/material'

const StyledContainer = styled(Container)`
  background: linear-gradient(90deg, rgba(26, 28, 42, 0.95) 25%, rgba(52, 58, 75, 0.5) 100%),
    url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  min-height: 100vh;
`

export default function WeatherPageComponent ({week, current}) {
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