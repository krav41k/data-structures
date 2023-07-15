const findAllDivOfN = (n) => {
    let left = [];
    let right = [];
    const nSqrt = Math.floor(Math.sqrt(n));

    for (let i = 0; i <= nSqrt; i++) {
        if (n % i === 0) {
            left.push(i);
            right.push(n/i);
        }
    }
    if (nSqrt*nSqrt === n) {
        left.pop();
    }
    right.reverse();
    return [...left, ...right];
}

console.log(findAllDivOfN(81));