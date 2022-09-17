import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

//route imports
import Instructions from './routes/Instructions';
import About from './routes/About';
import Homepage from './Homepage';
import PlayNow from './routes/PlayNow';
import SignIn from './routes/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/play-now' element={<PlayNow />} />
          <Route path='/about' element={<About />} />
          <Route path='/instructions' element={<Instructions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
