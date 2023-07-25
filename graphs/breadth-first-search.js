const adjacenyList = [[1, 2],[0, 3],[0, 6],[1, 4, 5, 6, 8],[3, 6],[3, 6],[2, 3, 4, 5, 7],[6], [3]];

const visited = { 0: true };
const queue = [0];
const traversalSequence = [0];
const bfs = (v) => {
    adjacenyList[v].forEach(w => {
        if (visited[w]) {
            return;
        }

        visited[w] = true;
        queue.push(w);
        traversalSequence.push(w);
    })
    queue.shift();
    if (queue.length > 0) {
        bfs(queue[0]);
    }
};

bfs(0);
console.log(traversalSequence);

// Complexity O(V + E), where V - number of vertices, E - number of edges