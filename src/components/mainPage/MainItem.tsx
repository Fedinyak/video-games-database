/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Grid from '@mui/system/Unstable_Grid'
import Box from '@mui/system/Box'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import routesPath from '../../routesPath'

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
        overflow: 'hidden',
        borderRadius: '6px',
        boxShadow: 1,
        fontWeight: 'bold',
        position: 'relative'
      }}
    >
      <Link to={routesPath.gamePagePath(id.toString())} style={{ textDecoration: 'none', color: 'white' }}>
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
        <Box
          component="div"
          sx={{
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            bottom: '0'
          }}
        >
          <Typography
            component="h4"
            mt={2}
            mb={3}
            sx={{
              textTransform: 'capitalize',
              color: 'white',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              lineHeight: { xs: '2.2rem', sm: '3.3rem', md: '4.4rem' },
              fontWeight: 'bolder'
            }}
          >
            {name}
          </Typography>
        </Box>
      </Link>
    </Box>
  </Grid>
)
export default MainItem
