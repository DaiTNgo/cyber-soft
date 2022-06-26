const users = ['Dai', 'Duc', 'Nguyen'];
const copyUsers = [...users]; // spread;
// console.log('Spread: ', ...users);
// console.log('Typeof', typeof 5);

// [...users] => ['Dai', 'Duc', 'Nguyen']
const users_2 = [...users, 'cho', 'meo'];

const hondaCar = {
  model: 'Honda',
  weight: '200Kg',
  price: '800 milions',
};
// console.log('Spread object: ', { ...hondaCar });
const redCar = {
  // price: '900 milions',
  ...hondaCar,
  color: 'Red',
  price: '900 milions',
};
console.log('Red Car: ', redCar);
/*
{
    ...hondaCar => 
   model: 'Honda',
   weight:'200Kg',
   price: '800 milion',
   color: 'Red',
   price:'900 milions'
}
*/

const arr = document.getQuerySelectorAll('#button'); // node lists, tuong tu arr, khong co nhung thuoc tinh hay phuong thuc giong arr
const arrCopy = [...arr]; // arr thiet su.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arrCopy.map();
arrCopy.forEach();
