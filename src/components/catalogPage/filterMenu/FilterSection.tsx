/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { addGenres, addPlatforms, addPublishers } from '../../../slices/gamesSlice'
import OrderSelect from './OrderSelect'
import SelectFilterOption from './SelectFilterOption'

const FilterSection = () => {
  const { t } = useTranslation()

  const platformsList = useAppSelector((state) => state.games.platformsList)
  const platforms = useAppSelector((state) => state.games.platforms)

  const publishersList = useAppSelector((state) => state.games.publishersList)
  const publishers = useAppSelector((state) => state.games.publishers)

  const genresList = useAppSelector((state) => state.games.genresList)
  const genres = useAppSelector((state) => state.games.genres)

  return (
    <>
      <OrderSelect />
      <SelectFilterOption
        label={t('filterMenu.filterBy.platforms')}
        menuItemList={platformsList}
        selectValue={platforms}
        reducer={addPlatforms}
      />
      <SelectFilterOption
        label={t('filterMenu.filterBy.publishers')}
        menuItemList={publishersList}
        selectValue={publishers}
        reducer={addPublishers}
      />
      <SelectFilterOption
        label={t('filterMenu.filterBy.genres')}
        menuItemList={genresList}
        selectValue={genres}
        reducer={addGenres}
      />
    </>
  )
}

export default FilterSection
