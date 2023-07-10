import React from 'react'
import Grid from '@mui/system/Unstable_Grid'
import Box from '@mui/system/Box'
import { Link } from 'react-router-dom'

interface propsType {
  readonly id: number
  readonly name: string
  readonly image: string
}

const SearchItem = (props: propsType): JSX.Element => {
  const { name, id, image } = props
  return (
    <Grid xs={12} key={id}>
      <Link to={`${id}`}>
        <Box
          sx={{
            display: 'flex',
            // flexDirection: { xs: 'column' },
            flexDirection: { xs: 'row' },
            // alignItems: 'center',
            bgcolor: '#474747',
            overflow: 'hidden',
            // borderRadius: '12px,
            boxShadow: 1,
            fontWeight: 'bold'
          }}
        >
          <Box
            component="img"
            sx={{
              objectFit: 'cover',
              borderRadius: '50%',
              // height: '100%',
              height: 75,
              width: 75
            }}
            alt={name}
            src={image}
          />
          <br />
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
      </Link>
    </Grid>
  )
}

export default SearchItem
