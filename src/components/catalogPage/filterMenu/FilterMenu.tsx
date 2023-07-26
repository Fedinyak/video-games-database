/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  AppBar, Box,
  IconButton, Menu,
  MenuItem,
  Toolbar, Typography
} from '@mui/material'
import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from 'react-i18next'
import FilterSection from './FilterSection'

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
    >
      <Toolbar
        disableGutters
        sx={{
          backgroundColor: 'black',
          paddingTop: '8px',
          paddingBottom: '8px'
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, flexWrap: 'wrap', width: '99%' }}>
          <IconButton
            size="large"
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
              onClick={handleOpenNavMenu}
              sx={{
                ml: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit'
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
            }}
          >
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
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between' }}>
          <FilterSection />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default FilterMenu
