/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
import nock from 'nock'
import axios from 'axios'
import defaultGamesListResponse from '../__fixtures__/games&page_size=20&page=1&ordering=.json'
// import stateDefaultGamesListResponse
// from '../__fixtures__/state&games&page_size=20&page=1&ordering=.json'
import routesPath, { key, apiPath as host } from '../src/routesPath'
// import {
//   // addActivePage,
//   addGames, addGamesCount
//   //  addOrder, addPageSize
// } from '../src/slices/gamesSlice'
// import { useAppDispatch, useAppSelector } from '../src/hooks/reduxHooks'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('Positive case', () => {
  test('Get games list for catalog', async () => {
    // dispatch(addPageSize(20))
    // dispatch(addActivePage(1))
    // dispatch(addOrder(''))

    // const pageSize = useAppSelector((state) => state.games.pageSize)
    // const page = useAppSelector((state) => state.games.page)
    // const orderBy = useAppSelector((state) => state.games.order)
    const pageSize = 20
    const page = 1
    const orderBy = ''

    nock(host)
      .get(`/games${key}&page_size=20&page=1&ordering=`)
      .reply(200, defaultGamesListResponse)

    await axios.get(routesPath.gameListApiPath(pageSize, page, orderBy)).then((response) => {
      // const dispatch = useAppDispatch()
      // dispatch(addGamesCount(response.data.count))
      const itemsCount = response.data.count
      // dispatch(addGames(response.data.results))
      // const gamesItem = response.data.results
      // const gamesStore = useAppSelector((state) => state.games.items)

      // console.log(gamesStore, 'gamesStore-------------------------------------test')
      // console.log(stateDefaultGamesListResponse.games.items,
      //  'stateDefaultGamesListResponse.games.items-------------------------------------test')
      expect(itemsCount).toEqual(defaultGamesListResponse.count)
    })
  })

  afterAll(() => {
    nock.cleanAll()
  })
})

// function nock(host: any) {
//   throw new Error('Function not implemented.');
// }
// describe('Negative file system case', () => {
//   test('folder not exist', async () => {
//     nock(host)
//       .get('/courses')
//       .reply(200, initialHtml)

//     expect(copySite(url, '/not-exist-dir')).rejects.toThrowError('ENOENT');
//   });

//   afterAll(() => {
//     nock.cleanAll();
//   });
// });

// describe('Negative network case', () => {
//   test('404 case', async () => {
//     nock(host)
//       .get('/courses')
//       .reply(404);

//     await expect(copySite(url, tempDirPath)).rejects.toThrowError('404');
//   });
//   test('500 case', async () => {
//     nock(host)
//       .get('/courses')
//       .reply(500);

//     await expect(copySite(url, tempDirPath)).rejects.toThrowError('500');
//   });
//   afterAll(() => {
//     nock.cleanAll();
//   });
// });

// afterAll(() => {
//   nock.enableNetConnect();
// });
