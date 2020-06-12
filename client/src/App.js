import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './partials/_common.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import PostCard from './components/PostCard/PostCard';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Main />
        <Switch>
          {/*<Route path="/" exact component={Warehouse} />*/}
        </Switch>
      </BrowserRouter>
  );
}

export default App;