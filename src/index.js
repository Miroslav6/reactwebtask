import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Layout from './pages/layout'
import Albums from './pages/albums'
import AlbumPage from './pages/albumpage';
import Favourites from './pages/favourites';
import NoPage from './pages/NoPage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import './assets/css/main.scss';

ReactDOM.render(
  <><React.StrictMode>

  </React.StrictMode><BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="albums" element={<Albums />} />
              <Route path="/albums/:albumParamId-:paramId" element={<AlbumPage />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter></>,
  document.getElementById('root')
);
