import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import Quiz from './pages/Quiz.js';
import Create from './pages/Create.js';
import End from './pages/End.js';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/quiz' element={ <Quiz /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/end' element={ <End /> } />
      </Routes>
    </Fragment>
  );
}

export default App;