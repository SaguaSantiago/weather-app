import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormHelperText,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import { CustomTextfield } from 'Components/CustomComponents/CustomTextfield'
import { useLocation } from 'hooks/useLocation'

export default function MainRoute() {
  const { handleChange, handleClick, location, loading } = useLocation()
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      pt={20}
      maxWidth='80%'
      gap={1}
      mx='auto'
    >
      <CustomTextfield
        value={location}
        onChange={handleChange}
        label='Location'
        variant='filled'
        helperText={`if you don't want to give us your location or search an other place`}
      />
      <Divider sx={{ width: '320px', borderColor: '#ffffff0f' }} />

      <FormHelperText sx={{ color: '#aaa', textAlign: 'center' }}>
        You have to write with this sintax: [City Name],[Country Code] <br></br> Example: 'London,
        UK'
      </FormHelperText>

      <Button size='large' onClick={handleClick} sx={{ mt: 2 }} variant='contained'>
        search
      </Button>
      <Typography mt={1} variant='body2' textAlign='center' sx={{ color: '#aaa' }}>
        if you don't know your country's Alpha-2 Code...
      </Typography>
      <a href='https://www.iban.com/country-codes' target='_blank'>
        click here and search it
      </a>

      {loading && (
        <CircularProgress
          color='secondary'
          sx={{ mt: 7, '& .MuiCircularProgress-svg': { color: '#48319d' } }}
        ></CircularProgress>
      )}
    </Box>
  )
}
