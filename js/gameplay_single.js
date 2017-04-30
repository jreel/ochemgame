/**
 * Created by jreel on 4/23/2017.
 */

/**
 *  How it works:
 *  
 *  The player is initially presented with various options, and a "Start" button.
 *  Options include:
 *      - number of rounds to play
 *      - "single elimination" (that is, get one wrong and you lose)
 *      - a list of topics to include/exclude questions
 *  
 *  Each round, the player is presented with a question, and 4 answer choices (randomized).
 *  The player should click the button containing the correct answer.
 *  
 *  Upon answering correctly:
 *    a "correct" message is briefly displayed at the top of the screen,
 *    the score is updated,
 *    and a new question is presented.
 *    (the game should keep track of which questions have been presented, to avoid repeats)
 *
 */

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function sortSelect(el) {
    var tmp = [];
    for (var i = 0; i < el.options.length; i++) {
        tmp[i] = [];
        tmp[i][0] = el.options[i].text;
        tmp[i][1] = el.options[i].value;
    }
    tmp.sort();
    while (el.options.length > 0) {
        el.options[0] = null;
    }
    for (var j = 0; j < tmp.length; j++) {
        el.options[j] = new Option(tmp[j][0], tmp[j][1]);
    }
}

function generate_topics_list() {
    var qtop = [];
    for (var q = 0; q < Questions.length; q++) {
        var t = Questions[q].topic;
        if (qtop.indexOf(t) == -1) {
            qtop.push(t);
        }
    }
    qtop.sort();
    return qtop;
}
function populate_topics_list() {
    var qtop = generate_topics_list();
    var topAv = document.getElementById("topicAvail");
    var o;
    for (var i = 0; i < qtop.length; i++) {
        o = document.createElement("option");
        o.text = qtop[i];
        o.value = qtop[i];
        topAv.add(o);
    }
}

function moveListItem(dir) {
    var source, dest, item;

    if (dir == 'right') {
        source = document.getElementById("topicAvail");
        dest = document.getElementById("topicSel");
    }
    else {
        dest = document.getElementById("topicAvail");
        source = document.getElementById("topicSel");
    }

    var len = source.options.length ;
    for (var j = len - 1; j >= 0; j--) {
        item = source.options[j];
        if (item.selected) {
            dest.appendChild(item);
        }
    }
    sortSelect(dest);

}
function moveListAll() {
    var list = document.getElementById("topicAvail");
    for (var a = 0; a < list.options.length; a++) {
        list.options[a].selected = true;
    }
    moveListItem('right');
}

function Game(params) {
    this._createNewGame(params);
}

Game.prototype = {
    _createNewGame: function(params) {

        this.numTeams = 1;
        this.showNotes = params["showNotes"] || true;
        this.suddenDeath = params["suddenDeath"] || false;

        this.score = 0;
        this.currentQuestion = null;
        this.currentCorrectAnswer = null;
        this.currentNote = null;

        this.topics = params["topics"] || generate_topics_list();

        // generate question bank array, including selected topics
        // each time a question is shown, it is removed from the list
        // to avoid repeats

        this.questionBank = [];
        for (var q = 0; q < Questions.length; q++) {
            var t = Questions[q].topic + "";
            if (this.topics.indexOf(t) > -1) {
                this.questionBank.push(Questions[q]);
            }
        }
        this.questionBank = shuffleArray(this.questionBank);

        if (document.getElementById("numRounds").disabled && document.getElementById("playAll").checked) {
            this.rounds = this.questionBank.length;
        }
        else if (params["numRounds"] > 0) {
            this.rounds = Math.min(params["numRounds"], this.questionBank.length);
        }
        else {
            this.rounds = this.questionBank.length;
        }
        this.turnsLeft = this.rounds;
        this.currentRound = 0;
    }
};

var theGame = {};

function start_new_game() {

    // pass in the user-selected options
    var params = [];
    params["numRounds"] = document.getElementById("numRounds").value;

    params["topics"] = [];
    var seltop = document.getElementById("topicSel");
    for (var i = 0; i < seltop.options.length; i++) {
        params["topics"].push(seltop.options[i].value);
    }

    params["showNotes"] = document.getElementById("showNotes").checked;
    params["suddenDeath"] = document.getElementById("suddenDeath").checked;
    theGame = new Game(params);
    
    // only one player, so just show the first question
    show_new_question();
}


function show_new_question() {
    // hide continue button, show answers area, clear msg area
    document.getElementById("divContinue").style.display = "none";
    document.getElementById("answers").style.display = "block";
    document.getElementById("message").innerHTML = "";

    // pick random question from Questions array
    var qindex = Math.floor(theGame.questionBank.length * Math.random());
    var newq = theGame.questionBank[qindex];

    // store current question and answer in Game object
    theGame.currentQuestion = newq.question;
    theGame.currentNote = newq.note || "";
    theGame.currentCorrectAnswer = newq.choices[newq.correct - 1];
    // note the actual value (not the index) of the choices array is stored as the answer
    // this is so it can easily be recognized even after shuffling the answer choices

    // show question on screen, along with randomized answer choices
    theGame.currentRound++;
    var pturn = document.getElementById("playerTurn");
    pturn.innerHTML = "Round " + theGame.currentRound;

    document.getElementById("question").innerHTML = theGame.currentQuestion;
    document.getElementById("notes").innerHTML = "(Topic: " + newq.topic + ")";
    document.getElementById("notes").style.display = "block";
    
    var aForm = document.getElementById("answersForm");
    if (newq.randomize === undefined) {    // here, undefined should default to 'true', i.e., randomize
        newq.choices = shuffleArray(newq.choices);
    }
    var alpha = ["A", "B", "C", "D"];
    for (var a = 0; a < aForm.length; a++) {
        aForm.elements[a].disabled = false;
        aForm.elements[a].value = newq.choices[a];
        aForm.elements[a].innerHTML = "<span class='let'>" + alpha[a] + "</span> " + newq.choices[a];
    }

    // after showing question on screen, remove from question bank
    theGame.questionBank.splice(qindex, 1);
}

function check_answer(clicked) {
    var msg = document.getElementById("message");
    var score = document.getElementById("score");

    var noteArea = document.getElementById("notes");
    var orig = noteArea.innerHTML;

    var newMsg = "";
    var newNote = "";

    if (theGame.currentCorrectAnswer == clicked) {
        newMsg += "<p style='color:#008800'>Correct! ";
        newMsg += "You gain a point!</p>";

        theGame.score += 1;

    }
    else {
        newMsg += "<p style='color:#cc0000'>Sorry, that's incorrect. ";
        if (!theGame.suddenDeath) {
            newMsg += " You LOSE a point!</p>";

            theGame.score -= 1;
        }
        else {
            newMsg += "<br>Game over! Better luck next time!</p>";
            document.getElementById("divContinue").onclick = null;
            document.getElementById("divContinue").onclick = function () {end_game()};
        }
    }
    if (theGame.questionBank.length > 0 && theGame.turnsLeft > 1) {
        // decrement turnsLeft
        theGame.turnsLeft--;
    }
    else {
        document.getElementById("divContinue").onclick = null;
        document.getElementById("divContinue").onclick = function(){end_game()};
    }
    document.getElementById("divContinue").style.display = "block";

    score.innerHTML = "Score: " + theGame.score;

    var aForm = document.getElementById("answersForm");
    for (var a = 0; a < aForm.length; a++) {
        aForm.elements[a].disabled = true;
    }

    msg.innerHTML = newMsg;

    if (theGame.showNotes) {
        newNote += theGame.currentNote + "<br><br>" + orig;
    }
    noteArea.innerHTML = newNote;
    noteArea.style.display = "block";
}

function end_game() {

        var qel = document.getElementById("question");

        qel.innerHTML = "<p style='color:#0000cc'>Game Over! (" + theGame.currentRound + " rounds completed)<br>";
        qel.innerHTML += "Final Score: " + theGame.score + "</p>";
        qel.innerHTML += "Click below if you want to play again!<br><br>";

     var b = document.createElement("BUTTON");
     var t = document.createTextNode("Play Again");
     b.appendChild(t);
    b.id = "btnAgain";
     qel.appendChild(b);
     b.onclick = function(){location.reload()};


    document.getElementById("answers").style.display = "none";
    document.getElementById("notes").innerHTML = "";
    document.getElementById("notes").style.display = "none";
    document.getElementById("message").style.display = "none";
}




