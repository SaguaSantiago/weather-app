import { useState, useEffect } from 'react'

import DayPaper from './DayPaper'
import HourForecast from './HourForecast'

import WeatherDetails from 'Components/WeatherDetails'

import Carousel from 'react-elastic-carousel'

import { Box, Grid, IconButton, Paper, useMediaQuery } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const BREAKPOINTS = [
  { width: 1, itemsToShow: 3 },
  { width: 500, itemsToShow: 4 },
  { width: 600, itemsToShow: 5 },
]

export default function DaysForecast({ open, setOpen, data }) {
  const [daySelected, setDaySelected] = useState(data[0].id)
  const [hourSelected, setHourSelected] = useState(data[0].data[0])
  const [hoursPerDay, setHoursPerDay] = useState(data.find((e) => e.id === daySelected))
  const arrowQuery = useMediaQuery('(max-width: 440px)')
  useEffect(() => {
    setHoursPerDay(data.find((e) => e.id === daySelected))
  }, [daySelected])

  useEffect(() => {
    setHourSelected(hoursPerDay.data[0])
  }, [hoursPerDay])

  return (
    <Box
      height='100vh'
      maxWidth='800px'
      width='100%'
      right='50%'
      position='absolute'
      bottom={!open ? '-550px' : '0'}
      sx={{ transform: 'translateX(50%)', transition: 'bottom .6s' }}
    >
      <Box position='absolute' left='50%' top='-48px' sx={{ transform: 'translateX(-50%)' }}>
        <IconButton
          onClick={() => setOpen(!open)}
          size='large'
          sx={{ backgroundColor: '#b9bac340' }}
        >
          <KeyboardArrowUpIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>

      <Box
        position='absolute'
        right='10px'
        top='10px'
        sx={{ opacity: open ? '1' : '0', transition: 'opacity .3s' }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          size='small'
          sx={{ backgroundColor: '#b9bac340' }}
        >
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>

      <Paper sx={{ borderRadius: '35px 35px 0 0', pt: 5.3, minHeight: '100%' }}>
        <Box width='100%' display='flex' flexDirection='column' alignItems='center' gap='40px'>
          <Grid
            sx={{ height: '128px' }}
            columnGap={2}
            container
            justifyContent='center'
            alignItems='center'
          >
            {data.map((weatherDay, i) => {
              if (i > 3) return null
              return (
                <Grid item key={weatherDay.name}>
                  <DayPaper
                    daySelected={[daySelected, setDaySelected]}
                    isToday={i === 0}
                    weatherDay={weatherDay}
                  />
                </Grid>
              )
            })}
          </Grid>

          <Box
            display='flex'
            gap='10px'
            alignItems='center'
            justifyContent='center'
            flexWrap='wrap'
            width='100%'
          >
            <Carousel
              itemsToShow={8}
              pagination={false}
              showArrows={!arrowQuery}
              breakPoints={BREAKPOINTS}
            >
              {hoursPerDay.data.map((e) => {
                const date = new Date(e.dt_txt)
                const hour = `${date.getHours()} hs`
                return (
                  <HourForecast
                    key={e.dt_txt}
                    hourSelected={[hourSelected, setHourSelected]}
                    data={{ ...e, hour }}
                  />
                )
              })}
            </Carousel>
          </Box>

          <WeatherDetails details={hourSelected} />
        </Box>
      </Paper>
    </Box>
  )
}
