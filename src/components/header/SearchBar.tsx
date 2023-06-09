/* eslint-disable functional/no-conditional-statements */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addSearchGames, addSearchWord } from '../../slices/searchSlice'
import { fetching } from '../../slices/uiSlice'
import { addActiveGame, addScreenshots } from '../../slices/activeGameSlice'

const Search = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const searchGamesStore = useAppSelector((state) => state.searchGames.items)
  const searchWord = useAppSelector((state) => state.searchGames.searchWords)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const requestData = async () => {
      const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      const response = await axios.get(
          `https://api.rawg.io/api/games?key=${key}&search=${searchWord}`
      )
      dispatch(addSearchGames(response.data.results))
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [searchWord])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 'event--------------')
    dispatch(addSearchWord(event.target.value))
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const [getSearchGameId] = searchGamesStore.filter(
      (item) => item.name === inputValue
    )
    console.log(getSearchGameId === undefined, 'getSearchGameId------')
    if (getSearchGameId === undefined) {
      // alert('---undefined')
      navigate('search')
    } else {
      // eslint-disable-next-line functional/no-conditional-statements
      const requestData = async () => {
        dispatch(fetching(true))
        const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
        const responseActiveGame = await axios.get(
          `https://api.rawg.io/api/games/${getSearchGameId.id}?key=${key}`
        )
        const responseScreenshots = await axios.get(
          `https://api.rawg.io/api/games/${getSearchGameId.id}/screenshots?key=${key}`
        )
        dispatch(
          addActiveGame({
            id: responseActiveGame.data.id,
            name: responseActiveGame.data.name,
            image: responseActiveGame.data.background_image,
            description: responseActiveGame.data.description_raw
          })
        )
        dispatch(addScreenshots(responseScreenshots.data.results))
        dispatch(fetching(false))
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
      }
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      requestData()

      navigate(`catalog/${getSearchGameId.id}`)
      dispatch(addSearchWord(''))
      setInputValue('')
    }
  }

  return (
    <Stack spacing={2} sx={{ width: 600 }}>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          onChange={(event, newValue) => {
            setInputValue(newValue)
          }}
          options={searchGamesStore.map((item) => item.name)}
          value={inputValue}
          // onClick={handleSubmit}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleChange}
              // onClick={handleSubmit}
              // filterOptions={top100Films.map((option) => option.title)}
              label={t('nav.searchBar.label')}
              InputProps={{
                ...params.InputProps,
                type: 'search'
                // onSubmit: handleSubmit
                // type: 'submit'
              }}
            />
          )}
        />
        {/* <input type="submit" value={t('nav.searchBar.submitButton')} /> */}
        <Button type="submit" variant="contained">{t('nav.searchBar.submitButton')}</Button>
      </form>
    </Stack>
  )
}
export default Search
