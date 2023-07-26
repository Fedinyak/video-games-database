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
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addActiveGame, addScreenshots } from '../../slices/activeGameSlice'
import { fetching } from '../../slices/uiSlice'
import Preloader from '../ui/Preloader'
import routesPath from '../../routesPath'
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types

const GamePage = (): JSX.Element => {
  const location = useLocation()
  const { t } = useTranslation()
  const [, , gameId] = location.pathname.split('/')
  const dispatch = useAppDispatch()
  const gameStore = useAppSelector((state) => state.activeGame.item)
  const screenshotsStore = useAppSelector((state) => state.activeGame.screenshots)
  useEffect(() => {
    const requestData = async () => {
      dispatch(fetching(true))
      const responseActiveGame = await axios.get(routesPath.detailsOfGameApiPath(gameId))
      const responseScreenshots = await axios.get(routesPath.screenshotsOfGameApiPath(gameId))

      dispatch(addActiveGame({
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
      }))
      dispatch(addScreenshots(responseScreenshots.data.results))
      dispatch(fetching(false))
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [])

  const name = gameStore?.name
  const image = gameStore?.image
  const description = gameStore?.description
  const screenshots = screenshotsStore
  const isFetching = useAppSelector((state) => state.uiState.isFetching)

  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : (
        <>
          <Box
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column' },
              overflow: 'hidden',
              boxShadow: 1
            }}
          >
            <Box
              sx={{
                position: 'relative'
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
            <Container>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12} sm={8} md={6}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white'
                    }}
                  >
                    {description}
                  </Typography>
                </Grid>
                <Grid xs={6} sm={4} md={6}>
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
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container>
            <Typography
              component="h4"
              sx={{
                color: 'white',
                fontWeight: 'bolder'
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
        </>
      )}
    </div>
  )
}

export default GamePage
