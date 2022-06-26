# 1. Variable.

## _let, const_

```javascript
let firstNum = 6;
firstNum = 7;

const HOURS_IN_DAY = 24;
// HOURS_IN_DAY = 21; --throw an error--
```

# 2. Arrow function.

```javascript
const multipleTen = (num) => {
  return num * 10;
};
```

```javascript
const multipleTen = (num) => num * 10;
```

```javascript
const multipleTen = num => num * 10;
```

# 3. Default Parameter.
```javascript
const multipleTen = (num = 1) => num * 10;
```

# 4. Template String.
```javascript
const nameAnimal = 'Lion';
const xinChao = `
    Hello World,
    My name is ${nameAnimal}. 
`;
```

# 5. Rest Parameters.
```javascript
const caculateAvg = (...nums) => {
  let total = 0;
  let length = nums.length;

  for (let num of nums) {
    total += num;
  }

  return total / length;
};
console.log(caculateAvg(1, 2, 3)); // 2
console.log(caculateAvg(1, 3, 5, 7, 9, 11, 13)); //7
```

```javascript
const add = (userName, ...rest) => {

    // rest=['soccer','badminton']
    let content = `Những môn thể thao mà ${userName} thích là: `
    for (let sport of rest) {
        content += sport + ', '
    }
    console.log('>>> Content :', content);
}
add('dai', 'soccer', 'badminton')
```

# 6. Spread.

    1. Array
```javascript
const users = ['Dai', 'Duc', 'Nguyen'];
const copyUsers = [...users];
// ...users => 'Dai', 'Duc', 'Nguyen'
// [...users] => ['Dai', 'Duc', 'Nguyen'] 
const users_2 = [...users, 'cho', 'meo'];

```

    2. Object
```javascript
const hondaCar = {
  model: 'Honda',
  weight: '200Kg',
  price: '800 milion',
};
```

**Thêm thuộc tính color** *nếu trong hondaCar chưa có*
```javascript
const redCar = {
  ...hondaCar,
  color: 'Red',
};
```

**Cập nhật price** *của redCar (- Ghi đè -)*
```javascript
const updatePriceRedCar ={
    ...redCar,
    price:'900 milions'
}
console.log(redCar);
/**
Kết quả console.log(redCar);
    {
        model: 'Honda',
        weight:'200Kg',
        color: 'Red',
        price:'900 milions'
     } 
*/

/*
    Giải thích code:
    {
        ...hondaCar =>  
        model: 'Honda',
        weight:'200Kg',
        price: '800 milions',
        color: 'Red',
        price:'900 milions'
    }
*/
```

# 7. Destructuring.

    1. Array
```javascript
let a = 10;
let b = 20;
// ====swap====
[a, b] = [b, a];

const findIndexAndMax = (arr) => {
  let max = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return [index, max];
};
const numbers = [1, 2, 4, 7, 6, 9];
let [position, value] = findIndexAndMax(numbers);
console.log(position); // 5
console.log(value); // 9
```
<!-- ![](./img/10.png) -->
<!-- ![](./img/11.png) -->

    2. Object
```javascript
const house = {
    color: 'Gray',
    width: '5m',
    height: '20m',
};
let { color, width, height } = house;
/**
 * Tương ứng với
 * color => house.color
 * width => house.width
 * height => house.height
 */
console.log(color); // 'Gray'
console.log(width); // '5m'
console.log(height); // '20m'
```
```javascript
const house = {
    color: 'Gray',
    width: '5m',
    height: '20m',
};
// không có default value
const printInfoHouse = ({ color, width, height }) => {
    console.log(`
    Nhà màu ${color} có chiều rộng là ${width}
    và chiều dài là ${height}
    `)
}
printInfoHouse(house);
```

```javascript
const printInfoHouse = ({ color = 'Đen', width = '1m', height = '5m' }) => {
    console.log(`
    Nhà màu ${color} có chiều rộng là ${width} 
    và chiều dài là ${height}
    `);
};
printInfoHouse(house);
```
<!-- ![](./img/12.png) -->
<!-- ![](./img/13.png) -->
<!-- ![](./img/14.png) -->
# 8. Object Literal
```javascript
const a = 2
const b = 5

const obj = { a, b }
/*
const obj = {
    a: a,
    b: b,
}
*/

console.log(obj) // { a: 2, b: 5 }
```

# 9. For In & For Of
*1. Arr*
```javascript
const arr = [[1, 2, 3], ['Dai', "Duc", "Nguyen"]]
for (let index in arr) {
    console.log(index);// 0,1
}
// Dành cho mảng
for (let value of arr) {
    console.log(value);
    // [1,2,3]
    //['Dai', "Duc", "Nguyen"]
}
```
*2. Object*
```javascript
const house = {
    color: 'White',
    area: '100m2'
}
for (let prop in house) {
    console.log(prop);// color, area
    console.log(house[prop]);// white, 100m2
}
```
# 10. Computed Property Name
```javascript
const firstUserName = 'dai'
const secondUserName = 'duc'

const firstMentor = {
    [firstUserName]: 'Mentor',
    class: 'BCDN-03'
}

const secondMentor = {
    [secondUserName]: 'Mentor',
    class: 'BCDN-03'
}
```