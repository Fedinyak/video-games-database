/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable multiline-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable functional/no-let */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
import React, { useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid'
import Box from '@mui/system/Box'
import {
  // useParams,
  // Link,
  useLocation
  // useRouteMatch,
} from 'react-router-dom'
// import { Box } from '@mui/system'
import axios from 'axios'
// import { addGames } from '../../slices/gamesSlice'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Container } from '@mui/system'
import { Rating, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addActiveGame, addScreenshots } from '../../slices/activeGameSlice'
import { fetching } from '../../slices/uiSlice'
import Preloader from '../ui/Preloader'
import routesPath from '../../routesPath'
import EntitiesList from './EntitiesList'
import { type listsType } from '../../slices/gamesSlice'
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types

const GamePage = (): JSX.Element => {
  // const { topicId } = useParams()
  // const { url } = useRouteMatch()
  const location = useLocation()
  const { t } = useTranslation()
  const [, , gameId] = location.pathname.split('/')
  // console.log(topicId, 'topicId')
  // console.log(url, 'url')
  // console.log(location, 'locationnn')
  const dispatch = useAppDispatch()
  const gameStore = useAppSelector((state) => state.activeGame.item)
  // const platformsStore = gameStore?.platforms.forEach(item => {

  // })
  const platformsNormalizeStore = (data: [{ platform: listsType }]): listsType[] => {
    const result: listsType[] = []
    data.forEach((item) => result.push(item.platform))
    return result
  }

  const screenshotsStore = useAppSelector(
    (state) => state.activeGame.screenshots
  )
  // console.log(gameStore, 'sttttoooreeeRedux')
  useEffect(() => {
    const requestData = async () => {
      dispatch(fetching(true))
      // const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      try {
        const responseActiveGame = await axios.get(
          routesPath.detailsOfGameApiPath(gameId)
        // `https://api.rawg.io/api/games/${gameId}?key=${key}`
        )
        const responseScreenshots = await axios.get(
          routesPath.screenshotsOfGameApiPath(gameId)
        // `https://api.rawg.io/api/games/${gameId}/screenshots?key=${key}`
        )

        // const responseActiveGame = {
        //   data: {
        //     id: 3328,
        //     // slug: 'the-witcher-3-wild-hunt',
        //     name: 'The Witcher 3: Wild Hunt',
        //     // name_original: 'The Witcher 3: Wild Hunt',
        //     // description: '<p>The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.</p>\n<p>CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.</p>\n<p>Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.</p>',
        //     // metacritic: 92,
        //     // released: '2015-05-18',
        //     // tba: false,
        //     // updated: '2023-06-27T17:29:58',
        //     background_image: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        //     // background_image_additional: 'https://media.rawg.io/media/screenshots/3e4/3e4576a772b3df47bfc52b86e4cf7e03.jpg',
        //     // website: 'https://thewitcher.com/en/witcher3',
        //     // rating: 4.66,
        //     // rating_top: 5,
        //     // playtime: 46,
        //     // reddit_description: 'A subreddit for veterans and new fans alike of The Witcher 3: Wild Hunt as well as for other Witcher games and the franchise in general. Everyone is welcome.',
        //     // metacritic_url: 'https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt',
        //     description_raw: 'The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.\n\nCD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.\n\nPlayers praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.'
        //   }
        // }
        // // const data = responseActiveGame.data.results
        console.log(responseActiveGame.data, 'rrrrrrreespons')
        // console.log(gameId, 'gameIdddddd')
        // dispatch(addActiveGame(responseActiveGame.data))
        dispatch(
          addActiveGame({
            id: responseActiveGame.data.id,
            name: responseActiveGame.data.name,
            image: responseActiveGame.data.background_image,
            description: responseActiveGame.data.description_raw,
            metacritic: responseActiveGame.data.metacritic,
            released: responseActiveGame.data.released,
            website: responseActiveGame.data.website,
            rating: responseActiveGame.data.rating,
            playtime: responseActiveGame.data.playtime,
            platforms: responseActiveGame.data.platforms,
            genres: responseActiveGame.data.genres,
            publishers: responseActiveGame.data.publishers
          })
        )
        dispatch(addScreenshots(responseScreenshots.data.results))
        dispatch(fetching(false))
      // console.log(gameStore)
      // name = responseActiveGame.data.name
      // image = responseActiveGame.data.background_image
      // console.log(name, image, 'dfdfdfdfdf')
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [])

  const name = gameStore?.name
  const image = gameStore?.image
  // const id = gameStore?.id
  const description = gameStore?.description
  // const screenshots = [{ name, id, image }, ...screenshotsStore]
  const screenshots = screenshotsStore
  const isFetching = useAppSelector((state) => state.uiState.isFetching)
  console.log(screenshots, 'screenshots--------------')
  // console.log(gameStore?.genres, 'gameStore.genres--------------------------------------------')
  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        // <Grid xs={12}>
        <>
          {/* <p>{location.pathname.split('/')}</p> */}

          <Box
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column' },
              // alignItems: 'center',
              // bgcolor: '#474747',
              overflow: 'hidden',
              // borderRadius: '12px',
              boxShadow: 1
            }}
          >
            <Box
              sx={{
                position: 'relative'
                // fontWeight: 'bold'
              }}
            >
              <Box
                component="img"
                sx={{
                  objectFit: 'cover',
                  height: 'auto',
                  width: '100%'
                }}
                alt={name}
                src={image}
              />
              <Box
                component="div"
                sx={{
                  // height: '10%',
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  position: 'absolute',
                  bottom: '0'
                }}
              >
                <Container>
                  <Typography
                    component="h1"
                    mt={2}
                    mb={3}
                    sx={{
                      textTransform: 'capitalize',
                      color: 'white',
                      fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                      lineHeight: { xs: '2.2rem', sm: '3.3rem', md: '4.4rem' },
                      fontWeight: 'bolder'
                    }}
                  >
                    {name}
                  </Typography>
                </Container>
              </Box>
            </Box>
            <Container sx={{ paddingTop: 1, paddingBottom: 2 }}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 4, md: 6 }}
              >
                <Grid xs={12} sm={8} md={6}>
                  <Typography
                    // component="h1"
                    variant="body1"
                    sx={{
                      color: 'white'
                      // fontWeight: 'bolder',
                      // fontSize: 40,
                      // position: 'relative'
                    }}
                  >
                    {description}
                  </Typography>
                </Grid>
                <Grid xs={12} sm={4} md={6}>
                  {(gameStore !== null) && (
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                    {/* <Grid xs={6} sm={4} md={2}>
                      <Typography
                        component="h4"
                        sx={{
                          color: 'white',
                          fontWeight: 'bolder'
                        }}
                      >
                        {t('gamePage.platforms')}
                      </Typography>

                      {gameStore?.platforms.map((item) => (
                        <Typography
                          key={item.platform.id}
                          variant="body1"
                          sx={{
                            color: 'white'
                          }}
                        >
                          {item.platform.name}
                        </Typography>
                      ))}
                    </Grid> */}
                    <Grid xs={12} sm={4} md={2}>
                      <Typography
                        component="h4"
                        sx={{
                          color: 'white',
                          fontWeight: 'bolder'
                        }}
                      >
                        {t('gamePage.rating')}
                      </Typography>
                      <Rating name="rating" value={gameStore.rating} readOnly size="large" />
                    </Grid>
                    <Grid xs={6} sm={4} md={4}>
                      <EntitiesList
                        entitiesList={gameStore.publishers}
                        title={t('gamePage.publishers')}
                      />
                    </Grid>
                    <Grid xs={6} sm={4} md={4}>
                      <EntitiesList
                        entitiesList={gameStore.genres}
                        title={t('gamePage.genres')}
                      />
                    </Grid>
                    <Grid xs={6} sm={4} md={12}>
                      <EntitiesList
                        entitiesList={platformsNormalizeStore(gameStore.platforms)}
                        title={t('gamePage.platforms')}
                      />
                    </Grid>
                  </Grid>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container sx={{ paddingTop: 1, paddingBottom: 4 }}>
            <Typography
              component="h4"
              // variant="body1"
              sx={{
                color: 'white',
                fontWeight: 'bolder'
                // fontSize: 40,
                // position: 'relative'
              }}
            >
              {t('gamePage.screenshots')}
            </Typography>
            <Carousel showArrows showThumbs>
              {screenshots?.map((screenshot) => (
                <div key={screenshot.id}>
                  <img alt={name} src={screenshot.image} />
                </div>
              ))}
            </Carousel>
          </Container>
          {/* </Grid> */}
        </>
      )}
    </div>
  )
}

export default GamePage
