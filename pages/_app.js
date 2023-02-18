import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from 'styles/theme'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
