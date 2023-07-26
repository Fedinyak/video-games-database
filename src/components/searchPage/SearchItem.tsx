/* eslint-disable max-len */
import React from 'react'
import Grid from '@mui/system/Unstable_Grid'
import Box from '@mui/system/Box'
import { Link } from 'react-router-dom'
import { Rating, Typography } from '@mui/material'
import routesPath from '../../routesPath'
import { type searchGamesState } from '../../slices/searchSlice'

const SearchItem = ({ name, id, background_image: image, rating }: Readonly<searchGamesState>): JSX.Element => (
  <Grid xs={12} sm={6} md={4} key={id} mt={2} mb={2}>
    <Link to={routesPath.gamePagePath(id.toString())} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row' },
          alignItems: 'center',
          overflow: 'hidden',
          boxShadow: 1,
          fontWeight: 'bold'
        }}
      >
        <Box
          component="img"
          sx={{
            objectFit: 'cover',
            borderRadius: '50%',
            height: 75,
            width: 75
          }}
          alt={name}
          src={image}
        />
        <Box ml={2} mr={3}>
          <Typography
            component="h3"
            sx={{
              color: 'white',
              fontWeight: 'bolder'
            }}
          >
            {name}
          </Typography>
          <Rating name="rating" value={rating} readOnly size="small" />
        </Box>
      </Box>
    </Link>
  </Grid>
)

export default SearchItem
