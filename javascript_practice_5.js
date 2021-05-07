// let isPrime = function(num) {
    
//     for(let i = 2; i <= num; i++){
//         // console.log();
//         // console.log(num, i, num%i);
//         if(!(i == num) && (num%i === 0)){
//             return false;
//         }
        
//     }
//     return true;
// }

// or 

 let isPrime = function (num) {
    if (num < 2) {return true;}
    for (let i = 2; i < num; i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));