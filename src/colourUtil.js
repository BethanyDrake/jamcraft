export const colourToHex = (arrayOfThreeInts) => {
  let hexString = '#';
  arrayOfThreeInts.forEach(i => {
    const basicString = i.toString(16).toUpperCase();
    hexString = hexString + basicString + 0;
  })
  return hexString;
}
