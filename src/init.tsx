/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-expression-statements */
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import i18n from './locales/i18next'
import theme from './styles/theme'
import store from './slices/store'

const init = (): JSX.Element => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </I18nextProvider>
)

export default init
