import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export default function CurrentWeatherSection({ detailsOpen, data }) {
  return (
    <Box
      display='block'
      mx='auto'
      width='120px'
      sx={{
        opacity: !detailsOpen ? 1 : 0,
        transition: 'opacity .7s',
      }}
      component='section'
    >
      <Box display='flex' pt={4} flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography fontWeight='light' variant='h5'>
          {data.name}
        </Typography>
        <Typography sx={{ fontWeight: 'light' }} variant='h3'>
          {Math.round(data.main.temp)}º
        </Typography>
        <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
          {data.weather[0].description}
        </Typography>
      </Box>
      <Box width='100%' height='100px' position='relative'>
        <Image
          layout='fill'
          objectFit='scale-down'
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        ></Image>
      </Box>

      <Typography textAlign='center' fontWeight='' variant='body2'>
        Min: {Math.round(data.main.temp_min)}º Max: {Math.round(data.main.temp_max)}º
      </Typography>
    </Box>
  )
}
