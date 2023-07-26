/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
import Grid from '@mui/system/Unstable_Grid'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import MainItem from './MainItem'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addMoreGames } from '../../slices/gamesSlice'
import Preloader from '../ui/Preloader'
import routesPath from '../../routesPath'

const Main = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const gamesStore = useAppSelector((state) => state.games.itemsForInfinityScroll)
  const pageSize = 2
  const isFetching = useAppSelector((state) => state.uiState.isFetching)
  const [state, setState] = useState([] as any)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const requestData = async () => {
      try {
        const response = await axios.get(routesPath.gameListApiPath(pageSize, page, ''))
        dispatch(addMoreGames(response.data.results))
        setState([...state, ...response.data.results])
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    // eslint-disable-next-line no-debugger
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  // eslint-disable-next-line functional/no-let
  let hasMore = true

  const fetchMoreData = () => {
    if (gamesStore.length >= 500) {
      hasMore = false
      return
    }
    setPage(page + 1)
  }

  return (
    <Container>
      <Typography variant="h4" component="h2">
        {t('mainPage.title')}
      </Typography>
      {isFetching
        ? <Preloader />
        : (
          <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
            <InfiniteScroll
              dataLength={state.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Preloader />}
            >
              {state.map(
                (item: { name: string, id: number, background_image: string }) => (
                  <MainItem
                    name={item.name}
                    key={item.id}
                    id={item.id}
                    image={item.background_image}
                  />
                )
              )}
            </InfiniteScroll>
          </Grid>
          )}

    </Container>
  )
}
export default Main
