import React from 'react'

import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme'

import DataProvider from 'context/Data'
import SelectedProvider from 'context/SelectedData'

export default function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <SelectedProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SelectedProvider>
    </DataProvider>
  )
}
