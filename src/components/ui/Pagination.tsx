/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { addActivePage } from '../../slices/gamesSlice'

const getPaginationCount = (count: number, size: number) => {
  if (count <= size) {
    return 1
  }
  return Math.round(count / size)
}

const CatalogPagination = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const itemsCount = useAppSelector((state) => state.games.itemsCount)
  const pageSize = useAppSelector((state) => state.games.pageSize)
  const page = useAppSelector((state) => state.games.page)
  const paginationCount = getPaginationCount(itemsCount, pageSize)
  // eslint-disable-next-line functional/prefer-immutable-types
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value, 'vvaaaaalue')
    dispatch(addActivePage(value))
  }

  return (
    <Stack spacing={2} mt={3} mb={6} sx={{ alignItems: 'center' }}>
      <Pagination
        count={paginationCount}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        size="small"
      />
    </Stack>
  )
}
export default CatalogPagination
