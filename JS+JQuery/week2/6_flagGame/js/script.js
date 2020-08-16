const buttons = Array.from(document.querySelectorAll("button"));

const DOWN_FLAG = "down";
// 제이쿼리는 그냥 알아두기만 하겠습니다..ㅠㅠ

function downFlag(flag) {
    flag.classList.remove(DOWN_FLAG);
}

function handleClick(event) {
    const btn = event.target;
    if (btn.id === "btn1") {
        const flags = Array.from(document.querySelectorAll(".blue"));
        flags.forEach(function(flag) {
            flag.classList.add(DOWN_FLAG);
            setTimeout(downFlag, 1000, flag);
        });
    }
    else if (btn.id === "btn2") {
        const flags = Array.from(document.querySelectorAll(".white"));
        flags.forEach(function(flag) {
            flag.classList.add(DOWN_FLAG);
            setTimeout(downFlag, 1000, flag);
        });
    }
    else {
        const flags = Array.from(document.querySelectorAll(".blue.dot"));
        flags.forEach(function(flag) {
            flag.classList.add(DOWN_FLAG);
            setTimeout(downFlag, 1000, flag);
        });
    }
    
}

buttons.forEach(function(button) {
    button.addEventListener("click", handleClick);
});


