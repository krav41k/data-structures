const randorArr = [6,2,9,5,7];

const mergeSortFn = (arr) => {
    const splitFn = (a) => {
        if (a.length === 1) {
            return a;
        }

        const midPointer = Math.floor(a.length / 2);
        return mergeFn(splitFn(a.slice(0, midPointer)), splitFn(a.slice(midPointer)));
    }

    const mergeFn = (a, b) => {
        const mergedArr = [];
        let i = 0;
        while(a[i] !== undefined || b[i] !== undefined) {
            if (a[i] === undefined || b[i] === undefined) {
                const lastV = a[i] || b[i];
                if (lastV < mergedArr[mergedArr.length - 1]) {
                    mergedArr.splice(mergedArr.length - 1, 0, lastV);
                } else {
                    mergedArr.push(lastV);
                }
                return mergedArr;
            }

            if (a[i] > b[i]) {
                mergedArr.push(b[i], a[i]);
            } else {
                mergedArr.push(a[i], b[i]);
            }
            i++;
        }
        return mergedArr;
    }

    return splitFn(arr);
};

console.log(randorArr);
console.log(mergeSortFn(randorArr));