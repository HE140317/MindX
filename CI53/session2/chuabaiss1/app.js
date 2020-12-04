function checkPrime(num) {
    if (num < 2) return false;
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    return count == 2;
}

function filterPrimes(arr) {
    for (let num of arr) {
        if (checkPrime(num)) {
            console.log(num);
        }
    }
}

let str = prompt("input an array");
let array = str.split(',');

/*
for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
    filterPrimes(array);
}
*/
let numbers = array.map(function(num) {
    return Number(num);
});
console.log(numbers);

filterPrimes(numbers);
/*
thêm vào cuối: .push()
xóa cuối : .pop()
thêm đầu: .unshift()
xóa đầu: .shift()
thêm giữa, xóa gữa : . splice()
*/