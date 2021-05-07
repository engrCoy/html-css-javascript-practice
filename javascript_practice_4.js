let fizzBuzz = function(array) {
    let newArra = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 3 === 0 || array[i] % 5 === 0) {
            newArra.push(array[i]);
        }
    }
    return newArra;
}


console.log(fizzBuzz([15,20,21,2,6,4]));