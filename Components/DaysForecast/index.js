import HourForecast from './HourForecast'

import WeatherDetails from 'Components/WeatherDetails'
import { useSelectInfo } from 'hooks/useSelectInfo'

import { Box, Typography, useMediaQuery } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { useData } from 'hooks/useData'
import { FEATURE_OBJECTS } from 'Utilities/FeaturesObjects'
import FeatureCard from 'Components/FeatureCard'

export default function DaysForecast({ open }) {
  const mobile = useMediaQuery('(max-width: 1000px)')
  const { selected } = useSelectInfo()
  const { allHours, day } = selected
  const { weather } = useData()
  const dayInfo = weather?.week?.find((e, i) => e.dayId === day)
  const date = new Date(dayInfo?.time)
  return (
    <>
      <Box
        flexGrow='1'
        pt={5.3}
        maxHeight={mobile ? '' : '100vh'}
        sx={{
          transition: 'opacity 0.2s',
          opacity: open || mobile ? '1' : '0',
          transitionDelay: open ? '0.25s' : '0s',
          overflowY: !mobile && 'auto',
        }}
      >
        <Box width='100%' display='flex' flexDirection='column' alignItems='center' gap='40px'>
          <Box>
            <Typography fontWeight='light' variant='h4'>
              {dayInfo?.day}
            </Typography>

            <Typography
              fontWeight='light'
              variant='caption'
              textAlign='center'
              display='inline-block'
              width='100%'
            >
              {`${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`} - ${
                date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
              }`}
            </Typography>
          </Box>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
            flexWrap='wrap'
            columnGap='20px'
            rowGap='10px'
          >
            {FEATURE_OBJECTS.map(({ key, ...rest }, i) => (
              <FeatureCard key={i} value={dayInfo?.values?.[key]} {...rest} />
            ))}
          </Box>
          <Typography mt={3} variant='h4' fontWeight='light'>
            Hourly Forecast
          </Typography>
          <Box
            display='flex'
            gap='10px'
            alignItems='center'
            justifyContent='center'
            flexWrap='wrap'
            width={mobile ? '100%' : 'calc(50vw - 200px)'}
            px={2}
          >
            <Swiper
              spaceBetween='30'
              slidesPerView='auto'
              modules={[Navigation, Scrollbar]}
              navigation
              style={{ padding: '20px 50px' }}
              scrollbar={{ draggable: true }}
            >
              {allHours?.length !== 0 &&
                allHours?.map((e) => {
                  const date = new Date(e.time)
                  const hour = `${date.getHours()} hs`
                  return (
                    <SwiperSlide style={{ height: '130px', width: '86px' }} key={e.dt_txt}>
                      <HourForecast data={{ ...e, hour }} />
                    </SwiperSlide>
                  )
                })}
            </Swiper>
          </Box>

          <WeatherDetails />
        </Box>
      </Box>
    </>
  )
}
