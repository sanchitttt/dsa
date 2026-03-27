const customFn = (a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
}

function isOneAway(a, b) {
    if (Math.abs(a.length - b.length) > 2) return false;

    let m = a.length;
    let n = b.length;
    let i = 0;
    let j = 0;
    let count = 0;

    while (i < m || j < n) {
        if (a[i] !== b[j]) {
            if (count === 1) return false;
            count++;
            if (m > n) {
                i++;
            }
            else if (m < n) {
                j++;
            }
            else {
                i++;
                j++;
            }
        }
        else {
            i++;
            j++;
        }
    }

    return true;
}

console.log(isOneAway('ab', 'aab'));