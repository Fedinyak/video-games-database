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
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addActiveGame, addScreenshots } from '../../slices/activeGameSlice'
import { fetching } from '../../slices/uiSlice'
import Preloader from '../ui/Preloader'
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types

const GamePage = (): JSX.Element => {
  // const { topicId } = useParams()
  // const { url } = useRouteMatch()
  const location = useLocation()
  const [, , gameId] = location.pathname.split('/')
  // console.log(topicId, 'topicId')
  // console.log(url, 'url')
  // console.log(location, 'locationnn')
  const dispatch = useAppDispatch()
  const gameStore = useAppSelector((state) => state.activeGame.item)
  const screenshotsStore = useAppSelector(
    (state) => state.activeGame.screenshots
  )
  // console.log(gameStore, 'sttttoooreeeRedux')
  useEffect(() => {
    const requestData = async () => {
      dispatch(fetching(true))
      const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      const responseActiveGame = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${key}`
      )
      const responseScreenshots = await axios.get(
        `https://api.rawg.io/api/games/${gameId}/screenshots?key=${key}`
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
          description: responseActiveGame.data.description_raw
          // screenshots: responseActiveGame.data.short_screenshots
        })
      )
      dispatch(addScreenshots(responseScreenshots.data.results))
      dispatch(fetching(false))
      // console.log(gameStore)
      // name = responseActiveGame.data.name
      // image = responseActiveGame.data.background_image
      // console.log(name, image, 'dfdfdfdfdf')
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [])

  const name = gameStore?.name
  const image = gameStore?.image
  const description = gameStore?.description
  const screenshots = screenshotsStore
  const isFetching = useAppSelector((state) => state.uiState.isFetching)
  console.log(screenshots, 'screenshots--------------')
  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        <Grid xs={12}>
          <p>{location.pathname.split('/')}</p>
          <Carousel showArrows showThumbs>
            {screenshots?.map((screenshot) => (
              <div key={screenshot.id}>
                <img alt={name} src={screenshot.image} />
              </div>
            ))}
          </Carousel>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column' },
              // alignItems: 'center',
              bgcolor: '#474747',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: 1,
              fontWeight: 'bold'
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
            <br />
            <Box
              component="h3"
              sx={{
                textTransform: 'capitalize',
                color: 'white',
                fontSize: 40
              }}
            >
              {name}
            </Box>
            <p>{description}</p>
          </Box>
        </Grid>
      )}
    </div>
  )
}

export default GamePage
