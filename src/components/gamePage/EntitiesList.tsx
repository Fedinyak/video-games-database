/* eslint-disable functional/no-expression-statements */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable functional/prefer-immutable-types */
import React from 'react'
import { Typography } from '@mui/material'
import { type listsType } from '../../slices/gamesSlice'

export interface entitiesListType { entitiesList: listsType[], title: string }

const EntitiesList = ({ entitiesList, title }: entitiesListType): JSX.Element => (
  <>
    <Typography
      component="h4"
      sx={{
        color: 'white',
        fontWeight: 'bolder'
      }}
    >
      {title}
    </Typography>
    {entitiesList.map(({ id, name }: listsType) => (
      <Typography
        key={id}
        variant="body1"
        sx={{
          color: 'white'
        }}
      >
        {name}
      </Typography>
    ))}
  </>
)

export default EntitiesList
