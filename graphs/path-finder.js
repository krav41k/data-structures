const adjacenyList = [[1, 2],[0, 3],[0, 6],[1, 4, 5, 6, 8],[3, 6],[3, 6],[2, 3, 4, 5, 7],[6], [3]];

const findPath = (start, end) => {
    const parents = [];
    for (let i = 0; i < adjacenyList.length; i++) {
        parents.push(i);
    }
    const distances = [].fill(Number.POSITIVE_INFINITY);
    distances[start] = 0;

    const visited = { start: true };
    const queue = [start];
    const bfs = (v) => {
        adjacenyList[v].forEach(w => {
            if (visited[w]) {
                return;
            }

            visited[w] = true;
            parents[w] = v;
            distances[w] = distances[v] + 1;

            queue.push(w);
        })
        queue.shift();
        if (queue.length > 0) {
            bfs(queue[0]);
        }
    };
    bfs(start);
    console.log(distances[end]);
    let shortestPath = end;
    let parent = end;
    while (parent !== start) {
        parent = parents[parent];
        shortestPath += ' => ' + parent;
    }
    console.log(shortestPath);
};

findPath(0, 8);
