let arrayIndex = [4, 22, 54, 10, 3, 4, 5];
let dabbleArray = [
    [6, 18, 54, 5, 8, 5, 15],
    [4, 22, 40, 11, 2, 9, 5],
    [3, 24, 31, 69, 3, 4, 3],
    [5, 17, 14, 10, 9, 4, 18],
]
function deleteMax(arr, max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
function deleteMaxDabble(arr, max) {
    let N = 6
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === max) {
                arr[i].splice(j, 1);
            }
        }

    }
    return arr;
}

function max(arr) {
    let result;
    for (let value of arr) {
        if (result === undefined) {
            result = value;
            continue;
        }
        if (value > result) {
            result = value;
        }
    }
    return result;
}
function maxDabble(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > result) {
                result = arr[i][j];
            }
        }
    }

    return result;
}
console.log(deleteMax(arrayIndex, max(arrayIndex)));
console.log(deleteMaxDabble(dabbleArray, maxDabble(dabbleArray)));