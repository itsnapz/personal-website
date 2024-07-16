import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/work" Component={Work} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;