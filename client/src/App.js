import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './partials/_common.scss';
import Header from './components/Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
  );
}

export default App;

