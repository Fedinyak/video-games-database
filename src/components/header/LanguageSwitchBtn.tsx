/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useTranslation } from 'react-i18next'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
// import { useState } from 'react'

const LanguageSwitchBtn = (): JSX.Element => {
  const { i18n } = useTranslation()
  const getLang = i18n.language
  // const [language, setLanguage] = useState(getLang)

  // const handleLangSwitch = (e: any) => {
  //   const { lang } = e.target.dataset
  //   i18n.changeLanguage(lang)
  // }

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    // setLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
  }

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={getLang}
        // size={{ xs: 'small', sm: 'medium' }}
        size="small"
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="en">En</ToggleButton>
        <ToggleButton
          value="ru"
        >
          Ру
        </ToggleButton>
      </ToggleButtonGroup>
      {/* <button
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
      </button> */}
    </>
  )
}

export default LanguageSwitchBtn
