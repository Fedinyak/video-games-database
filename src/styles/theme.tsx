/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/consistent-type-imports */
// import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
// import { ThemeOptions } from '@mui/material/styles'

// import { ThemeOptions } from '@mui/material/styles'

// export const themeOptions: ThemeOptions = {
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#3f51b5'
//     },
//     secondary: {
//       main: '#f50057'
//     }
//   }
// }

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
      // color: 'blue'
    },
    body2: {
      fontWeight: 500
      // color: 'white'
    }
  }
})

export default theme
// import { ThemeOptions } from '@mui/material/styles';

// export const themeOptions: ThemeOptions = {
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// };
