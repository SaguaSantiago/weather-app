import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'Components/Image'

export const ForecastRow = ({ name, imageUrl }) => {
  const smallQuery = useMediaQuery('(max-width: 1000px)')
  return (
    <Box width='auto' gap='3px' display='flex' alignItems='center'>
      <Typography fontSize={smallQuery ? '0.8rem' : '1rem'}>{name}</Typography>
      <Box position='relative' height='24px' width='24px'>
        <Image objectFit='scale-down' alt={name} src={imageUrl} />
      </Box>
    </Box>
  )
}
