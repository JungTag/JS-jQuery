const birthdayData = [
    '20010309전소미',
    '19960828김세정',
    '19991112최유정',
    '19960209김청하',
    '19990719김소혜',
    '19981216주결경',
    '19971201정채연',
    '19991204김도연',
    '19991204강미나',
    '19951218임나영',
    '19990803유연정'
];

function printMinors(arr) {
    const minorArr = [];
    for (girl of arr) {
        if(girl.charAt(0) === '2'){ // 2000년생 -> 미성년자
            minorArr.push(girl);
        }
        else {
            if(parseInt(girl.charAt(3)) > 8) { // 년도를 Int형으로 변환시켜서 비교(98년 이후 출생자 -> 미성년자) 
                minorArr.push(girl);
            }
        }
    }
    console.log("미성년자 명단:");
    for (girl of minorArr) {
        console.log(girl);
    }

}

// 테스트 코드
printMinors(birthdayData);