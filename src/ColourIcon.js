import React from 'react';
import {colourToHex} from './colourUtil';
import {items} from './items'

import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded';

const IconContainer = ({children}) => {
  return <div style={{"width":'100%', "textAlign": "center"}}>{children}</div>
}


export const InlineColourIcon = ({colourName}) => {
  const colourArr = items.filter(item => item.name === colourName)[0].colour;
  return (<PaletteRoundedIcon fontSize='small' htmlColor={colourToHex(colourArr)}/>)

}

export const ColourIcon = ({colour, colourName}) => {
  let colourArr = colour;
  if (!colour) {
    colourArr = items.filter(item => item.name === colourName)[0].colour;
  }
  return(
    <IconContainer><PaletteRoundedIcon fontSize='large' htmlColor={colourToHex(colourArr)}/></IconContainer>
  );
}
