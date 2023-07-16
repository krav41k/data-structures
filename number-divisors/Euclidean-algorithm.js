const basicGCD = (a, b) => {
    if (b > a) {
        const c = a;
        a = b;
        b = c;
    }

    if (b <= 0) {
        return a;
    }

    return basicGCD(a - b, b);
}

const improvedGCD = (a, b) => {
    if (b > a) {
        const c = a;
        a = b;
        b = c;
    }

    while (b !== 0) {
        const c = b;
        b = a % b;
        a = c;
    }
    return a;
}

console.log(basicGCD(24, 8));
console.log(basicGCD(12, 8));

// Complexity O(log(min(a,b)))

// GCD * LCM = a * b => LCM = a * b / GCD
const LCM = (a, b) => {
    return a * b / improvedGCD(a, b);
}

console.log(LCM(9, 12));