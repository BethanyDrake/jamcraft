import React, { useState } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


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
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
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

const SellTile = ({cost, itemName, amountOwned}) => {

  const [price, setPrice] = useState(cost);
  return (
    <MyPaper>
    <TextBox>
    <h2> {itemName} </h2>
    price: $<PriceFeild initialValue={price} updateValue={setPrice}/>




    <p> available: {amountOwned}</p>

    </TextBox>
    </MyPaper>
  )
}

const SellScreen = ({inventory}) => {
  return (
    inventory.map((item, index) => {
      return (<SellTile {...item} key={"SellTile"+index}/>);
    })
  )
}


export default SellScreen;
