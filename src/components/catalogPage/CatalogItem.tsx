import React from 'react'
import Grid from '@mui/system/Unstable_Grid'
import Box from '@mui/system/Box'
import { Link } from 'react-router-dom'

interface propsType {
  readonly id: number
  readonly name: string
  readonly image: string
}

const CatalogItem = (props: propsType): JSX.Element => {
  const { name, id, image } = props
  return (
    <Grid xs={12} sm={6} md={4} key={id}>
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
            height: 200,
            width: '100%'
          }}
          alt={name}
          src={image}
        />
        <br />
        <Link to={`${id}`}>{name}</Link>
        <Box
          component="h3"
          sx={{
            textTransform: 'capitalize',
            color: 'white'
          }}
        >
          {name}
        </Box>
      </Box>
    </Grid>
  )
}

export default CatalogItem
