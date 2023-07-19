/* eslint-disable no-restricted-syntax */
/* eslint-disable functional/no-loop-statements */
/* eslint-disable functional/no-conditional-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
// key number of requests 20 000 per month
const key = '?key=e1dae6cdd05a459f82b1cf12bbea83f0'
const apiPath = 'https://api.rawg.io/api'

const routes = {
  searchGameApiPath: (searchWord: string): string => `${apiPath}/games${key}&search=${searchWord}`,
  detailsOfGameApiPath: (gameId: string): string => `${apiPath}/games/${gameId}${key}`,
  screenshotsOfGameApiPath: (gameId: string): string => `${apiPath}/games/${gameId}/screenshots${key}`,
  genresApiPath: (): string => `${apiPath}/genres${key}`,
  platformsApiPath: (): string => `${apiPath}/platforms${key}`,
  publishersApiPath: (): string => `${apiPath}/publishers${key}`,
  gameListApiPath: (
    pageSize: number,
    page: number,
    orderBy: string = '',
    platforms: string = '',
    publishers: string = '',
    genres: string = ''
  ): string => {
    const resultPath: string[] = [`${apiPath}/games${key}&page_size=${pageSize}&page=${page}&ordering=${orderBy}`]
    // const optionalFilterListKey = ['platforms', 'publishers', 'genres']
    const optionalFilterList = {
      platforms,
      publishers,
      genres
    }
    const entries = Object.entries(optionalFilterList)

    for (const [filterKey, value] of entries) {
      if (value !== '') {
        resultPath.push(`&${filterKey}=${value}`)
      }
    }

    // optionalFilterList.forEach((item, index): void => {
    //   if (item !== '') {
    //     result.push(`&${optionalFilterList[index]}=${item}`)
    //   }
    // })
    // &platforms=${platforms}
    // &publishers=${publishers}
    // &genres=${genres}
    return resultPath.join('')
  },
  mainPagePath: () => '/',
  catalogPagePath: () => '/catalog',
  gamePagePath: () => '/catalog/:id',
  searchPagePath: () => '/search',
  notFoundPagePath: () => '*'
}

export default routes
