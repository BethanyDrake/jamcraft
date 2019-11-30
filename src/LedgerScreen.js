import React, { useState } from 'react';

import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {InlineColourIcon} from './ColourIcon';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});




function SimpleTable({rows}) {
  const classes = useStyles();
  const numColours = rows.length;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Colours Sold ({numColours}/125)</TableCell>
            <TableCell align="center">Sold</TableCell>
            <TableCell align="center">Average Price</TableCell>
            <TableCell align="center">Best Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <InlineColourIcon colourName={row.name} />
                {row.name}
              </TableCell>
              <TableCell align="center">{row.sold}</TableCell>
              <TableCell align="center">${row.averagePrice}</TableCell>
              <TableCell align="center">${row.bestPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}



const getUniqueItemNames = (saleHistory) => {
  const itemNames = saleHistory.map(i => i.itemName);
  const uniqueItems = [];
  let prev;
  itemNames.sort().forEach(name => {
    if (name !== prev) {
      uniqueItems.push(name);
      prev = name;
    }
  })

  return uniqueItems;
}

const getSaleCount = (saleHistory, itemName) => {
  return saleHistory.filter(lineItem => lineItem.itemName === itemName).length;
}


const getAveragePrice = (saleHistory, itemName) => {

  const priceList = saleHistory.filter(lineItem => lineItem.itemName === itemName).map(lineItem => lineItem.salePrice);
  console.log(priceList);
  const totalPrice = priceList.reduce(
    (acc, curr) => acc + curr,
    0
  );

  return totalPrice / priceList.length;
}

const getBestPrice = (saleHistory, itemName) => {

  const priceList = saleHistory.filter(lineItem => lineItem.itemName === itemName).map(lineItem => lineItem.salePrice);
  console.log(priceList);
  const bestPrice = priceList.reduce(
    (acc, curr) => curr > acc ? curr : acc,
    0
  );

  return bestPrice;
}



const LedgerScreen = ({saleHistory}) => {
  console.log("LedgerScreen", saleHistory);

  const uniqueItems = getUniqueItemNames(saleHistory);

  const createData = (name, sold, averagePrice, bestPrice) => {
    return { name, sold, averagePrice, bestPrice };
  }
  const rows = uniqueItems.map(itemName => {
    const numSold = getSaleCount(saleHistory, itemName);
    const averagePrice = getAveragePrice(saleHistory, itemName);
    const bestPrice = getBestPrice(saleHistory, itemName);
    return createData(itemName, numSold, averagePrice, bestPrice)
  });

  return (<SimpleTable rows={rows}/>);
}

export default LedgerScreen;
