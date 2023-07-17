/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
import Grid from '@mui/system/Unstable_Grid'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import MainItem from './MainItem'
// import StoreTest from './StoreTest'
import { type GameListType } from '../../propsType/gameListType'

interface gameProps {
  store: GameListType
}

const Main = ({ store }: gameProps) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Typography variant="h4" component="h2">
        {t('mainPage.title')}
      </Typography>
      {/* <StoreTest /> */}
      <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
        {store.map(
          (item: { name: string, id: number, background_image: string }) => (
            <MainItem
              name={item.name}
              key={item.id}
              id={item.id}
              image={item.background_image}
            />
          )
        )}
      </Grid>
    </Container>
  )
}
export default Main
