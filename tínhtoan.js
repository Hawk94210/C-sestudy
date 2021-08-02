function generateCalculation() {
    let number1 = getRandomNumber(1*level, 5*level);
    let number2 = getRandomNumber(1*level, 5*level);
    let op = getRandomOperator();
    let cal = number1 + " " + op + " " + number2;
    document.getElementById("calculation").innerHTML = cal;
    document.getElementById("result").innerHTML = getRandomResult();
}
function getRandomResult() {
    let randomResult = Math.random() >= 0.5;//tỉ lệ đúng sai 50:50
    return randomResult ? getResult() : getFakeResult();
}
function getResult() {
    let cal = document.getElementById("calculation").innerHTML;
    return eval(cal);
}
function getFakeResult() {
    let fakeResult = getRandomNumber(getResult() - 10, getResult() + 10);
    return (fakeResult === getResult()) ? getFakeResult() : fakeResult;
}