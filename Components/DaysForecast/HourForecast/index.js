import { Box, Paper, styled, Typography, useTheme } from '@mui/material'
import Image from 'Components/Image'
import { useSelectInfo } from 'hooks/useSelectInfo'
import { useEffect, useState } from 'react'
import { calculateTempColor } from 'services/calculateTempColor'

const StyledPaper = styled(Paper)(
  ({ theme, selected }) => `
    height: 100%;
    background-color: ${selected ? theme.palette.secondary.light + '84' : ''};
    border: ${selected ? `2px solid ${theme.palette.secondary.light}bb` : ''};
    transition: background-color .4s, border .2s;
    padding-top: 3px;
`,
)

export default function HourFourcast({ data }) {
  const { selected, changeHourDetails } = useSelectInfo()
  const { hourInfo } = selected
  const [isSelected, setIsSelected] = useState(data.time === hourInfo?.time)
  const { values, time, icon } = data
  useEffect(() => {
    setIsSelected(data.time === hourInfo?.time)
  }, [hourInfo])

  return (
    <Box
      component='article'
      sx={{ ':hover': { cursor: 'pointer' } }}
      onClick={() => changeHourDetails(data?.time)}
      height='130px'
      width='86px'
    >
      <StyledPaper selected={isSelected}>
        <Typography textAlign='center' fontWeight='light'>
          {data.hour}
        </Typography>

        <Box width='100%' position='relative' height='75px'>
          <Image
            objectFit='scale-down'
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={'weather '}
          />
        </Box>

        <Box width='100%' display='flex' justifyContent='center' gap='10px'>
          <Typography fontWeight='semibold' color={calculateTempColor(values.temperatureApparent)}>
            {Math.round(values.temperatureApparent)}º
          </Typography>
        </Box>
      </StyledPaper>
    </Box>
  )
}
