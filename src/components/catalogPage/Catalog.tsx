/* eslint-disable multiline-ternary */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react'

import Grid from '@mui/system/Unstable_Grid'
import axios from 'axios'
import CatalogItem from './CatalogItem'
// import { type GameListType } from '../../propsType/gameListType'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addGames, addGamesCount } from '../../slices/gamesSlice'
import CatalogPagination from './Pagination'
import FilterBar from './FilterBar'
import Preloader from '../ui/Preloader'
import { fetching } from '../../slices/uiSlice'
import { addActiveGame } from '../../slices/activeGameSlice'
// import store from '../../slices/store'
// import storeTemplate from '../../storeTemplate'

// interface gameProps {
//   store: GameListType
// }

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types
const Catalog = () => {
  const dispatch = useAppDispatch()
  const gamesStore = useAppSelector((state) => state.games.items)
  const pageSize = useAppSelector((state) => state.games.pageSize)
  const page = useAppSelector((state) => state.games.page)
  const orderBy = useAppSelector((state) => state.games.order)
  const isFetching = useAppSelector((state) => state.uiState.isFetching)

  useEffect(() => {
    const requestData = async () => {
      dispatch(fetching(true))
      const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      const response = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=${pageSize}&page=${page}&ordering=${orderBy}`)
      // get one game and page
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=1&page=3
      // ordering response
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=5&page=1&ordering=-released
      // search
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=10&page=2&%27%27&search=zelda
      // console.log(response.status); // код ответа
      // console.log(response.headers); // напечатает заголовки
      // console.log(response.data.results); // тело ответа
      // dispatch(response.data.results);
      // dispatch({ id: 2, name: 'df', background_image: 'df' },
      // )
      // dispatch(addGames(storeTemplate))
      // Пагинация (в идеале, бесконечный скролл)
      // Сортировка по: рейтингу и дате релиза игры (в обе стороны)
      // Фильтрация по платформам
      // Поиск по названию
      // Содержимое каждой “плитки” игры:
      // Название
      // Постер
      // Рейтинг
      // Дата релиза
      // Описание
      // Ссылка на сайт игры
      // Слайдер со скриншотами игры

      // const response = {
      //   data: {
      //     results: [
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       },
      //       {
      //         id: 3498,
      //         name: 'Grand Theft Auto V',
      //         background_image:
      //           'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
      //       },
      //       {
      //         id: 3328,
      //         name: 'The Witcher 3: Wild Hunt',
      //         background_image:
      //           'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      //       }

      //     ],
      //     count: 4
      //   }
      // }
      // const data = response.data.results
      dispatch(addGamesCount(response.data.count))
      dispatch(addGames(response.data.results))
      dispatch(fetching(false))
      dispatch(addActiveGame(null))
      // dispatch(addGames(data))
      // console.log(store)
      console.log(gamesStore)
      // store.push('response.data.results');
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [page, orderBy])

  return (
    <>
      <h1>Catalog</h1>
      <FilterBar />
      {isFetching ? <Preloader />
        : (
          <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
            {/* {storeTemplate.map( */}
            {gamesStore.map((item: any) => (
              <CatalogItem
                name={item.name}
                id={item.id}
                key={item.id}
                image={item.background_image}
              />
            ))}
            {/* {console.log(gamesStore)} */}
          </Grid>
          )}
      <CatalogPagination />
    </>
  )
}
export default Catalog
