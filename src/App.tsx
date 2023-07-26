/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-return-void */
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/system'
import axios from 'axios'
import Catalog from './components/catalogPage/Catalog'
import Main from './components/mainPage/Main'
import Header from './components/header/Header'
import GamePage from './components/gamePage/GamePage'
import SearchPage from './components/searchPage/SearchPage'
import NotFoundPage from './NotFoundPage'
import { useAppDispatch } from './hooks/reduxHooks'
import routesPath from './routesPath'
import { addPlatformsList, addPublishersList, addGenresList } from './slices/gamesSlice'

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
    <Box sx={{ bgcolor: 'black' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routesPath.mainPagePath()} element={<Main />} />
          <Route path={routesPath.catalogPagePath()} element={<Catalog />} />
          <Route path={routesPath.gamePagePath(':id')} element={<GamePage />} />
          <Route path={routesPath.searchPagePath()} element={<SearchPage />} />
          <Route path={routesPath.notFoundPagePath()} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}
export default App
