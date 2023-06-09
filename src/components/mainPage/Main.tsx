/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
import Grid from '@mui/system/Unstable_Grid'
import { useTranslation } from 'react-i18next'
import MainItem from './MainItem'
import StoreTest from './StoreTest'
import { type GameListType } from '../../propsType/gameListType'

interface gameProps {
  store: GameListType
}

const Main = ({ store }: gameProps) => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('mainPage.title')}</h1>
      <StoreTest />
      <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
        {store.map((item: { name: string, id: number, background_image: string }) => (
          <MainItem
            name={item.name}
            key={item.id}
            id={item.id}
            image={item.background_image}
          />
        ))}
      </Grid>
    </>
  )
}
export default Main
