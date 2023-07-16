const isNPrimaryNum = (n) => {
    let nSqrt = Math.floor(Math.sqrt(n));
    if (nSqrt*nSqrt === n) {
        return false;
    }

    for (let i = 2; i <= nSqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const findAllPrimeNumToN = (n) => {
    const deletedNumsSet = new Set();
    const primaryNumsArr = [];

    for (let i = 2; i <= n; i++) {
        if (deletedNumsSet.has(i)) {
            continue;
        }
        if (isNPrimaryNum(i)) {
            primaryNumsArr.push(i);
            for (let k = i*i; k<=n; k++) {
                if (deletedNumsSet.has(k)) {
                    continue;
                }

                if (k % i === 0) {
                    deletedNumsSet.add(k);
                    continue;
                }
            }
        }
    }
    return primaryNumsArr;
}

console.log(findAllPrimeNumToN(120));

// Complexity O(Nlog(logN))
// log2(1.000.000.000) ~ 30
// log2(30) ~ 5