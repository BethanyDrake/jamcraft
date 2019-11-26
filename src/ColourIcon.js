import React from 'react';
import {colourToHex} from './colourUtil';

import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded';

const IconContainer = ({children}) => {
  return <div style={{"width":'100%', "textAlign": "center"}}>{children}</div>
}

export const ColourIcon = ({colour}) => {
  return(
    <IconContainer><PaletteRoundedIcon fontSize='large' htmlColor={colourToHex(colour)}/></IconContainer>
  );
}
