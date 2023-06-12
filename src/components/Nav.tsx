/* eslint-disable @typescript-eslint/no-floating-promises */
import Box from '@mui/system/Box'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import i18next from 'i18next'

const Nav = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/no-return-void
  const handleLangSwitch = (e: any) => {
    const { lang } = e.target.dataset
    // eslint-disable-next-line functional/no-expression-statements
    i18n.changeLanguage(lang)
  }
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
      <button
        type="button"
        className="btn btn-primary"
        data-lang="en"
        onClick={handleLangSwitch}
      >
        {t('languages.en')}
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-lang="ru"
        onClick={handleLangSwitch}
      >
        {t('languages.ru')}
      </button>
    </Box>
  )
}

export default Nav
