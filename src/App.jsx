import React, { useState } from 'react';
import Vine from './component/Vine';
import Plants from './component/Plants';
import './App.css';

function App() {
  const [tree, setTree] = useState(false);
  const [sunflower, setSunflower] = useState(false);
  const [hive, setHive] = useState(false);
  const [sprout, setSprout] = useState(false);
  const [corn, setCorn] = useState(false);

  return (
      <div className="App">
        <img className="lplg-logo" src="https://nsa40.casimages.com/img/2021/05/11/210511104346329002.png" alt="lplg-logo" width="150px" />
        <Vine />
        <Plants 
          setTree={setTree}
          setSunflower={setSunflower}
          setHive={setHive}
          setSprout={setSprout}
          setCorn={setCorn}
        />
      </div>
  );
}

export default App;
