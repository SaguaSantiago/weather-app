import { useEffect, useState } from 'react'
import Image from 'Components/Image'
import { Box, Paper, styled, Typography } from '@mui/material'
import { useSelectInfo } from 'hooks/useSelectInfo'

const StyledPaper = styled(Paper)(
  ({ theme, selected }) => `
    border-radius: 20px;
    background-color: ${selected ? theme.palette.secondary.light + '84' : '#b9bac340'};
    height: 150px;
    border:  3px solid;
    border-color:${selected ? theme.palette.secondary.light : '#cccccc2f'};
    padding-top: 14px;
    transition: background-color .4s,border .4s;
    padding-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`,
)

export default function DayForecastPaper({ weatherDay, isToday = false }) {
  const { changeDayDetails, selected } = useSelectInfo()
  const { dayId, values, day, icon } = weatherDay
  const [isSelected, setIsSelected] = useState(dayId === selected.day)
  // console.log(weatherDay)

  useEffect(() => {
    setIsSelected(dayId === selected.day)
  }, [selected])

  return (
    <Box
      onClick={() => changeDayDetails(dayId)}
      sx={{ ':hover': { cursor: 'pointer' } }}
      mx='auto'
      width='100%'
      minHeight='130px'
      minWidth='110px'
      maxWidth='130px'
    >
      <StyledPaper selected={isSelected}>
        <Typography variant='body2' fontWeight='light' textAlign='center'>
          {isToday ? 'Today' : day}
        </Typography>
        <Box position='relative' width='100%' height='70px'>
          <Image
            onClick={() => changeDayDetails(dayId)}
            objectFit='scale-down'
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={'weather '}
          />
        </Box>
        <Box width='100%' display='flex' justifyContent='space-around' px={0.8}>
          <Typography fontWeight='light' color='cyan' textAlign='center'>
            {Math.trunc(values.temperatureApparentMin)}º
          </Typography>
          <Typography fontWeight='light' color='error.light' textAlign='center'>
            {Math.trunc(values.temperatureApparentMax)}º
          </Typography>
        </Box>
      </StyledPaper>
    </Box>
  )
}
