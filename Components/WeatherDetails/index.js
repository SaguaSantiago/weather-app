import { ForecastRow } from './ForecastRow'

import { rowsObjects } from 'Utilities/RowObjects'
import {
  Box,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useSelectInfo } from 'hooks/useSelectInfo'
import { getDirection } from 'Utilities/getDirections'

export default function WeatherDetails() {
  const { selected } = useSelectInfo()
  const { hourInfo } = selected
  const smallQuery = useMediaQuery('(max-width: 1000px)')
  return (
    <>
      <Box mb={2} component='article' height='400px' maxWidth='450px' width='100%'>
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
                  <TableCell sx={{ minWidth: '100px' }}>
                    <Typography
                      minWidth='60px'
                      fontSize={smallQuery ? '0.8rem' : '1rem'}
                      variant='body2'
                    >
                      {key !== 'windDirection'
                        ? Math.round(hourInfo?.values[key])
                        : getDirection(hourInfo?.values[key])}{' '}
                      {unit}
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
