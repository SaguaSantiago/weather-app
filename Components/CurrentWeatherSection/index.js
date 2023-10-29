import Image from 'Components/Image'
import { Box, Typography } from '@mui/material'
import { useData } from 'hooks/useData'

export default function CurrentWeatherSection() {
  const { weather } = useData()
  const { current } = weather
  return (
    <Box display='block' mx='auto' width='120px' component='section'>
      <Box display='flex' pt={4} flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography fontWeight='light' variant='h5'>
          {current?.name}
        </Typography>
        <Typography sx={{ fontWeight: 'light' }} variant='h3'>
          {Math.round(current?.main.temp)}º
        </Typography>
        <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
          {current?.weather[0].description}
        </Typography>
      </Box>
      <Box width='100%' height='100px' position='relative'>
        <Image
          objectFit='scale-down'
          alt={'weather ' + current?.weather[0].main}
          src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`}
        ></Image>
      </Box>

      <Typography textAlign='center' fontWeight='' variant='body2'>
        Min: {Math.round(current?.main.temp_min)}º Max: {Math.round(current?.main.temp_max)}º
      </Typography>
    </Box>
  )
}
