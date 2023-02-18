import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#323a3e',
      light: '#5c6469',
      dark: '#0b1418',
    },
    secondary: {
      main: '#3e3632',
      dark: '323e39',
      light: '#69605b',
    },
    background: {
      paper: '#67687040',
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
  },
})
