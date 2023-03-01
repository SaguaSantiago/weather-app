import { Box, Paper, styled, Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const StyledPaper = styled(Paper)(
  ({ theme, selected }) => `
    border-radius: 35px;
    background-color: ${selected ? theme.palette.secondary.light + '84' : '#b9bac340'};
    height: 100%;
    border: ${selected ? `3px solid ${theme.palette.secondary.light}` : ''};
    padding-top: 14px;
    transition: background-color .4s;
    transition: border .4s;
    padding-bottom: 14px;
`,
)

export default function DayForecastPaper({ weatherDay, isToday = false, daySelected: ds }) {
  const { name, weather, temp, id } = weatherDay
  const { icon } = weather

  const [daySelected, setDaySelected] = ds
  const [isSelected, setIsSelected] = useState(id === daySelected)

  useEffect(() => {
    setIsSelected(id === daySelected)
  }, [daySelected])

  return (
    <Box
      onClick={() => setDaySelected(id)}
      sx={{ ':hover': { cursor: 'pointer' } }}
      mx='auto'
      width='100%'
      minHeight='120px'
      minWidth='60px'
      maxWidth='75px'
    >
      <StyledPaper selected={isSelected}>
        <Typography variant='body2' fontWeight='light' textAlign='center'>
          {isToday ? 'Today' : name}
        </Typography>
        <Box position='relative' width='100%' height='50px'>
          <Image
            onClick={() => setDaySelected(id)}
            layout='fill'
            objectFit='scale-down'
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt='rain'
          />
        </Box>
        <Typography fontWeight='light' textAlign='center'>
          {temp}º
        </Typography>
      </StyledPaper>
    </Box>
  )
}
