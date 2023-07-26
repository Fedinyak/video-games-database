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
          overflow: 'hidden',
          borderRadius: '6px',
          boxShadow: 1,
          fontWeight: 'bold',
          position: 'relative'
        }}
      >
        <Link to={`${id}`} style={{ textDecoration: 'none', color: 'white' }}>
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
          <Box
            component="div"
            sx={{
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              position: 'absolute',
              bottom: '0'
            }}
          >

            <Box component="h3" pl={1}>
              {name}
            </Box>
          </Box>
        </Link>
      </Box>
    </Grid>
  )
}

export default CatalogItem
