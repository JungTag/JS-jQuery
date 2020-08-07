function range(start, end, step) {
    var arr = [];

    // 코드를 작성해주세요.
    /* step이 양수인지 음수인지 판별하는 것이 중요하다! */
    if (step > 0) { // step이 양수일 때
        for(i=start; i<end; i+=step) { // end보다 작을 때까지 증가
            arr.push(i);
        }
    }
    else { // step이 음수일 때
        for(i=start; i>end; i+=step) { // end보다 클 때까지 감소
            arr.push(i);
        }
    }
    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));