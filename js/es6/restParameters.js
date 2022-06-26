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

const add = (userName, ...rest) => {// const add = (...rest,userName) => { => --- ERROR ---
    // rest=['soccer','badminton']

    let content = `Những môn thể thao mà ${userName} thích là: `
    for (let sport of rest) {
        content += sport + ', '
    }
    console.log('>>> Content :', content);
}
add('dai', 'soccer', 'badminton')