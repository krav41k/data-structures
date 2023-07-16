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

const factorize = (n) => {
    if (isNPrimaryNum(n)) {
        return [n];
    }

    const primaryNums = findAllPrimeNumToN(Math.floor(Math.sqrt(n)));
    const answer = [];
    let i = 0;
    while (n > 1) {
        while (n % primaryNums[i] === 0) {
            n /= primaryNums[i];
            answer.push(primaryNums[i]);
        }
        i++;
    }
    return answer;
}


console.log(factorize(17));
console.log(factorize(2400));

// Complexity O(sqrt(N) * log(log(sqrt(N))))
