import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import {examineRandomItem} from './Customer';

import {ColourIcon} from './ColourIcon';

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



const NotYetForSaleTile = ({price, itemName, amountOwned, itemPrices, setItemPrices, setItemForSale, colour}) => {

  const setForSale = () => {
    setItemForSale(itemName);
  }


  return (
    <MyPaper>
    <SaleTileInformation itemName={itemName} itemPrices={itemPrices} setItemPrices={setItemPrices} colour={colour} amountOwned={amountOwned}/>
    <Button variant="contained" onClick={setForSale}> Sell </Button>
    </MyPaper>
  )
}

const SaleTileInformation = ({colour, amountOwned, itemName, itemPrices, setItemPrices}) => {
  return (
    <TextBox>
    <ColourIcon colour={colour}/>
    <h3> {itemName} </h3>
    price: $<PriceFeild itemName={itemName} itemPrices={itemPrices} setItemPrices={setItemPrices}/>
    <p> available: {amountOwned}</p>
    </TextBox>
  )
}

const ForSaleTile = ({price, itemName, amountOwned, itemPrices, setItemPrices, removeItemFromSale, colour}) => {

  const removeFromSale = () => {
    removeItemFromSale(itemName);
  }
  return (
    <MyPaper>
    <SaleTileInformation itemName={itemName} itemPrices={itemPrices} setItemPrices={setItemPrices} colour={colour} amountOwned={amountOwned}/>
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

const customerBought = (boughtItem, inventory, setInventory, setMoney, updateSaleHistory, money, itemPrices) => {
  const price = itemPrices[boughtItem.itemName];
  //inventory.find(item => (item.name == boughtItem && item.amountOwned > 0 );
  if(boughtItem.amountOwned > 0) {
    boughtItem.amountOwned--;
    setMoney(money + price);
    updateSaleHistory(boughtItem.itemName, price);
    if (boughtItem.amountOwned === 0) {
      const resultingInventory = inventory.filter(item => item.amountOwned !== 0);
      setInventory(resultingInventory);

    }
  }
}

const SellScreen = ({ inventory, money, setMoney, setInventory, itemPrices, setItemPrices, updateSaleHistory} ) => {

  setUpInventory(inventory);

  const [shouldExamineItem, setShouldExamineItem] = useState(false);
  if (shouldExamineItem) {

    const onBuy = (item) => customerBought(item, inventory, setInventory, setMoney, updateSaleHistory, money, itemPrices);
    examineRandomItem(inventory, onBuy);
    setShouldExamineItem(false);
  }

  if (intervalId === undefined) {
    intervalId = setInterval(() => {
      setShouldExamineItem(true);
    }, 2000);
  }



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
