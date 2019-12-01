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
    <h1 style={{ textAlign: "center"}}>Choose your difficulty:</h1>:
    <div style={{display:"flex", justifyContent: "center"}}>
    <DifficultyTile difficultyName={"easy"} difficultyValue={1} colourName={"waterspout"} setDifficulty={setDifficulty}/>
    <DifficultyTile difficultyName={"medium"} difficultyValue={1} colourName={"guppie green"} setDifficulty={setDifficulty}/>
    <DifficultyTile difficultyName={"hard"} difficultyValue={1} colourName={"carmine"} setDifficulty={setDifficulty}/>
    </div>
    </div>
  )
}

export default DifficultyScreen;
