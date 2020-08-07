function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
    // 나의 나이, 나의 성별, 상대방의 나이, 상대방의 성별
    // 총 4개의 정보를 활용해서 호칭을 결정해보세요.

    /* 함수를 쪼개서 작성하는 연습 겸 해봤는데,
       보기가 썩 좋진 않은 것 같습니다. */

    if (checkAge(myAge, yourAge) === "same") { // A.동갑인 경우 
        return "친구";
    }
    else { // B.동갑이 아닌 경우
        comparison = checkAge(myAge, yourAge); // 비교 결과를 저장
        if (comparison === "elder") { // 1. 내가 연상
            if (yourGender === "male") { // 1-1. (연상)상대가 남성
                return "남동생";
            }
            else { // 1-2. (연상)상대가 여성
                return "여동생";
            }
        }
        else { // 2. 내가 연하
            if (checkSameGender(myGender,yourGender)){ // X.동성인 경우
                if (myGender == "male") { // X-1. (연하)(동성)내가 남성 
                    return "형";
                }
                else { // X-2. (연하)(동성)내가 여성
                    return "언니";
                }
            }
            else { // Y. 동성이 아닌 경우
                if (myGender == "male") { // Y-1. (연하)(이성)내가 남성
                    return "누나";
                }
                else { // Y-2. (연하)(이성)내가 여성
                    return "오빠";
                }
            }
        }
    }
}

function checkSameGender(myGender, yourGender) {
    if (myGender === yourGender) {
        return true
    }
    else {
        return false
    }
}

function checkAge(myAge, yourAge) {
    if(myAge === yourAge) {
        return "same";
    }
    else if(myAge > yourAge) {
        return "elder";
    }
    else {
        return "younger";
    }
}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);