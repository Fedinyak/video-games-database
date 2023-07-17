/* eslint-disable multiline-ternary */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react'

import Grid from '@mui/system/Unstable_Grid'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import CatalogItem from './CatalogItem'
// import { type GameListType } from '../../propsType/gameListType'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addGames, addGamesCount, addPageSize } from '../../slices/gamesSlice'
import Pagination from '../ui/Pagination'
// import FilterBar from './FilterBar'
import Preloader from '../ui/Preloader'
import { fetching } from '../../slices/uiSlice'
import { addActiveGame } from '../../slices/activeGameSlice'
import FilterMenu from './filterMenu/FilterMenu'
import routesPath from '../../routesPath'

// import store from '../../slices/store'
// import storeTemplate from '../../storeTemplate'

// interface gameProps {
//   store: GameListType
// }

const calculatePageSize = (): number => {
  if (window.innerWidth > 899) {
    return 21
  }
  return 20
}

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types
const Catalog = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const gamesStore = useAppSelector((state) => state.games.items)
  const pageSize = useAppSelector((state) => state.games.pageSize)
  const page = useAppSelector((state) => state.games.page)
  const orderBy = useAppSelector((state) => state.games.order)
  const platforms = useAppSelector((state) => state.games.platforms)
  const platformsList = useAppSelector((state) => state.games.platformsList)
  const publishers = useAppSelector((state) => state.games.publishers)
  const publishersList = useAppSelector((state) => state.games.publishersList)
  const genres = useAppSelector((state) => state.games.genres)
  const genresList = useAppSelector((state) => state.games.genresList)
  const isFetching = useAppSelector((state) => state.uiState.isFetching)

  useEffect(() => {
    const requestData = async () => {
      dispatch(fetching(true))
      dispatch(addPageSize(calculatePageSize()))
      // const windowSize = window.innerWidth
      // eslint-disable-next-line functional/no-let
      // let pageSize = 20
      // eslint-disable-next-line functional/no-conditional-statements
      // console.log(routesPath.gameListApiPath(
      //   pageSize,
      //   page,
      //   orderBy,
      //   platforms,
      //   publishers,
      //   genres
      // ), 'route ---------------------------')
      const getFliteredItemsId = (items: any, store: any): any => {
        const result: any = []
        items.forEach((item: any) => {
          store.forEach((storeItem: any) => {
            console.log(storeItem, item, 'storeItem.name === item.name')
            // eslint-disable-next-line functional/no-conditional-statements
            if (storeItem.name === item) {
              result.push(storeItem.id)
            }
          })
        })
        return result.join(',')
      }
      console.log(getFliteredItemsId(platforms, platformsList), 'getFliteredItemsId-----------------')
      // const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      // const response = await axios.get(`https://api.rawg.io/api/games?key=${key}&page_size=${pageSize}&page=${page}&ordering=${orderBy}`)
      const response = await axios.get(routesPath.gameListApiPath(
        pageSize,
        page,
        orderBy,
        getFliteredItemsId(platforms, platformsList),
        getFliteredItemsId(publishers, publishersList),
        getFliteredItemsId(genres, genresList)
        // `${platforms.join(',')}`,
        // `${publishers.join(',')}`,
        // `${genres.join(',')}`
      ))
      // get one game and page
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0%20%20&page_size=21%20%20&page=1%20%20&ordering=%20%20&platforms=%20%20&publishers=%20%20&genres=
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=1&page=3
      // ordering response
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=21&page=1&ordering=-name,&platforms=4,5,&publishers=electronic-arts,microsoft-studios,&genres=action,indie rout ---------------------------
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=21&page=1&ordering=,&platforms=4,5,&publishers=electronic-arts,microsoft-studios,&genres=action,indie rout -----
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=21&page=1&ordering=,&platforms=4,5,&publishers=electronic-arts,microsoft-studios,&genres=action,indie rout ---------------------------
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=21&page=1&ordering=&platforms=&publishers=&genres=
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=21&page=1&ordering=-rating,&4,5=4,5,&electronic-arts,microsoft-studios=electronic-arts,microsoft-studios,&action,indie=action,indie
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
  }, [page, orderBy, platforms, publishers, genres])

  return (
    <Container>
      <Typography variant="h4" component="h2">
        {t('catalogPage.title')}
      </Typography>
      <FilterMenu />
      {/* <FilterBar /> */}
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
      <Pagination />
    </Container>
  )
}
export default Catalog
