function printTriangle(height) {
    // 이 함수 안에서 console.log를 직접 사용하여
    // 직접 출력까지 완료해야 합니다.
    // 이 함수는 return 값이 없습니다.
    for(i=1; i<height+1; i++){
        console.log('*'.repeat(i)); // repeat메소드를 이용하여 문자열을 반복시킨다.
    }
}

// 테스트 코드
console.log('높이: 5');
printTriangle(5);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 1');
printTriangle(1);