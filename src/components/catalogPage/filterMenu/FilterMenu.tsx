/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  AppBar, Box,
  // Container,
  IconButton, Menu,
  MenuItem,
  Toolbar, Typography
} from '@mui/material'
import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from 'react-i18next'
// import { spacing } from '@mui/system'
import FilterSection from './FilterSection'
// import FilterBar from './FilterBar'
// import SelectOption from './SelectOption'
// import { useAppSelector } from '../../hooks/reduxHooks'
// import { addPublishers } from '../../slices/gamesSlice'

// const pages = ['Products', 'Pricing', 'Blog']
// const FilterSection = () => {
//   const publishersList = useAppSelector((state) => state.games.publishersList)
//   const publishers = useAppSelector((state) => state.games.publishers)
//   return (
//     <>
//       <FilterBar />
//       <SelectOption
//         menuItemList={publishersList}
//         selectValue={publishers}
//         reducer={addPublishers}
//       />
//     </>
//   )
// }

const FilterMenu = () => {
  const { t } = useTranslation()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      // sx={{
      //   backgroundColor: 'black',

      // }}
    >
      {/* <Container
        maxWidth="xl"
        sx={{
          backgroundColor: 'black',
          // marginTop: '8px',
          // marginBottom: '8px',
          paddingTop: '8px',
          paddingBottom: '8px'
        }}
      > */}
      <Toolbar
        disableGutters
        sx={{
          backgroundColor: 'black',
          // marginTop: '8px',
          // marginBottom: '8px',
          paddingTop: '8px',
          paddingBottom: '8px'
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, flexWrap: 'wrap', width: '99%' }}>
          <IconButton
            size="large"
              // aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{
              marginLeft: '-12px'
            }}
            />
            <Typography
              variant="h5"
              noWrap
          // component="a"
              onClick={handleOpenNavMenu}
          // href=""
              sx={{
                ml: 2,
                // width: '100%',
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'inherit'
                // textDecoration: 'none'
              }}
            >
              {t('filterMenu.menu')}
            </Typography>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'flex', md: 'none' }
              // flexDirection: 'column',
              // width: '300px'
            }}
          >
            {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            <MenuItem sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              alignItems: 'inherit',
              width: '100%'
            }}
            >
              <FilterSection />
            </MenuItem>
          </Menu>
        </Box>
        {/* <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            // fontFamily: 'monospace',
            fontWeight: 700,
            // letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          {t('filterMenu.menu')}
        </Typography> */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between' }}>
          {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          <FilterSection />
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  )
}
export default FilterMenu
