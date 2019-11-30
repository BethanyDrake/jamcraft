export const colourToHex = (arrayOfThreeInts) => {
  let hexString = '#';
  arrayOfThreeInts.forEach(i => {
    if (i === 8) {
      hexString = hexString + 'FF';
    } else {
      const basicString = (i*2).toString(16).toUpperCase();
      hexString = hexString + basicString + 0;
    }
  })
  return hexString;
}

export const mix = (c1, c2) => {
  const average = (c1 + c2) /2;
  const rounded = Math.floor(average / 2 ) * 2;

  return rounded;

}
