import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import runApp from './init'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

// eslint-disable-next-line functional/no-expression-statements
root.render(
  <React.StrictMode>
    {runApp()}
  </React.StrictMode>
)
