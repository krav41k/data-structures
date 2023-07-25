const adjacenyList = [[1, 2],[0, 3],[0, 6],[1, 4, 5, 6, 8],[3, 6],[3, 6],[2, 3, 4, 5, 7],[6], [3]];

const dfs = (v) => {
    const stack = [v];
    const traversalSequence = [v];
    while (stack.length > 0) {
        const nextV = adjacenyList[stack[stack.length - 1]].find(vv => !traversalSequence.includes(vv));
        if (nextV) {
            stack.push(nextV);
            traversalSequence.push(nextV);
        } else {
            stack.pop();
        }
    }
    return traversalSequence;
};

const visited = {};
const reсursiveDfs = (v) => {
    visited[v] = true;
    console.log(v);

    adjacenyList[v].forEach(w => {
        if (visited[w]) {
            return;
        }

        reсursiveDfs(w);
    });
}

console.log(dfs(0));
// reсursiveDfs(0);