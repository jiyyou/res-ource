import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './partials/_common.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
  );
}

export default App;