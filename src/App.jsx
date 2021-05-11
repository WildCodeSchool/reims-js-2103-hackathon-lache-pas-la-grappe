import React, { useState } from 'react';
import Plants from './component/Plants';
import './App.css';

function App() {
  const [tree, setTree] = useState(false);
  const [sunflower, setSunflower] = useState(false);
  const [hive, setHive] = useState(false);
  const [sprout, setSprout] = useState(false);
  const [corn, setCorn] = useState(false);

  return (
      <Plants 
      setTree={setTree}
      setSunflower={setSunflower}
      setHive={setHive}
      setSprout={setSprout}
      setCorn={setCorn}
      />
  );
}

export default App;
