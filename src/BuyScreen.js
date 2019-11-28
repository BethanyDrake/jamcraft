import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {items} from './items';

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

    <Button variant="contained" onClick={onBuy}>Buy</Button>
    </TextBox>
    </MyPaper>
  )
}




const BuyScreen = (props) => {
  const newIngredient = (name, cost, numAvailable, colour) => ({
    name, cost, numAvailable, colour
  })


  const initialIngredients = ["red", "blue", "harlequin"].map(ingredientName => {
    const item = items.find(item => item.name === ingredientName) || {};
    return newIngredient(item.name, item.value, 3, item.colour);
  })
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [buyCount, setBuyCount] = useState(0);

  const onBuy = (ingredient) => () => {
    if (props.canAfford(ingredient.cost) && ingredient.numAvailable > 0) {
      ingredient.numAvailable--;
      setIngredients(ingredients);
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


export default BuyScreen;
