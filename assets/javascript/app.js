// variables
var question = ["Which of these players averaged the fewest points per game?", "Who is the tallest player to ever play in the NBA?", "Which player has won the most NBA championships?", "Which of these teams was one of the originial 11 NBA teams?"]
var aAnswers = ["Wilt Chamberlain", "Shaquille O'Neal", "Bill Russell", "Los Angeles Lakers"]
var bAnswers = ["Michael Jordan", "Yao Ming", "Robert Horry", "Atlanta Falcons"]
var cAnswers = ["Kobe Bryant", "Gheorghe Mureșan", "Michael Jordan", "New York Knicks"]
var dAnswers = ["Lebron James", "Manute Bol", "Kareem Abdul-Jabbar", "Boston Celtics"];
var correctAnswer = [$("#choiceC"), $("#choiceC"), $("#choiceA"), $("#choiceD")];
var gifs = [$("#kobe"), $("#yao"), $("#russell"), $("#boston")]
var x = 0;
var numberCorrect = 0;
var numberIncorrect;
var time = 15
// functions
function fillQAndA() {
    if (x > 3) {
        numberIncorrect = 4 - numberCorrect;
        $("#question").text("All finished!");
        $("#choiceA").text("Correct: " + numberCorrect);
        $("#choiceB").text("Incorrect: " + numberIncorrect);
        $("#choiceC").text("");
        $("#choiceD").text("");
        $("#timer").toggle();
        $("#restartButton").toggle();
    } else {
        $("#question").text(question[x]);
        $("#choiceA").text(aAnswers[x]);
        $("#choiceB").text(bAnswers[x]);
        $("#choiceC").text(cAnswers[x]);
        $("#choiceD").text(dAnswers[x]);
    }
    if (x > 0) {
        gifs[x - 1].toggle();
    } else {
        gifs[x].toggle();
    }
    $("#time").toggle();
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return seconds;
}

function count() {
    time--;
    var convertedTime = timeConverter(time);
    $("#time").html(convertedTime);
    if (time === 0 && x < 4) {
        {
            $("#question").html("The correct answer was " + correctAnswer[x].text())
        }
        $("#choiceA").text("");
        $("#choiceB").text("");
        $("#choiceC").text("");
        $("#choiceD").text("");
        gifs[x].toggle();
        setTimeout(fillQAndA, 4500)
        x++;
        time = 19;
        $("#time").toggle();
    }
}

// logic 
$(".choice").click(function showAnswer() {
    gifs[x].toggle();
    if ($(this).is(correctAnswer[x])) {
        $("#question").text("Correct!");
        numberCorrect++
    } else {
        $("#question").html("Wrong! <br>The correct answer was " + correctAnswer[x].text())
    }
    $("#choiceA").text("");
    $("#choiceB").text("");
    $("#choiceC").text("");
    $("#choiceD").text("");
    setTimeout(fillQAndA, 4500)
    x++;
    time = 19;
    $("#time").toggle();
});


$("#startButton").click(function () {
    $(this).toggle();
    gifs[x].toggle();
    $("#timer").toggle();
    fillQAndA();
    setInterval(count, 1000)
});

$("#restartButton").click(function () {
    $(this).toggle();
    $("#timer").toggle();
    x = 0;
    gifs[x].toggle();
    numberCorrect = 0;
    $("#time").toggle();
    fillQAndA();
    time = 15;
});