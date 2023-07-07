/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import { useTranslation } from 'react-i18next'
import { addOrder } from '../../slices/gamesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

const getFilterType = (value: string): string => {
  switch (value) {
    case 'name':
      return 'name'
    case 'nameDec':
      return '-name'
    case 'rating':
      return 'rating'
    case 'ratingDec':
      return '-rating'
    case 'released':
      return 'released'
    case 'releasedDec':
      return '-released'
    case 'popularity':
      return ''
    default:
      return ''
  }
}

const getFilterValue = (value: string): string => {
  switch (value) {
    case '-name':
      return 'nameDec'
    case '-rating':
      return 'ratingDec'
    case '-released':
      return 'releasedDec'
    case '':
      return 'popularity'
    default:
      return value
  }
}

const FilterBar = (): JSX.Element => {
  const { t } = useTranslation()

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(addOrder(getFilterType(event.target.value)))
  }

  const dispatch = useAppDispatch()
  const gameFilter = useAppSelector((state) => state.games.order)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t('filter.label')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={getFilterValue(gameFilter)}
          label="Order"
          onChange={handleChange}
        >
          <MenuItem value="popularity">{t('filter.popularity')}</MenuItem>
          <MenuItem value="name">{t('filter.nameIncrease')}</MenuItem>
          <MenuItem value="nameDec">{t('filter.nameDecrease')}</MenuItem>
          <MenuItem value="rating">{t('filter.ratingIncrease')}</MenuItem>
          <MenuItem value="ratingDec">{t('filter.ratingDecrease')}</MenuItem>
          <MenuItem value="released">{t('filter.releasedIncrease')}</MenuItem>
          <MenuItem value="releasedDec">{t('filter.releasedDecrease')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export default FilterBar
