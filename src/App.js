import React, {useState} from 'react';
import './App.css';
import SimpleTabs from './Tabs';
import {items} from './items';
import {stockableIngredients} from './BuyScreen'
import DifficultyScreen from './DifficultyScreen'

const initialItemPrices = {};
items.forEach(item => {
  if (stockableIngredients.includes(item.name)){
      initialItemPrices[item.name] = item.value;
  }
});




function App() {

  const [itemPrices, setItemPrices] = useState(initialItemPrices);

  const [difficulty, setDifficulty] = useState(-1);

  if (difficulty === -1) {
    return (<DifficultyScreen setDifficulty={setDifficulty}/>)
  }

  return (
    <div className="App">
      <SimpleTabs itemPrices={itemPrices} setItemPrices={setItemPrices}/>
    </div>
  );
}

export default App;
