/* eslint-disable multiline-ternary */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addGamesCount } from '../../slices/gamesSlice'
import Pagination from '../ui/Pagination'
import Preloader from '../ui/Preloader'
import { fetching } from '../../slices/uiSlice'
import { addActiveGame } from '../../slices/activeGameSlice'
import { addSearchGames } from '../../slices/searchSlice'
import SearchItem from './SearchItem'

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types
const SearchPage = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  // const gamesStore = useAppSelector((state) => state.games.items)
  const searchGamesStore = useAppSelector((state) => state.searchGames.items)
  const searchWord = useAppSelector((state) => state.searchGames.searchWords)
  const pageSize = useAppSelector((state) => state.games.pageSize)
  const page = useAppSelector((state) => state.games.page)
  const isFetching = useAppSelector((state) => state.uiState.isFetching)

  useEffect(() => {
    const requestData = async () => {
      dispatch(fetching(true))
      const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      const response = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=${pageSize}&page=${page}&search=${searchWord}`)
      dispatch(addSearchGames(response.data.results))
      dispatch(addGamesCount(response.data.count))
      dispatch(fetching(false))
      dispatch(addActiveGame(null))
      console.log(searchGamesStore)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [page])

  return (
    <>
      <h1>{`${t('searchPage.title')}: ${searchWord}`}</h1>
      {isFetching ? <Preloader />
        : (
          <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
            {searchGamesStore.map((item: any) => (
              <SearchItem
                name={item.name}
                id={item.id}
                key={item.id}
                image={item.background_image}
              />
            ))}
          </Grid>
          )}
      <Pagination />
    </>
  )
}

export default SearchPage
