import {
  Grid,
  //  Stack,
  Typography
} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import LanguageSwitchBtn from './LanguageSwitchBtn'
import LogoImages from './LogoImages'
import Nav from './Nav'
import Search from './SearchBar'

const Header = (): JSX.Element => (

  <Container>
    <header>
      {/* <Stack
      direction="row"
      justifyContent="space-between"
      useFlexGap
      flexWrap="wrap"
      alignItems="center"
      spacing={2}
      pt={2}
      pb={2}
    > */}
      <Grid
        alignItems="center"
        container
        pt={2}
        pb={2}
        spacing={0.5}
        wrap="wrap"
        justifyContent="space-between"
      >
        <Grid xs={12}>
          <LogoImages />
        </Grid>
        <Grid xs={12} md={7}>
          <Typography
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bolder',
              fontSize: 40,
              position: 'relative'
            }}
          >
            Video games data
          </Typography>
        </Grid>

        <Grid xs={9} md={4}>
          <Nav />
        </Grid>

        <Grid xs="auto" md={1}>
          <LanguageSwitchBtn />
        </Grid>

        <Grid
          xs={12}
          pt={2}
        >
          {/* </Stack> */}
          <Search />
        </Grid>
      </Grid>
    </header>
  </Container>
)

export default Header
