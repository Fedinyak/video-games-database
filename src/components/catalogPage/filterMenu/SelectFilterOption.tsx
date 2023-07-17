/* eslint-disable react/destructuring-assignment */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select
// { type SelectChangeEvent }
  from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { type listsType } from '../../../slices/gamesSlice'
import { useAppDispatch } from '../../../hooks/reduxHooks'

// const ITEM_HEIGHT = 48
// const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250
    }
  }
}

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder'
// ]

// function getStyles (name: string, personName: readonly string[]) {
// // function getStyles (name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       !personName.includes(name)
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium
//   }
// }
// const publishersList = useAppSelector((state) => state.games.publishersList)
// const publishers = useAppSelector((state) => state.games.publishers)
export interface selectOptionType {
  label: string
  menuItemList: listsType[]
  selectValue: string[]
  reducer: any
}

const SelectFilterOption = ({ label, menuItemList, selectValue, reducer }: selectOptionType) => {
  // const [personName, setPersonName] = React.useState<string[]>([])
  const dispatch = useAppDispatch()
  // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  const handleChange = (event: any) => {
    const {
      target: { value }
    } = event
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === 'string' ? value.split(',') : value
    // )
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(event, 'target----------------------------------------------')
    dispatch(reducer(value))
  }

  return (
    <FormControl sx={
            {
            //  m: 1,
              minWidth: '25%',
              // marginBottom:
              mb: 1
              // minWidth: '60%'
              // minHeight: '4.2em'
            }
         }
    >
      <InputLabel
        sx={{
          // lineHeight: '2.1em'
          // fontSize: '0.7em'
        }}
        id="multiple-chip-label"
      >
        {label}

      </InputLabel>
      <Select
        // sx={{ minHeight: '4.2em' }}
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        // value={menuItemList.filter((item)=> item.id === selectValue)}
        value={selectValue}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, width: '100%' }}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {menuItemList.map((item: any) => (
          <MenuItem
            key={item.id}
            value={item.name}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectFilterOption
// /* eslint-disable functional/no-return-void */
// /* eslint-disable functional/prefer-immutable-types */
// /* eslint-disable functional/no-expression-statements */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import * as React from 'react'
// import Box from '@mui/material/Box'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select
// // { type SelectChangeEvent }
//   from '@mui/material/Select'
// import Chip from '@mui/material/Chip'
// import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
// import { addPublishers } from '../../slices/gamesSlice'

// const ITEM_HEIGHT = 48
// const ITEM_PADDING_TOP = 8
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// }

// // const names = [
// //   'Oliver Hansen',
// //   'Van Henry',
// //   'April Tucker',
// //   'Ralph Hubbard',
// //   'Omar Alexander',
// //   'Carlos Abbott',
// //   'Miriam Wagner',
// //   'Bradley Wilkerson',
// //   'Virginia Andrews',
// //   'Kelly Snyder'
// // ]

// // function getStyles (name: string, personName: readonly string[]) {
// // // function getStyles (name: string, personName: readonly string[], theme: Theme) {
// //   return {
// //     fontWeight:
// //       !personName.includes(name)
// //         ? theme.typography.fontWeightRegular
// //         : theme.typography.fontWeightMedium
// //   }
// // }

// const SelectFilterOption = () => {
//   // const [personName, setPersonName] = React.useState<string[]>([])
//   const dispatch = useAppDispatch()
//   const publishersList = useAppSelector((state) => state.games.publishersList)
//   const publishers = useAppSelector((state) => state.games.publishers)

//   // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
//   const handleChange = (event: any) => {
//     const {
//       target: { value }
//     } = event
//     // setPersonName(
//     //   // On autofill we get a stringified value.
//     //   typeof value === 'string' ? value.split(',') : value
//     // )
//     // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//     dispatch(addPublishers(value))
//   }

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="multiple-chip-label">Chip</InputLabel>
//         <Select
//           labelId="multiple-chip-label"
//           id="multiple-chip"
//           multiple
//           value={publishers}
//           onChange={handleChange}
//           input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//           renderValue={(selected) => (
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//               {selected.map((value: any) => (
//                 <Chip key={value} label={value} />
//               ))}
//             </Box>
//           )}
//           MenuProps={MenuProps}
//         >
//           {publishersList.map((item) => (
//             <MenuItem
//               key={item.slug}
//               value={item.slug}
//               // style={getStyles(name, personName, theme)}
//             >
//               {item.slug}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   )
// }

// export default SelectFilterOption
