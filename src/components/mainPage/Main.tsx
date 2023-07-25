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
import {
  useEffect,
  useState
} from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import MainItem from './MainItem'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import {
  addMoreGames
  // addGames
  // addGamesCount,
  // addInfinityPageScroll
//   addPageSize
} from '../../slices/gamesSlice'
// import { fetching } from '../../slices/uiSlice'
import Preloader from '../ui/Preloader'
// import { addActiveGame } from '../../slices/activeGameSlice'
import routesPath from '../../routesPath'
// import StoreTest from './StoreTest'
// import { type GameListType } from '../../propsType/gameListType'

// interface gameProps {
//   store: GameListType
// }

// const calculatePageSize = (): number => {
//   if (window.innerWidth > 899) {
//     return 21
//   }
//   return 20
// }

const Main = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const gamesStore = useAppSelector((state) => state.games.itemsForInfinityScroll)
  // const pageSize = useAppSelector((state) => state.games.pageSize)
  // const pageSize = calculatePageSize()
  const pageSize = 2
  // const page = useAppSelector((state) => state.games.infinityPageScroll)
  const isFetching = useAppSelector((state) => state.uiState.isFetching)
  const [state, setState] = useState([] as any)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const requestData = async () => {
      // dispatch(fetching(true))
      // dispatch(addPageSize(pageSize))
      try {
        const response = await axios.get(routesPath.gameListApiPath(pageSize, page, ''))

        // dispatch(addGamesCount(response.data.count))
        dispatch(addMoreGames(response.data.results))
        setState([...state, ...response.data.results])
      // setState(state.push(response.data.results)
      // setState(response.data.results)
      // dispatch(fetching(false))
      // dispatch(addActiveGame(null))
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    // eslint-disable-next-line no-debugger
    // debugger
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
    // setState([...state, ...gamesStore])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  // eslint-disable-next-line functional/no-let
  let hasMore = true

  const fetchMoreData = () => {
    if (gamesStore.length >= 500) {
      // setState({ hasMore: false });
      hasMore = false
      return
    }

    // dispatch(addInfinityPageScroll(page + 1))
    setPage(page + 1)
    // setState(gamesStore)
    // console.log(gamesStore, state, page, 'gamesStore, state, page------------------------------------')
  }

  // console.log(gamesStore, state, page, 'gamesStore, state, page+++++++++++++++++++++++++++++++==')
  return (
    <Container>
      <Typography variant="h4" component="h2">
        {t('mainPage.title')}
      </Typography>
      {/* <StoreTest /> */}
      {isFetching
        ? <Preloader />
        : (
          <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
            <InfiniteScroll
              dataLength={state.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Preloader />}
              // loader={<p style={{ color: 'white' }}>load</p>}
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
          // <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
          //   {gamesStore.map(
          //     (item: { name: string, id: number, background_image: string }) => (
          //       <MainItem
          //         name={item.name}
          //         key={item.id}
          //         id={item.id}
          //         image={item.background_image}
          //       />
          //     )
          //   )}
          // </Grid>
          )}

    </Container>
  )
}
export default Main
