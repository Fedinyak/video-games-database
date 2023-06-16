import React, {
// useEffect, useState
} from 'react'

import Grid from '@mui/system/Unstable_Grid'
import CatalogItem from './CatalogItem'
import { type GameListType } from '../../propsType/gameListType'

interface gameProps {
  store: GameListType
}

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, functional/prefer-immutable-types
const Catalog = ({ store }: gameProps) => (

  <>
    <h1>Catalog</h1>
    <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
      {store.map(
        (item: any) => (
          <CatalogItem
            name={item.name}
            id={item.id}
            key={item.id}
            image={item.background_image}
          />
        )
      )}
    </Grid>
  </>
)

export default Catalog
