const randorArr = [6,2,9,5,7];

const bubbleSortFn = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                const next = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = next;
            }
        }
    }
};

console.log(randorArr);
bubbleSortFn(randorArr);
console.log(randorArr);