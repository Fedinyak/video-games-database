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
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addSearchGames, addSearchWord } from '../../slices/searchSlice'

const Search = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const searchGamesStore = useAppSelector((state) => state.searchGames.items)
  const searchWord = useAppSelector((state) => state.searchGames.searchWords)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const requestData = async () => {
      const key = 'e1dae6cdd05a459f82b1cf12bbea83f0'
      const response = await axios.get(`https://api.rawg.io/api/games?key=${key}&search=${searchWord}`)
      // search
      // https://api.rawg.io/api/games?key=e1dae6cdd05a459f82b1cf12bbea83f0&page_size=10&page=2&%27%27&search=zelda
      dispatch(addSearchGames(response.data.results))
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    requestData()
  }, [searchWord])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(addOrder(getFilterType(event.target.value)))
    console.log(event.target.value, 'event--------------')
    dispatch(addSearchWord(event.target.value))
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // dispatch(addOrder(getFilterType(event.target.value)))
    // dispatch(addSearchWord(event.target.value))
    console.log(event.target, 'event--------------000')
    const [getSearchGameId] = searchGamesStore.filter((item) => item.name === inputValue)
    console.log(getSearchGameId.id, 'getSearchGameId-------------')
    navigate(`catalog/${getSearchGameId.id}`)
    // alert(inputValue)
    dispatch(addSearchWord(''))
    setInputValue('')
  }
  // alert(inputValue)
  // console.log(inputValue, 'newValue-------------')

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          onChange={(event, newValue) => { setInputValue(newValue) }}
          options={searchGamesStore.map((item) => item.name)}
          value={inputValue}
          // onClick={handleSubmit}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleChange}
              // onClick={handleSubmit}
              // filterOptions={top100Films.map((option) => option.title)}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search'
                // onSubmit: handleSubmit
                // type: 'submit'
                // type: 'submit'
              }}
            />
          )}
        />
        <input type="submit" value="Submit" />
        {/* <input type="submit" /> */}
      </form>
    </Stack>
  )
}
export default Search
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003
//   },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980
//   },
//   { title: 'Forrest Gump', year: 1994 },
//   { title: 'Inception', year: 2010 },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     year: 2002
//   },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: 'Goodfellas', year: 1990 },
//   { title: 'The Matrix', year: 1999 },
//   { title: 'Seven Samurai', year: 1954 },
//   {
//     title: 'Star Wars: Episode IV - A New Hope',
//     year: 1977
//   },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 },
//   { title: 'Léon: The Professional', year: 1994 },
//   { title: 'Spirited Away', year: 2001 },
//   { title: 'Saving Private Ryan', year: 1998 },
//   { title: 'Once Upon a Time in the West', year: 1968 },
//   { title: 'American History X', year: 1998 },
//   { title: 'Interstellar', year: 2014 },
//   { title: 'Casablanca', year: 1942 },
//   { title: 'City Lights', year: 1931 },
//   { title: 'Psycho', year: 1960 },
//   { title: 'The Green Mile', year: 1999 },
//   { title: 'The Intouchables', year: 2011 },
//   { title: 'Modern Times', year: 1936 },
//   { title: 'Raiders of the Lost Ark', year: 1981 },
//   { title: 'Rear Window', year: 1954 },
//   { title: 'The Pianist', year: 2002 },
//   { title: 'The Departed', year: 2006 },
//   { title: 'Terminator 2: Judgment Day', year: 1991 },
//   { title: 'Back to the Future', year: 1985 },
//   { title: 'Whiplash', year: 2014 },
//   { title: 'Gladiator', year: 2000 },
//   { title: 'Memento', year: 2000 },
//   { title: 'The Prestige', year: 2006 },
//   { title: 'The Lion King', year: 1994 },
//   { title: 'Apocalypse Now', year: 1979 },
//   { title: 'Alien', year: 1979 },
//   { title: 'Sunset Boulevard', year: 1950 },
//   {
//     title:
//       'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964
//   },
//   { title: 'The Great Dictator', year: 1940 },
//   { title: 'Cinema Paradiso', year: 1988 },
//   { title: 'The Lives of Others', year: 2006 },
//   { title: 'Grave of the Fireflies', year: 1988 },
//   { title: 'Paths of Glory', year: 1957 },
//   { title: 'Django Unchained', year: 2012 },
//   { title: 'The Shining', year: 1980 },
//   { title: 'WALL·E', year: 2008 },
//   { title: 'American Beauty', year: 1999 },
//   { title: 'The Dark Knight Rises', year: 2012 },
//   { title: 'Princess Mononoke', year: 1997 },
//   { title: 'Aliens', year: 1986 },
//   { title: 'Oldboy', year: 2003 },
//   { title: 'Once Upon a Time in America', year: 1984 },
//   { title: 'Witness for the Prosecution', year: 1957 },
//   { title: 'Das Boot', year: 1981 },
//   { title: 'Citizen Kane', year: 1941 },
//   { title: 'North by Northwest', year: 1959 },
//   { title: 'Vertigo', year: 1958 },
//   {
//     title: 'Star Wars: Episode VI - Return of the Jedi',
//     year: 1983
//   },
//   { title: 'Reservoir Dogs', year: 1992 },
//   { title: 'Braveheart', year: 1995 },
//   { title: 'M', year: 1931 },
//   { title: 'Requiem for a Dream', year: 2000 },
//   { title: 'Amélie', year: 2001 },
//   { title: 'A Clockwork Orange', year: 1971 },
//   { title: 'Like Stars on Earth', year: 2007 },
//   { title: 'Taxi Driver', year: 1976 },
//   { title: 'Lawrence of Arabia', year: 1962 },
//   { title: 'Double Indemnity', year: 1944 },
//   {
//     title: 'Eternal Sunshine of the Spotless Mind',
//     year: 2004
//   },
//   { title: 'Amadeus', year: 1984 },
//   { title: 'To Kill a Mockingbird', year: 1962 },
//   { title: 'Toy Story 3', year: 2010 },
//   { title: 'Logan', year: 2017 },
//   { title: 'Full Metal Jacket', year: 1987 },
//   { title: 'Dangal', year: 2016 },
//   { title: 'The Sting', year: 1973 },
//   { title: '2001: A Space Odyssey', year: 1968 },
//   { title: "Singin' in the Rain", year: 1952 },
//   { title: 'Toy Story', year: 1995 },
//   { title: 'Bicycle Thieves', year: 1948 },
//   { title: 'The Kid', year: 1921 },
//   { title: 'Inglourious Basterds', year: 2009 },
//   { title: 'Snatch', year: 2000 },
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 }
// ]
// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable functional/no-conditional-statements */
// /* eslint-disable functional/no-let */
// /* eslint-disable functional/no-expression-statements */
// /* eslint-disable functional/no-return-void */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import * as React from 'react'
// import TextField from '@mui/material/TextField'
// import Autocomplete from '@mui/material/Autocomplete'
// import CircularProgress from '@mui/material/CircularProgress'
// import { useEffect, useState } from 'react'

// interface Film {
//   title: string
//   year: number
// }

// async function sleep (delay = 0) {
//   return await new Promise((resolve) => {
//     setTimeout(resolve, delay)
//   })
// }

// const Search = () => {
//   const [open, setOpen] = useState(false)
//   const [options, setOptions] = useState<readonly Film[]>([])
//   const loading = open && options.length === 0

//   useEffect(() => {
//     let active = true

//     if (!loading) {
//       return undefined
//     }

//     void (async () => {
//       await sleep(1e3) // For demo purposes.

//       if (active) {
//         setOptions([...topFilms])
//       }
//     })()

//     return () => {
//       active = false
//     }
//   }, [loading])

//   useEffect(() => {
//     if (!open) {
//       setOptions([])
//     }
//   }, [open])

//   const handleChange = () => {
//     alert('gooooo')
//   }

//   return (
//     <Autocomplete
//       freeSolo
//       id="asynchronous-demo"
//       sx={{ width: 300 }}
//       // open={open}
//       // onOpen={() => {
//       //   setOpen(true)
//       // }}
//       // onClose={() => {
//       //   setOpen(false)
//       // }}
//       // isOptionEqualToValue={(option, value) => option.title === value.title}
//       // getOptionLabel={(option) => option.title}
//       options={options}
//       loading={loading}
//       onChange={handleChange}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Asynchronous"
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <>
//                 {loading
//                   ? (
//                     <CircularProgress color="inherit" size={20} />
//                     )
//                   : null}
//                 {params.InputProps.endAdornment}
//               </>
//             )
//           }}
//         />
//       )}
//     />
//   )
// }
// export default Search
// // Top films as rated by IMDb users. http://www.imdb.com/chart/top
// const topFilms = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003
//   },
//   { title: 'The Good, the Bad and the Ugly', year: 1966 },
//   { title: 'Fight Club', year: 1999 },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980
//   },
//   { title: 'Forrest Gump', year: 1994 },
//   { title: 'Inception', year: 2010 },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     year: 2002
//   },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: 'Goodfellas', year: 1990 },
//   { title: 'The Matrix', year: 1999 },
//   { title: 'Seven Samurai', year: 1954 },
//   {
//     title: 'Star Wars: Episode IV - A New Hope',
//     year: 1977
//   },
//   { title: 'City of God', year: 2002 },
//   { title: 'Se7en', year: 1995 },
//   { title: 'The Silence of the Lambs', year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: 'Life Is Beautiful', year: 1997 },
//   { title: 'The Usual Suspects', year: 1995 },
//   { title: 'Léon: The Professional', year: 1994 },
//   { title: 'Spirited Away', year: 2001 },
//   { title: 'Saving Private Ryan', year: 1998 },
//   { title: 'Once Upon a Time in the West', year: 1968 },
//   { title: 'American History X', year: 1998 },
//   { title: 'Interstellar', year: 2014 }
// ]
