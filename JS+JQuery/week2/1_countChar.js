// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    let count = 0;
    word = word.toUpperCase();
    ch = ch.toUpperCase();
    for (char of word) {
        if (char === ch) {
            count++;
        }
    }
    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    let count = 0;
    word = word.toUpperCase();
    let cnt = 0;
    for (char of word) {
        if (char === 'A') {
            count++;
        }
    }
    return count;
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));