import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Vine from './component/Vine';
import './App.css';
import Map from './component/Map';

import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Vine />
        </Route>
        <Route exact path="/Map">
          <Map />
        </Route>
        <Route exact path="/Navbar">
          <Navbar />
        </Route>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
