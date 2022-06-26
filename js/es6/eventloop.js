console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

console.log('3');

function clickMe() {
    let result = 0;

    for (let i = 0; i < 10000000000; i++) {
        result += i;
    }

    console.log(result);
}
document.getElementsByTagName('button')[0].onclick = clickMe;