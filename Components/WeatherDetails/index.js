import { ForecastRow } from './ForecastRow'
import CurrentWeatherSection from 'Components/CurrentWeatherSection'
import { rowsObjects } from 'Utilities/RowObjects'
import {
  Box,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material'

export default function WeatherDetails({ details }) {
  return (
    <>
      <Box mb={2}>
        <CurrentWeatherSection data={details} />
      </Box>
      <Box mb={2} display='bl./ForecastRowto' height='400px' maxWidth='450px' width='100%'>
        <TableContainer>
          <Table
            sx={{
              height: '100%',
              background: '#0000009f',
              borderRadius: '25px',
              overflow: 'hidden',
            }}
          >
            <TableBody>
              {rowsObjects.map(({ name, imageUrl, key, unit }, i) => (
                <TableRow hover key={i}>
                  <TableCell>
                    <ForecastRow name={name} imageUrl={imageUrl} />
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2'>
                      {Math.round(details.main[key])} {unit}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
