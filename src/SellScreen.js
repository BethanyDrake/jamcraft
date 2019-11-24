import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import {examineRandomItem} from './Customer';


import { styled } from '@material-ui/core/styles';
const MyPaper = styled(Paper)({
  width: 120,
  margin: "20px"
});

const TextBox = ({children}) => {
  return <div style={{"padding":'10px'}}>{children}</div>
}


const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

const PriceFeild = ({initialValue, updateValue}) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    updateValue(value);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 300) {
      setValue(300);
    }
  };

  return (
    <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 300,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
  )

}



const SellTile = ({price, itemName, amountOwned, updatePrice}) => {
  const onPriceChange = (newPrice) => {
    updatePrice(newPrice);
  }
  return (
    <MyPaper>
    <TextBox>
    <h2> {itemName} </h2>
    price: $<PriceFeild initialValue={price} updateValue={onPriceChange}/>
    <p> available: {amountOwned}</p>

    </TextBox>
    </MyPaper>
  )
}

const setUpInventory = (inventory) => {
  inventory.forEach(item => {
    if (item.price === undefined) item.price = item.cost;
    if (item.value === undefined) item.value = item.cost;
  })
}


let intervalId;

const SellScreen = ({ inventory, money, setMoney, setInventory} ) => {

  setUpInventory(inventory);

  const customerBought = (boughtItem) => {
    //inventory.find(item => (item.name == boughtItem && item.amountOwned > 0 );
    if(boughtItem.amountOwned > 0) {
      boughtItem.amountOwned--;
      setMoney(money + boughtItem.price);
      if (boughtItem.amountOwned === 0) {
        const resultingInventory = inventory.filter(item => item.amountOwned !== 0);
        setInventory(resultingInventory);

      }
    }
  }

  if (intervalId !== undefined) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(examineRandomItem(inventory, customerBought), 2000);



  const updatePrice = (item) => (newPrice) => {
    item.price = newPrice;
  }


  return (
    inventory.map((item, index) => {
      return (<SellTile {...item} key={"SellTile"+index+JSON.stringify(item)} updatePrice={updatePrice(item)}/>);
    })
  )
}


export default SellScreen;
