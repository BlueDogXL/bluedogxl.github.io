function start(){
    console.log("Started!");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    console.log("Update seconds row to Reading Data");
    document.getElementById("startButton").disabled = true;
    console.log("Start button disabled!");
    document.getElementById("stopButton").disabled = false;
    console.log("Stop button enabled!");
}
function stop(){
    console.log("Stopped!");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    console.log("Stop button disabled!");
    document.getElementById("startButton").disabled = false;
    console.log("Start button enabled!");
}
// we neet to count down from 50 in 5 second increments and show blast off at the end
function blastOffTimer() {
    console.log("blastOffTimer started");
    var currTime = 50;
    var increment = 5;
    var timeMult = 5000;
    document.getElementById("blastOffText").innerHTML = currTime
    console.log(currTime);
    currTime = currTime - increment;
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 2 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 3 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 4 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 5 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 6 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 7 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 8 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there! 5";
        }
        currTime = currTime - increment;
    }, 9 * timeMult)
    setTimeout(function () {
        console.log(currTime)
        document.getElementById("blastOffText").innerHTML = "Blast off!";
        currTime = currTime - increment;
    }, 10 * timeMult)
}
function playCraps() {
    console.log("Playing Craps");
    var die1 = 6 * Math.random();
    var roundDie1 = Math.ceil(die1);
    console.log("The random number is: " + die1);
    console.log("The rounded number is: " + roundDie1);
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + roundDie1;
    var die2 = 6 * Math.random();
    var roundDie2 = Math.ceil(die2);
    console.log("The random number is: " + die2);
    console.log("The rounded number is: " + roundDie2);
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + roundDie2;
    var sum = roundDie1 + roundDie2;
    console.log("The sum of the numbers is: " + sum);
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "You lose!";
    } else if(roundDie1 == roundDie2 && roundDie1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "You win!";
    } else {
    document.getElementById("crapsRes").innerHTML = "Tie!";
}
}
function betterCount(){
    console.log("Test countdown started!")
    // writes to console to signal the start of the countdown
    currTime = 50
    // sets the starting time
    for(var i = 0; i <= 10; i++){
        /* loops to save space. 
        if you want to change the number of seconds you change the less than / equal to number to be your
        starting time divided by your interval*/
        console.log(i);
        setTimeout(function(){
            if(currTime == 0){
                // at the end of the countdown, blasts off
                document.getElementById("blastOffText").innerHTML = "Blast off!";
            }else if(currTime < 25){
                // halfway through the countdown, puts more words on the screen
                document.getElementById("blastOffText").innerHTML = "Warning: Less than halfway to launch, time left: " + currTime;
            }else {
                //for the first 25 seconds, just prints the time
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            // we're going by 5s i guess
            currTime = currTime - 5;
            // 5000 milliseconds = 5 seconds between counts
        }, 5000 * i)
    }
}
function playSound(){
    console.log("sound played!");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
    setTimeout(function(){
        mySound.stop();
    }, 7500);
}
function sound(srcfile){
    this.sound = document.createElement("audio");
    this.sound.src = srcfile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}