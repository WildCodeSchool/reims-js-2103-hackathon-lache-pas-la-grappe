import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Vine from './component/Vine';
import Map from './component/Map';
import Plants from './component/Plants';
import Navbar from './component/Navbar';

import './component/Navbar.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Vine />
      <Switch>
        <Route exact path="/plants" component={Plants}>
          <Plants />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/map" component={Map}>
          <Map />
        </Route>
      </Switch>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
