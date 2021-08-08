
const factorialRecursion = (value) => {
    if(value ==0) {
        return 1;
    }

    return value * factorialRecursion(value-1);
}

const factorialNonRecursion = (value) => {
    let fac =1;
    for (let index = value; index > 1; index--) {
        fac *= index;
    }

    return fac;
}

console.log('Recursion', factorialRecursion(5));
console.log('Non Recursion', factorialNonRecursion(5));

