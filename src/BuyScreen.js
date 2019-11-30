import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {items} from './items';
import {getRandomItemInArray, buttonStyles} from './util'


import {ColourIcon} from './ColourIcon';


import { styled } from '@material-ui/core/styles';
const MyPaper = styled(Paper)({
  width: 120,
  margin: "20px"
});

const TextBox = ({children}) => {
  return <div style={{"padding":'10px'}}>{children}</div>
}

const IngredientTile = ({name, cost, numAvailable, onBuy, colour}) => {
  return (
    <MyPaper>
    <TextBox>
    <ColourIcon colour={colour}/>
    <h3> {name} </h3>
    <p> cost: ${cost}</p>

    <p> available: {numAvailable}</p>

    <Button style={buttonStyles} variant="contained" onClick={onBuy}>Buy</Button>
    </TextBox>
    </MyPaper>
  )
}

const newIngredient = (name, cost, numAvailable, colour) => ({
  name, cost, numAvailable, colour
});

let intervalId;

const BuyScreen = (props) => {



  // const initialIngredients = ["yellow", "pink pizzazz", "cyan"].map(ingredientName => {
  //   const item = items.find(item => item.name === ingredientName) || {};
  //   return newIngredient(item.name, item.value, 10, item.colour);
  // })
  const [ingredients, setIngredients] = useState([]);
  const [shouldRestock, setShouldRestock] = useState(true);

  if(shouldRestock) {
    tryRestock(ingredients, setIngredients);
    setShouldRestock(false);
  }


  if (intervalId === undefined) {
    intervalId = setInterval(() => {
      setShouldRestock(true);
    }
      , 20000);
  }

  const [buyCount, setBuyCount] = useState(0);

  const onBuy = (ingredient) => () => {
    if (props.canAfford(ingredient.cost) && ingredient.numAvailable > 0) {
      ingredient.numAvailable--;
      const remaingIngredients = ingredients.filter(i => i.numAvailable > 0);
      setIngredients(remaingIngredients);
      setBuyCount(buyCount + 1);
      props.onBuy(ingredient.cost, ingredient.name, ingredient.colour);
    }

  }

  return (

    <div style={{display:"flex"}}>
    {ingredients.map( (ingredient, index) => {
      return(
          <IngredientTile {...ingredient} key={index} onBuy={onBuy(ingredient)} />
      )
    })
    }
      </div>
  )
}


const tryRestock = (ingredients, setIngredients) => {
  const minimumIngredientsForRestock = 5;
  const amountLeft = ingredients.reduce((acc, i) => {

    return acc +i.numAvailable}
    , 0)
  if ( amountLeft <= minimumIngredientsForRestock) {
    restock(ingredients, setIngredients);
  } else {
    // just remove everything instead
      restock([], setIngredients);
  }
}



const restock = (ingredients, setIngredients) => {
  //adds 5 units of 3 random ingredients

  const amountToAdd = 5;
  const ingredientsToAdd = 3;
  const newIngredients = [...ingredients];
  for (let i=0; i<ingredientsToAdd; i++) {
    const newIngredientName = getRandomItemInArray(stockableIngredients);
    const existingIngredient = newIngredients.filter(i => i.name === newIngredientName)[0];
    if (existingIngredient) {
      existingIngredient.numAvailable += amountToAdd;
    } else {
      const item = items.find(item => item.name === newIngredientName) || {};
      const i1 = newIngredient(item.name, item.value, amountToAdd, item.colour);
      newIngredients.push(i1);
    }
  }

  setIngredients([...newIngredients])

}


const stockableIngredients = [
  "cyan", "yellow", "pink pizzazz", "ultramarine", "spring green", "rose", "pistachio", "magenta", "vermillion", "daffodil", "amber",
]


export default BuyScreen;
