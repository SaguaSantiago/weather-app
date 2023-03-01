import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const ForecastRow = ({ name, imageUrl }) => (
  <Box width='auto' gap='3px' display='flex' alignItems='center'>
    <Typography>{name}</Typography>
    <Box position='relative' height='24px' width='24px'>
      <Image layout='fill' objectFit='scale-down' src={imageUrl} />
    </Box>
  </Box>
)
