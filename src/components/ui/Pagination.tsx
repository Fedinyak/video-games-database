/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
// import axios from 'axios'
// import { type GameListType } from '../../propsType/gameListType'
// import store from '../../slices/store'
// import storeTemplate from '../../storeTemplate'
import Pagination from '@mui/material/Pagination'

import Stack from '@mui/material/Stack'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addActivePage } from '../../slices/gamesSlice'
// import { addGamesCount } from '../../slices/gamesSlice'

const getPaginationCount = (count: number, size: number) => {
  if (count <= size) {
    return 1
  }
  return Math.round(count / size)
}

const CatalogPagination = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const itemsCount = useAppSelector((state) => state.games.itemsCount)
  const pageSize = useAppSelector((state) => state.games.pageSize)
  const page = useAppSelector((state) => state.games.page)
  const paginationCount = getPaginationCount(itemsCount, pageSize)

  // useEffect(() => {
  //   const requestData = async () => {
  //     // const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
  //     // const response = await axios.get(`https://api.rawg.io/api/games?key=${key}`)
  //     // get one game and page
  //     // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=1&page=3
  //     // ordering response
  //     // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=5&page=1&ordering=-released
  //     // dispatch(response.data.results);
  //     // dispatch(addGames(storeTemplate))

  //     // dispatch(addGamesCount(response.data.count))
  //     // dispatch(addGames(data))
  //     // console.log(store)
  //     console.log(itemsCount)
  //     // store.push('response.data.results');
  //   }
  //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //   requestData()
  // }, [])

  // eslint-disable-next-line functional/prefer-immutable-types
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value, 'vvaaaaalue')
    dispatch(addActivePage(value))
  }

  return (
    <Stack spacing={2} mt={3} mb={6} sx={{ alignItems: 'center' }}>
      <Pagination
        count={paginationCount}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        size="small"
        // sx={{ width: '100%' }}
      />
    </Stack>
  )
}
export default CatalogPagination
