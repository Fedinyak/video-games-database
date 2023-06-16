import React, {
//  useEffect, useState
} from 'react'
import './App.css'
// import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { Container } from '@mui/system'
import storeTemplate from './storeTemplate'
import Catalog from './components/catalogPage/Catalog'
import Main from './components/mainPage/Main'
import Nav from './components/Nav'
import i18n from './locales/i18next'
// import Grid from '@mui/system/Unstable_Grid';
// import Box from '@mui/system/Box';
// import CatalogItem from './components/catalog/CatalogItem';
// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// e1dae6cdd05a459f82b1cf12bbea83f0
// https://api.rawg.io/api/games
// const fn = async () => {
//   // GET-запрос сайта Хекслета
//   const response = await axios.get('https://ru.hexlet.io');
//   console.log(response.status); // код ответа
//   console.log(response.headers); // напечатает заголовки
//   console.log(response.data); // тело ответа
// }

// const [store, setStore] = useState([])
// useEffect(() => {
//   const requestData = async () => {
//     const key = 'e1dae6cdd05a459f82b1cf12bbea83f0';
//     const response = await axios.get(`https://api.rawg.io/api/games?key=${key}`);
//     // console.log(response.status); // код ответа
//     // console.log(response.headers); // напечатает заголовки
//     // console.log(response.data.results); // тело ответа
//     setStore(response.data.results);
//     console.log(store)
//     // store.push('response.data.results');
//   };
//   requestData();
// }, []);

const App = (): JSX.Element => (
  <I18nextProvider i18n={i18n}>

    <Container
      fixed
      sx={{
        bgcolor: 'gray'
      }}
    >
      <BrowserRouter>
        {/* <div className="App">
            <Catalog store={store} />

          </div> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Main store={storeTemplate} />} />
          <Route path="catalog" element={<Catalog store={storeTemplate} />} />
        </Routes>
      </BrowserRouter>
    </Container>

  </I18nextProvider>
)
export default App
