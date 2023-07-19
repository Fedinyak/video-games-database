/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-return-void */
import React, { useEffect } from
  'react'
import './App.css'
// import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { I18nextProvider } from 'react-i18next'
import { Box } from '@mui/system'
import axios from 'axios'
// import storeTemplate from './components/testTemp/storeTemplate'
import Catalog from './components/catalogPage/Catalog'
import Main from './components/mainPage/Main'
import Header from './components/header/Header'
// import i18n from './locales/i18next'
import GamePage from './components/gamePage/GamePage'
import SearchPage from './components/searchPage/SearchPage'
import NotFoundPage from './NotFoundPage'
import { useAppDispatch } from './hooks/reduxHooks'
import routesPath from './routesPath'
import { addPlatformsList, addPublishersList, addGenresList } from './slices/gamesSlice'

// import Grid from '@mui/system/Unstable_Grid';
// import Box from '@mui/system/Box';
// import CatalogItem from './components/catalog/CatalogItem';
// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// e1dae6cdd05a459f82b1cf12bbea83f0
// https://api.rawg.io/api/games
// const fn = async () => {
//   // GET-запрос сайта Хекслета
//   const response = await axios.get('https://ru.hexlet.io');
//   console.log(response.status); // код ответа
//   console.log(response.headers); // напечатает заголовки
//   console.log(response.data); // тело ответа
// }

// const [store, setStore] = useState([])
// useEffect(() => {
//   const requestData = async () => {
//     const key = 'e1dae6cdd05a459f82b1cf12bbea83f0';
//     const response = await axios.get(`https://api.rawg.io/api/games?key=${key}`);
//     // console.log(response.status); // код ответа
//     // console.log(response.headers); // напечатает заголовки
//     // console.log(response.data.results); // тело ответа
//     setStore(response.data.results);
//     console.log(store)
//     // store.push('response.data.results');
//   };
//   requestData();
// }, []);

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const requestData = async () => {
      const genresResponse = await axios.get(routesPath.genresApiPath())
      const platformsResponse = await axios.get(routesPath.platformsApiPath())
      const publishersResponse = await axios.get(routesPath.publishersApiPath())

      dispatch(addGenresList(genresResponse.data.results))
      dispatch(addPlatformsList(platformsResponse.data.results))
      dispatch(addPublishersList(publishersResponse.data.results))
    }
    void requestData()
  }, [])

  return (
  // <I18nextProvider i18n={i18n}>
    <Box
      // fixed
      sx={{
        bgcolor: 'black'
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routesPath.mainPagePath()} element={<Main />} />
          <Route path={routesPath.catalogPagePath()} element={<Catalog />} />
          <Route path={routesPath.gamePagePath()} element={<GamePage />} />
          <Route path={routesPath.searchPagePath()} element={<SearchPage />} />
          <Route path={routesPath.notFoundPagePath()} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  // </I18nextProvider>
  )
}
export default App
