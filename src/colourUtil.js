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
