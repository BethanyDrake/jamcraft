import React, {useState} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {ColourIcon} from './ColourIcon';
import {items} from './items';
import {colourToHex, mix} from './colourUtil';

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

  const getRemainingIngredients = (name1, name2) => {

    const remainingIngredients = ingredients.map(i => ({
      amountOwned: (i.itemName === item1 || i.itemName === item2) ? i.amountOwned-- : i.amountOwned,
      ...i,
    })).filter(i => {
      return i.amountOwned > 0
    });


    return remainingIngredients;
  };

  const make = () => {
    const ingredient1 = ingredients.filter(ingredient => ingredient.itemName === item1)[0];
    const ingredient2 = ingredients.filter(ingredient => ingredient.itemName === item2)[0];


    const colour1 = ingredient1.colour;
    const colour2 = ingredient2.colour;
    // const mix = (c1, c2) => {
    //   return Math.ceil((c1 + c2) / 8) * 4;
    // }

    const newColour = ([0,0,0]).map((_,i) => mix(colour1[i], colour2[i]));

    const remaingIngredients = getRemainingIngredients(item1, item2);

    setItem1(undefined);
    setItem2(undefined);

    const newColourName = items.filter(i => colourToHex(i.colour) === colourToHex(newColour))[0].name;


    const existingIngredient = remaingIngredients.filter(i => i.itemName === newColourName)[0];
    if (existingIngredient) {
      existingIngredient.amountOwned+=2;
      setIngredients([...remaingIngredients]);
    }
    else {
      const newIngredient = {
        itemName: newColourName,
        cost: Math.floor((ingredient1.cost + ingredient2.cost) / 2),
        colour: newColour,
        amountOwned: 2,
      }

      setIngredients([
        ...remaingIngredients,
        newIngredient,
      ])

    }
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
    <div style={{display:"flex", width:"100%", flexWrap:"wrap"}}>

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
