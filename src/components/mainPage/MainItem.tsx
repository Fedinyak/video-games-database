import React from "react"
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';

type propsType = {
  id: number,
  name: string,
  image: string,
}

const MainItem = (props: propsType) => {
  return (
    <Grid xs={12} key={props.id}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column' },
          // alignItems: 'center',
          bgcolor: '#474747',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
        }}
      >
        <Box component="img"
          sx={{
            objectFit: 'cover',
            height: 'auto',
            width: '100%',
          }}
          alt={props.name} src={props.image}>
        </Box>
        <br></br>
        <Box
          component='h3'
          sx={{
            textTransform: 'capitalize',
            color: 'white',
            fontSize: 40,
          }}>
          {props.name}
        </Box>
      </Box>
    </Grid>
  )
}

export default MainItem;