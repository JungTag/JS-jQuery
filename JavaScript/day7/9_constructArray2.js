var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    const returnArr = [];
    
    // 코드를 작성해주세요.
    for (innerArray of arr) {
        reversedArray = innerArray.reverse(); // 입력된 배열을 reverse 메소드를 사용해 뒤집는다.
        for (value of innerArray) {
            returnArr.push(value); // 뒤집어진 배열의 원소들을 결과배열에 저장한다.
        }
    }
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));