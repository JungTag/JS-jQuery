function factorial(num) {
    var factorialValue = 1;
    // 코드를 작성하세요.
    for(i=1; i<=num; i++) { // num이 될 때까지 i를 증가
        factorialValue *= i; // 결과값에 i를 곱해준다
    }
    return factorialValue;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
