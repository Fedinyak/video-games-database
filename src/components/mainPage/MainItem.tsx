/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Grid from '@mui/system/Unstable_Grid'
import Box from '@mui/system/Box'

interface propsType {
  id: number
  name: string
  image: string
}

// eslint-disable-next-line functional/prefer-immutable-types
const MainItem = ({ name, id, image }: propsType) => (
  <Grid xs={12} key={id}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        // alignItems: 'center',
        bgcolor: '#474747',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold'
      }}
    >
      <Box
        component="img"
        sx={{
          objectFit: 'cover',
          height: 'auto',
          width: '100%'
        }}
        alt={name}
        src={image}
      />
      <br />
      <Box
        component="h3"
        sx={{
          textTransform: 'capitalize',
          color: 'white',
          fontSize: 40
        }}
      >
        {name}
      </Box>
    </Box>
  </Grid>
)
export default MainItem
