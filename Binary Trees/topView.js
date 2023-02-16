const topView = (root) => {
    const levelOrderTraversal = (root) => {
        const queue = [[root, 0]];

        let map = new Map();
        while (queue.length) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let current = queue.shift();
                if (!map.has(current[1])) map.set(current[1], current[0].val);
                if (current[0].left) queue.push([current[0].left, current[1] - 1]);
                if (current[0].right) queue.push([current[0].right, current[1] + 1]);
            }
        }
        let result = [];
        map.forEach((value, key) => result.push([key, value]));
        result.sort((a, b) => a[0] - b[0]);
        let temp = [];
        result.forEach((item) => temp.push(item[1]));
        return temp;

    }
    return levelOrderTraversal(root);
}
