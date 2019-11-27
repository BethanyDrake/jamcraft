import React, {useState} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {ColourIcon} from './ColourIcon';

import { styled } from '@material-ui/core/styles';
const MyPaper = styled(Paper)({
  width: 120,
  margin: "20px"
});

const TextBox = ({children}) => {
  return <div style={{"padding":'10px'}}>{children}</div>
}


const MakeTile = ({itemName, amountOwned, colour, toggleSelectedItem, isSelected, canSelect}) => {

  const toggleSelected = () => {
    toggleSelectedItem(itemName);
  }


  return (
    <MyPaper>
    <ColourIcon colour={colour}/>
    <TextBox>
    <h3> {itemName} </h3>
    <p> available: {amountOwned}</p>
    </TextBox>
    <Button variant="contained" disabled={!isSelected && !canSelect} onClick={toggleSelected} > {isSelected ? 'Nah' : 'Use' }</Button>
    </MyPaper>
  )
}


const MakeScreen = ({ingredients, setIngredients}) => {
  const [item1, setItem1] = useState(undefined);
  const [item2, setItem2] = useState(undefined);
  const toggleSelectedItem = (itemName) => {
    if (item1 === itemName) {
      setItem1(undefined);
      return;
    }
    if (item2 === itemName) {
      setItem2(undefined);
      return;
    }

    if (!item1) setItem1(itemName);
    else if (!item2) setItem2(itemName);
  }

  const make = () => {
    const ingredient1 = ingredients.filter(ingredient => ingredient.itemName === item1)[0];
    const ingredient2 = ingredients.filter(ingredient => ingredient.itemName === item2)[0];
    const colour1 = ingredient1.colour;
    const colour2 = ingredient2.colour;
    const mix = (c1, c2) => {
      return Math.floor((c1 + c2) / 4) * 2;
    }

    const newColour = ([0,0,0]).map((_,i) => mix(colour1[i], colour2[i]));
    console.log(newColour);

  }


  return (
    <>
    <div>
    {
      (item1 && item2)
      ? (<Button variant="contained" onClick={make} > make</Button>)
      : (<Button variant="contained" disabled > can't make </Button>)
    }
    </div>
    <div style={{display:"flex"}}>

    {ingredients
      .map((ingredient, i) => <MakeTile
        key={i}
        itemName={ingredient.itemName}
        amountOwned={ingredient.amountOwned}
        colour={ingredient.colour}
        toggleSelectedItem={toggleSelectedItem}
        isSelected={ingredient.itemName === item1 || ingredient.itemName === item2}
        canSelect={!item1 || !item2}
      />)
      }
    </div>
    </>
  )
}


export default MakeScreen;
