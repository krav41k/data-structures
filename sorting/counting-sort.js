const randorArr = [0,3,1,1,0,0,3];

const countingSortFn = (arr) => {
    const numArr = [];
    arr.forEach(num => numArr[num] = numArr[num] === undefined ? 1 : numArr[num] + 1);

    const startings = [0, numArr[0]];
    for (let i = 1; i < numArr.length; i++) {
        startings.push((numArr[i] || 0) + startings[i]);
    }
    const sortedArr = [];
    arr.forEach(num => {
        sortedArr[startings[num]] = num;
        startings[num] = startings[num] + 1;
    });
    return sortedArr;
};

console.log(randorArr);
console.log(countingSortFn(randorArr));

// Complexity: O(N + K)
// Extra memory: O(N + K)