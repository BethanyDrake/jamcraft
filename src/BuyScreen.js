import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import { styled } from '@material-ui/core/styles';
const MyPaper = styled(Paper)({
  width: 120,
  margin: "20px"
});

const TextBox = ({children}) => {
  return <div style={{"padding":'10px'}}>{children}</div>
}


const IngredientTile = (props) => {
  return (
    <MyPaper>
    <TextBox>
    <h2> {props.name} </h2>
    <p> cost: ${props.cost}</p>

    <p> available: {props.numAvailable}</p>

    <Button variant="contained" onClick={props.onBuy}>Buy</Button>
    </TextBox>
    </MyPaper>
  )
}


const BuyScreen = (props) => {



  const newIngredient = (name, cost, numAvailable) => ({
    name, cost, numAvailable,
  })


  const initialIngredients = [
      newIngredient("salt", 4, 10),
      newIngredient("water", 1, 100),
      newIngredient("sugar", 10, 10),
      newIngredient("gold leaf", 300, 10),
  ]
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [buyCount, setBuyCount] = useState(0);

  const onBuy = (ingredient) => () => {
    if (props.canAfford(ingredient.cost) && ingredient.numAvailable > 0) {
      ingredient.numAvailable--;
      setIngredients(ingredients);
      setBuyCount(buyCount + 1);
      props.onBuy(ingredient.cost, ingredient.name);
    }

  }

  return (

    <div style={{"display":"flex"}}>
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
