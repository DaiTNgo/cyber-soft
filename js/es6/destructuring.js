// ====Array====
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

//====Object====
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

// không có default value
// const printInfoHouse = ({ color, width, height }) => {
//     console.log(`
//     Nhà màu ${color} có chiều rộng là ${width}
//     và chiều dài là ${height}
//     `)
// }
// printInfoHouse(house)

// có default value
const printInfoHouse = ({ color = 'Đen', width = '1m', height = '5m' }) => {
    console.log(`
    Nhà màu ${color} có chiều rộng là ${width} 
    và chiều dài là ${height}
    `);
};
printInfoHouse(house);

