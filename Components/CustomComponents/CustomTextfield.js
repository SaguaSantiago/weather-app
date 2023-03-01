import { TextField, styled, Box } from '@mui/material'

const StyledTextfield = styled(TextField)(
  ({ theme }) => `
      & .MuiInputLabel-root {
        color: #aaaaaa
      }
      & .MuiInputLabel-root.Mui-focused {
        color: #6f59bf;
    
      }}
      & .MuiInputBase-root:after {
        border-bottom: 2px solid #48319d !important
      }
    `,
)

export const CustomTextfield = (props) => (
  <Box width='100%' maxWidth='400px'>
    <StyledTextfield
      {...props}
      fullWidth
      FormHelperTextProps={{ sx: { color: '#aaa', mt: 2, textAlign: 'center' } }}
      inputProps={{
        autoComplete: 'off',
        placeholder: 'London, UK',
        sx: {
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          fontWeight: 'light',
        },
      }}
    />
  </Box>
)
