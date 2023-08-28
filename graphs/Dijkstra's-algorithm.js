const adjacenyList = [[0, 1, 4], [6,2,10], [3,1,2], [0,2,3], [4,3,3], [4,6,1], [8,3,5], [5,3,14], [7,6,7],[6,5,2],[3,6,6]];

const distances = [0];
const parents = [0];
const visited = { 0: false };
const pending = {};

const dijkstasAlg = (graph) => {
    let vertex = distances[0];
    while(vertex !== undefined) {
        delete pending[vertex];
        visited[vertex] = true;
        graph.forEach((edge) => {
            if (vertex === '2') {
                console.log(edge);
            }
            const distance = edge[2] + distances[vertex];
            if (edge[0] === vertex && !visited[edge[1]]) {
                if (distances[edge[1]] === undefined || distance < distances[edge[1]]) {
                    parents[edge[1]] = vertex;
                    distances[edge[1]] = distance;
                    pending[edge[1]] = true;
                }
            } else if (edge[1] === vertex && !visited[edge[0]]) {
                if (distances[edge[0]] === undefined || distance < distances[edge[0]]) {
                    parents[edge[0]] = vertex;
                    distances[edge[0]] = distance;
                    pending[edge[0]] = true;
                }
            }
        });
        const pendingKeys = Object.keys(pending);
        if (pendingKeys.length > 0) {
            vertex = +pendingKeys.reduce((acc, curr) => {
                return distances[acc] > distances[curr] ? curr : acc;
            });
        } else {
            vertex = undefined;
        }
    }
}

dijkstasAlg(adjacenyList);
console.log(distances);
console.log(parents);