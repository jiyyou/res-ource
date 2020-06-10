import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './partials/_common.scss';
import Header from './components/Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          {/*<Route path="/" exact component={Warehouse} />*/}
        </Switch>
      </BrowserRouter>
  );
}

export default App;