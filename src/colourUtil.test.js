import {mix} from './colourUtil';

it('breaks', () => {
  // const red = [8, 0, 0];
  // const blue = [0, 0, 8];
  // const eggplant = [4, 0, 4];

  expect(mix(8,0)).toEqual(4);
  expect(mix(4,0)).toEqual(2);
  expect(mix(6,2)).toEqual(4);
  expect(mix(6,0)%2).toEqual(0);
})
