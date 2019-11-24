import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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



const PriceFeild = ({itemPrices, setItemPrices, itemName}) => {
  const classes = useStyles();
  const [value, setValue] = useState(itemPrices[itemName]);

  const handleInputChange = event => {
    const newValue = event.target.value === '' ? 0 : Number(event.target.value)
    setValue(newValue);


    const newItemPrices = {
      ...itemPrices,
      [itemName]: newValue,
    }
    setItemPrices(newItemPrices)
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



const NotYetForSaleTile = ({price, itemName, amountOwned, itemPrices, setItemPrices, setItemForSale}) => {

  const setForSale = () => {
    setItemForSale(itemName);
  }


  return (
    <MyPaper>
    <TextBox>
    <h2> {itemName} </h2>
    price: $<PriceFeild itemName={itemName} itemPrices={itemPrices} setItemPrices={setItemPrices}/>
    <p> available: {amountOwned}</p>

    </TextBox>
    <Button variant="contained" onClick={setForSale}> Sell </Button>
    </MyPaper>
  )
}

const ForSaleTile = ({price, itemName, amountOwned, itemPrices, setItemPrices, removeItemFromSale}) => {

  const removeFromSale = () => {
    removeItemFromSale(itemName);
  }
  return (
    <MyPaper>
    <TextBox>
    <h2> {itemName} </h2>
    price: $<PriceFeild itemName={itemName} itemPrices={itemPrices} setItemPrices={setItemPrices}/>
    <p> available: {amountOwned}</p>

    </TextBox>
    <Button variant="contained" onClick={removeFromSale}> Remove from sale </Button>
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

const SellScreen = ({ inventory, money, setMoney, setInventory, itemPrices, setItemPrices} ) => {

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

  const setItemForSaleStatus = (newStatus) => (itemName) => {
    const item = inventory.find(item => item.itemName === itemName);
    item.isForSale = newStatus;
    setInventory([...inventory]);
  }

  return (
<div style={{display:"flex", justifyContent: "space-around"}}>
<div>
<h1>Inventory</h1>
    {
      inventory.filter(item => !item.isForSale).map((item, index) => {
      return (<NotYetForSaleTile {...item} key={"SellTile"+index+JSON.stringify(item)} itemPrices={itemPrices} setItemPrices={setItemPrices} setItemForSale={setItemForSaleStatus(true)} />);
    })
  }
  </div>
  <div>

<h1>For Sale</h1>
{
    inventory.filter(item => item.isForSale).map((item, index) => {
      return (<ForSaleTile {...item} key={"SellTile"+index+JSON.stringify(item)} itemPrices={itemPrices} setItemPrices={setItemPrices} removeItemFromSale={setItemForSaleStatus(false)} />);
    })
  }
  </div>

    </div>
  );
}


export default SellScreen;
