const expBySqr = (a, n) => {
    res = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            res *= a;
            n--;
        } else {
            a *= a;
            n /= 2;
        }
    }

    return res;
}

console.log(expBySqr(2, 4));

// Complexity O(log2(N)) => O(log(N))