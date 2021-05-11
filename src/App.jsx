import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Vine from './component/Vine';
import Plants from './component/Plants';
import Map from './component/Map';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  const [tree, setTree] = useState(false);
  const [sunflower, setSunflower] = useState(false);
  const [hive, setHive] = useState(false);
  const [sprout, setSprout] = useState(false);
  const [corn, setCorn] = useState(false);

  return (
    <div className="App">
      <Router>
        <img className="lplg-logo" src="https://nsa40.casimages.com/img/2021/05/11/210511104346329002.png" alt="lplg-logo" width="150px" />
        <Switch>
          <Route exact path="/">
            <Vine />
          </Route>
          <Route exact path="/plants">
            <Plants 
                setTree={setTree}
                setSunflower={setSunflower}
                setHive={setHive}
                setSprout={setSprout}
                setCorn={setCorn}
              />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
