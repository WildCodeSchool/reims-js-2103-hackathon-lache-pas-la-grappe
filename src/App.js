import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Vine from './component/Vine';
import Navbar from './component/Navbar';
import Map from './component/Map';


import './component/Navbar.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Vine />
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
