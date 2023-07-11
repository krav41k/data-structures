const randorArr = [6,2,9,8,7,1,3,5,11,4];

const swap = (arr, idx1, idx2) => {
    const next = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = next;
}

const quickSortFn = (arr) => {
    const lomutoSplit = (a, low, high) => {
        if (low >= high) {
            return -1;
        }
        let i, j;
        i = j = low;
        while (j < high) {
            if (a[high] > a[j]) {
                swap(a, i, j);
                i++;
            }
            j++;
        }

        i += a[i] < a[high] ? 1 : 0;
        a.splice(i, 0, a[high]);
        a.splice(high + 1, 1);
        lomutoSplit(a, low, i - 1);
        lomutoSplit(a, i + 1, high);
    }

    const randomLomutoSplit = (a, low, high) => {
        if (low >= high) {
            return -1;
        }
        const randomNum = Math.floor(Math.random() * (high + 1 - low) + low);
        swap(a, high, randomNum);
        let i, j;
        i = j = low;
        while (j < high) {
            if (a[high] > a[j]) {
                swap(a, i, j);
                i++;
            }
            j++;
        }

        i += a[i] < a[high] ? 1 : 0;
        a.splice(i, 0, a[high]);
        a.splice(high + 1, 1);
        randomLomutoSplit(a, low, i - 1);
        randomLomutoSplit(a, i + 1, high);
    }

    const start = 0;
    const end = arr.length - 1;
    const mid = randomLomutoSplit(arr, start, end);
};

console.log(randorArr);
quickSortFn(randorArr);
console.log(randorArr);

// Complexity: O(N log(N))
// Extra memory: O(N log(N))