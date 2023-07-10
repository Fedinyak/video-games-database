/* eslint-disable @typescript-eslint/no-floating-promises */
import Box from '@mui/system/Box'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSwitchBtn from './LanguageSwitchBtn'
// import i18next from 'i18next'

const Nav = (): JSX.Element => {
  const { t } = useTranslation()
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/no-return-void
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <nav>
        <ul>
          <li>
            <Link to="/">{t('nav.main')}</Link>
          </li>
          <li>
            <Link to="/catalog">{t('nav.catalog')}</Link>
          </li>
        </ul>
      </nav>
      <LanguageSwitchBtn />
    </Box>
  )
}

export default Nav
