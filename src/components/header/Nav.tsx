/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-loop-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useTranslation } from 'react-i18next'
import { Link, matchPath, useLocation } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import routesPath from '../../routesPath'

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
}

export default Nav
