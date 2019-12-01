import React, {useState} from 'react';
import './App.css';
import SimpleTabs from './Tabs';
import {items} from './items';
import {stockableIngredients} from './BuyScreen'
import DifficultyScreen from './DifficultyScreen'


const getInitialItemPrices = () => {
  const initialItemPrices = {};
  items.forEach(item => {
    if (stockableIngredients.includes(item.name)){
        initialItemPrices[item.name] = item.value;
    }
  });
  return initialItemPrices;
}

const keyColours = ["black", "yellow", "cyan", "pink pizzazz"];

const easyMax = 50;
const mediumMax = 100;
const hardMax = 150;

let diffDone = false;
const recalculateValues = (max) => {
  items.forEach(item => {
    if (keyColours.includes(item.name)) {
      item.value = Math.ceil((Math.random() * 50)) + max - 50;
    }
    else {
      item.value = Math.ceil((Math.random() * 200));
    }
  });
}

const recalculateZenValues = () => {
  items.forEach(item => {
    if (stockableIngredients.includes(item.name)) {
      item.value = 1;
    }
    else {
      item.value = Math.ceil((Math.random() * 200));
    }
  });
}

const recalculateUltraValues = () => {
  items.forEach(item => {
    if (stockableIngredients.includes(item.name)) {
      item.value = Math.ceil((Math.random() * 50)) + 200 - 50;
    }
    else {
      item.value = Math.ceil((Math.random() * 200));
    }
  });
}


function App() {

  const [itemPrices, setItemPrices] = useState(getInitialItemPrices());
  const [difficulty, setDifficulty] = useState(-1);

  if (!diffDone && difficulty !== -1) {

    if (difficulty === 1) {
        recalculateValues(easyMax);
    }
    if (difficulty === 2) {
        recalculateValues(mediumMax);
    }
    if (difficulty === 3) {
        recalculateValues(hardMax);
    }
    if (difficulty === 4) {
        recalculateZenValues();
    }
    if (difficulty === 5) {
        recalculateUltraValues();
    }



      setItemPrices(getInitialItemPrices());

      diffDone = true;
  }




  if (difficulty === -1) {
    return (
      <div className="App" style={{backgroundColor:"white", width: "800px", height: "800px"}}>
      <DifficultyScreen setDifficulty={setDifficulty}/>
    </div>)
  }

  return (

    <div className="App" style={{backgroundColor:"white", width: "800px", height: "800px"}}>
      <SimpleTabs itemPrices={itemPrices} setItemPrices={setItemPrices}/>
    </div>
  );
}

export default App;
