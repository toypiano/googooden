import React, { useState, useEffect } from 'react';
import shuffle from 'lodash.shuffle';
import TimesTable from './TimesTable';
import Navbar from './Navbar';

// import { initialTimesItems } from './models/TimesItem';
// import { TimesItem, initialTimesItems } from './models/TimesItem';
// import { useImmer } from './hooks/useImmer';

const initialGridAreas = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function App() {
  // TODO - connect to firebase
  // const [timesItems, setTimesItems] = useImmer(initialTimesItems);

  const [gridAreas, setGridAreas] = useState(initialGridAreas);
  const [stage, setStage] = useState(2);

  const selectStage = (stage: number) => {
    setStage(stage);
  };

  const scramble = () => {
    setGridAreas((prev) => shuffle(prev));
  };

  const resetOrder = () => {
    setGridAreas(initialGridAreas);
  };

  useEffect(() => {});

  return (
    <div className="App">
      <Navbar
        stage={stage}
        handleScrambleClick={scramble}
        handleStageClick={selectStage}
        handleResetOrderClick={resetOrder}
      />
      <header className="header">
        <h1>
          <span role="img" aria-label="rainbow">
            🌈
          </span>
          구구든
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </h1>
      </header>
      <TimesTable gridAreas={gridAreas} stage={stage} />
    </div>
  );
}

export default App;
