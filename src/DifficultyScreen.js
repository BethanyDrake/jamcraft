import React from 'react';

import Button from '@material-ui/core/Button';

import {buttonStyles} from './util'
import {ColourIcon} from './ColourIcon';

import Paper from '@material-ui/core/Paper';

import { styled } from '@material-ui/core/styles';
const MyPaper = styled(Paper)({
  width: 120,
  margin: "20px"
});

const TextBox = ({children}) => {
  return <div style={{"padding":'10px'}}>{children}</div>
}

const DifficultyTile = ({difficultyName, difficultyValue, colourName, setDifficulty}) => {
  const setToThisDifficulty = () => setDifficulty(difficultyValue);
  return (
    <MyPaper>
    <TextBox>
    <ColourIcon colourName={colourName}/>

    <Button style={buttonStyles} variant="contained" onClick={setToThisDifficulty}>{difficultyName}</Button>
    </TextBox>
    </MyPaper>
  )
}

const DifficultyScreen = ({setDifficulty}) => {
  return (
    <div>
    <h1 style={{ textAlign: "center", paddingTop: "100px"}}>Choose your difficulty:</h1>:
    <div style={{display:"flex", justifyContent: "center"}}>
      <DifficultyTile difficultyName={"zen"} difficultyValue={4} colourName={"lilac"} setDifficulty={setDifficulty}/>
    <DifficultyTile difficultyName={"easy"} difficultyValue={1} colourName={"waterspout"} setDifficulty={setDifficulty}/>
    <DifficultyTile difficultyName={"medium"} difficultyValue={2} colourName={"guppie green"} setDifficulty={setDifficulty}/>
    <DifficultyTile difficultyName={"hard"} difficultyValue={3} colourName={"carmine"} setDifficulty={setDifficulty}/>
    <DifficultyTile difficultyName={"ultra"} difficultyValue={5} colourName={"black"} setDifficulty={setDifficulty}/>
    </div>
    </div>
  )
}

export default DifficultyScreen;
