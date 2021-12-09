// 아래 function에 setTimeout에 의하여 호출되어 '반갑습니다'를 출력하는 callback 함수를 정의하십시오. 타임아웃 값은 1000으로 하십시오. 
function getMessage(callback) {
    setTimeout(function() {
        callback('반갑습니다!');
    }, 1000);

}

console.log("아직 getMessage 수행 전입니다");

getMessage(function(message) {
    console.log(message)
});

console.log("이미 getMessage 수행이 완료되었습니다");