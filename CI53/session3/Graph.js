class Vertice {
    data;
    constructor(data) {
        this.data = data;
    }
}

class Edge {
    a;
    b;
    constructor(a, b) {
        if (a instanceof Vertice && b instanceof Vertice) {
            this.a = a;
            this.b = b;
        }
    }
}

class Graph {
    name;
    vertices;
    edges;
    constructor(name) {
        this.name = name;
        this.vertices = [];
        this.edges = [];
    }

    addVertice(v) {
        if (v instanceof Vertice) {
            this.vertices.push(v);
        }
    }

    addEdge(a, b) {
        if (a instanceof Vertice && b instanceof Vertice && a != b) {
            let foundEdge = this.edges.find((edge) => {
                return (edge.a == a && edge.b == b) || (edge.a == b && edge.b == a);
            });

            if (!foundEdge) {
                let newEdge = new Edge(a, b);
                this.edges.push(newEdge);
            }
        }
    }
}

let A = new Vertice("A");

let B = new Vertice("B");

let C = new Vertice("C");

let D = new Vertice("D");

let E = new Vertice("E");

let myGraph = new Graph("my graph");
myGraph.addVertice(A);
myGraph.addVertice(B);
myGraph.addVertice(C);
myGraph.addVertice(D);
myGraph.addVertice(E);

myGraph.addEdge(A, B);
myGraph.addEdge(B, A);
myGraph.addEdge(A, C);
myGraph.addEdge(B, C);