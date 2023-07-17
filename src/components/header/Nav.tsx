/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-loop-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useTranslation } from 'react-i18next'
// import Link from '@mui/material/Link'
// import { MiuLink as Link } from '@mui/material'
import { Link, matchPath, useLocation } from 'react-router-dom'
// import { Box } from '@mui/system'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import routesPath from '../../routesPath'
// import { Stack } from '@mui/system'
// import { MiuLink as Link } from '@mui/material/Link'
// import i18next from 'i18next'
// const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const useRouteMatch = (patterns: readonly string[]) => {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}

const Nav = (): JSX.Element => {
  const { t } = useTranslation()
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/no-return-void
  const routeMatch = useRouteMatch(['/', '/catalog'])
  const currentTab = routeMatch?.pattern?.path

  return (

    <Tabs value={currentTab}>
      <Tab label={t('nav.main')} value={routesPath.mainPagePath()} to={routesPath.mainPagePath()} component={Link} />
      <Tab label={t('nav.catalog')} value={routesPath.catalogPagePath()} to={routesPath.catalogPagePath()} component={Link} />
    </Tabs>
  )

  // return (
  //   <nav>
  //     {/* <Stack
  //       direction="row"
  //       spacing={2}
  //       sx={{
  //         color: 'white',
  //         fontWeight: 'bolder',
  //         fontSize: 40
  //       }}
  //     > */}
  //     <Box
  //       sx={{
  //         typography: 'body1',
  //         '& > :not(style) ~ :not(style)': {
  //           ml: 2
  //         }
  //       }}
  //       onClick={(event: React.SyntheticEvent) => { event.preventDefault() }}
  //     >
  //       <Link component={RouterLink} to="/" underline="hover">
  //         {t('nav.main')}
  //       </Link>
  //       <Link component={RouterLink} to="/catalog" underline="hover">
  //         {t('nav.catalog')}
  //       </Link>
  //     </Box>
  //   </nav>
  // )
}

export default Nav
//  <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'row'
//       }}
//     >
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">{t('nav.main')}</Link>
//           </li>
//           <li>
//             <Link to="/catalog">{t('nav.catalog')}</Link>
//           </li>
//         </ul>
//       </nav>
//     </Box>
