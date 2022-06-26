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

const house = {
    color: 'White',
    area: '100m2'
}
for (let prop in house) {
    console.log("property of object: ", prop);// color, area
    console.log("value of object: ", house[prop]); // white, 100m2
}