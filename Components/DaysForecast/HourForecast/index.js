import { Box, Paper, styled, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const StyledPaper = styled(Paper)(
  ({ theme, selected }) => `
    height: 100%;
    background-color: ${selected ? theme.palette.secondary.light + '84' : ''};
    border: ${selected ? `2px solid ${theme.palette.secondary.light}bb` : ''};
    transition: background-color .4s;
    transition: border .2s;
    padding-top: 3px;
`,
)

export default function HourFourcast({ data, hourSelected: hs }) {
  const { palette } = useTheme()

  const [hourSelected, setHourSelected] = hs
  const [isSelected, setIsSelected] = useState(data.dt === hourSelected.dt)

  const { hour, main, weather } = data
  useEffect(() => {
    setIsSelected(data.dt === hourSelected.dt)
  }, [hourSelected])

  return (
    <Box
      sx={{ ':hover': { cursor: 'pointer' } }}
      onClick={() => setHourSelected({ ...data })}
      height='130px'
      width='86px'
    >
      <StyledPaper selected={isSelected}>
        <Typography textAlign='center' fontWeight='light'>
          {hour}
        </Typography>

        <Box width='100%' position='relative' height='75px'>
          <Image
            layout='fill'
            objectFit='scale-down'
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt='rain'
          />
        </Box>

        <Box width='100%' display='flex' justifyContent='center' gap='10px'>
          <Typography fontWeight='semibold' color='cyan'>
            {Math.round(main.temp_min)}º
          </Typography>
          <Typography fontWeight='semibold' sx={{ color: palette.error.light }}>
            {Math.round(main.temp_max)}º
          </Typography>
        </Box>
      </StyledPaper>
    </Box>
  )
}
