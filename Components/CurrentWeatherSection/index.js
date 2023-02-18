import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function CurrentWeatherSection () {
    return (
        <>
          <Box display='flex' pt={4} flexDirection='column' justifyContent='center' alignItems='center'>
            <Typography fontWeight='light' variant='h5'>
              Rio Cuarto
            </Typography>
            <Typography sx={{ fontWeight: 'light' }} variant='h3'>
              19º
            </Typography>
            <Typography variant='body2'>Hostly Clear</Typography>
          </Box>
          <Box width='100%' height='100px' position='relative'>
            <Image
              layout='fill'
              objectFit='scale-down'
              src='http://openweathermap.org/img/wn/10d@2x.png'
            ></Image>
          </Box>
    
          <Typography textAlign='center' fontWeight='' variant='body2'>
            Min: 6º Max: 19º
          </Typography>
        </>
    )
}