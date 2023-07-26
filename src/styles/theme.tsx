/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/consistent-type-imports */
// import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cfd8dc'
    },
    secondary: {
      main: '#78909c'
    }
  },
  typography: {
    // subtitle1: {
    //   fontSize: 12,
    // },
    h4: {
      fontWeight: 'bolder',
      color: 'white'
    },
    body1: {
      fontWeight: 500
    },
    body2: {
      fontWeight: 500
    }
  }
})

export default theme
