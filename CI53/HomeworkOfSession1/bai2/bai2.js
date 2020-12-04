let n = Number(prompt("input number of elem in array: "));
let arr = [];
let primeArr = [];

function isPrime(n) {
    if (n < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

for (let j = 0; j < n; j++) {
    arr[j] = Number(prompt());
    arr.push(arr[j]);
    if (isPrime(arr[j]) == true) {
        primeArr.push(arr[j]);
    }
}

console.log(arr);
console.log(primeArr);