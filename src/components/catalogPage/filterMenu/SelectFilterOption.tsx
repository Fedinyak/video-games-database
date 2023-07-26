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
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { type listsType } from '../../../slices/gamesSlice'
import { useAppDispatch } from '../../../hooks/reduxHooks'

const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250
    }
  }
}

export interface selectOptionType {
  label: string
  menuItemList: listsType[]
  selectValue: string[]
  reducer: any
}

const SelectFilterOption = ({ label, menuItemList, selectValue, reducer }: selectOptionType) => {
  const dispatch = useAppDispatch()
  const handleChange = (event: any) => {
    const {
      target: { value }
    } = event
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(event, 'target----------------------------------------------')
    dispatch(reducer(value))
  }

  return (
    <FormControl sx={
            {
              minWidth: '25%',
              mb: 1
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
