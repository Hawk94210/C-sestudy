function nextLevel() {
    score += 1;
    level++;
    time = fullTime;
    document.getElementById("score").innerHTML = "Score: "+score;
    document.getElementById("level").innerHTML = "Level: "+level;
    document.getElementById("correct");
    generateCalculation();
}
function gameOver() {
    document.getElementById("true").style.display = "none";
    document.getElementById("false").style.display = "none";
    document.getElementById("wrong");
    alert("Game Over. Your score is "+ score + ". Replay?");
    location.reload();
}
function countDown() {
    let timeDiv = document.getElementById("time");
    let run = setInterval(function () {
        time -=0.1;
        timeDiv.style.width = widthTime * time/fullTime + "px";
        if(time <= 0){
            clearInterval(run);
            gameOver();
        }
    },100);
}