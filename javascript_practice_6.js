let isPrime = function (num) {
    if (num < 2) {return true;}
    for (let i = 2; i < num; i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

let sumOfNPrimes = function (num) {
    let sum = 0;
    let counterPrime = 0;
    let i = 2;

    while (counterPrime < num) {
        if(isPrime(i) ){
            counterPrime ++;
            sum += i;
        }
        i++;
    }
    return sum;
}

console.log(sumOfNPrimes(4));
console.log(sumOfNPrimes(1));