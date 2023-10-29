import { useContext, useEffect, useState } from 'react'

import CurrentWeatherSection from 'Components/CurrentWeatherSection'
import DaysForecast from 'Components/DaysForecast'
import TempGraphic from 'Components/TempGraphic'

import { Box, IconButton, useMediaQuery } from '@mui/material'
import DayPaper from 'Components/DaysForecast/DayPaper'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useData } from 'hooks/useData'
import { DataContext } from 'context/Data'
import { SelectedDataContext } from 'context/SelectedData'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

export default function WeatherPageComponent({ week, current }) {
  const { data, setData } = useContext(DataContext)
  const mobile = useMediaQuery('(max-width: 1000px)')
  const threeSlides = useMediaQuery('(min-width: 590px)')
  const { setSelected } = useContext(SelectedDataContext)
  useEffect(() => {
    setData((s) => ({ ...s, weather: { week, current } }))
    setSelected(() => {
      const date = new Date()
      const today = date.getDay()
      const allHours = week?.find((e, i) => e.dayId == today).allHours
      let hourInfo = allHours[0]
      return { day: today, hourInfo, allHours }
    })
  }, [])
  const [detailsOpen, setDetailsOpen] = useState(false)
  return mobile ? (
    <main>
      <Box
        component='section'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minWidth={detailsOpen ? '50vw' : '80vw'}
        sx={{ transition: 'min-width .5s' }}
        gap='30px'
      >
        <CurrentWeatherSection />
        <TempGraphic />
      </Box>
      <Box
        width='80%'
        minWidth='320px'
        margin='0 auto'
        justifyContent='center'
        component='section'
        mt={2}
      >
        <Swiper
          slidesPerView={threeSlides ? 3 : 1}
          modules={[Navigation, Scrollbar]}
          navigation
          style={{ padding: '20px 50px' }}
          scrollbar={{ draggable: true }}
        >
          {week.map((weatherDay, i) => {
            if (i > 3) return null
            return (
              <SwiperSlide style={{ height: '150px' }} item key={weatherDay.name}>
                <Box maxWidth='110px'>
                  <DayPaper isToday={i === 0} weatherDay={weatherDay} />
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
      <DaysForecast open={detailsOpen} />
    </main>
  ) : (
    <Box
      display='flex'
      justifyContent='space-between'
      position='relative'
      className='customScrollbar'
      sx={{ overflow: !detailsOpen ? 'hidden' : 'auto' }}
    >
      <Box
        component='section'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minWidth={detailsOpen ? '50vw' : '80vw'}
        sx={{ transition: 'min-width .5s' }}
        gap='30px'
      >
        <CurrentWeatherSection />
        <TempGraphic />
      </Box>
      <Box
        component='section'
        display='flex'
        sx={{ background: '#cccccc2f' }}
        height='100vh'
        width='50vw'
      >
        <Box
          position='relative'
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
          alignItems='start'
          p={3}
          height='100%'
        >
          <IconButton
            onClick={() => setDetailsOpen(!detailsOpen)}
            size='large'
            sx={{
              position: 'absolute',
              left: '-40px',
              transform: detailsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform .2s',
            }}
          >
            <ChevronLeftIcon htmlColor='white' />
          </IconButton>
          {week.map((weatherDay, i) => {
            if (i > 3) return null
            return (
              <Box item key={weatherDay.name}>
                <DayPaper isToday={i === 0} weatherDay={weatherDay} />
              </Box>
            )
          })}
        </Box>

        <DaysForecast open={detailsOpen} />
      </Box>
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
    </Box>
  )
}
