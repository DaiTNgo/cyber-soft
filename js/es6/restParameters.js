const caculateAvg = (...nums) => {
    let total = 0;
    let length = nums.length;

    for (let num of nums) {
        total += num;
    }

    return total / length;
};

console.log(caculateAvg(1, 2, 3));
console.log(caculateAvg(1, 3, 5, 7, 9, 11, 13));

