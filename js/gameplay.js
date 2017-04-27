/**
 * Created by jreel on 4/23/2017.
 */


/**
 *  How it works:
 *  
 *  The player is initially presented with various options, and a "Start" button.
 *  Options include:
 *      - number of players (1 or 2)
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

// Return an array of selected values from a SELECT element
function getSelectValues(elSelect) {
    var result = [];
    var choices = elSelect && elSelect.options;
    var opt;

    for (var i = 0, len = choices.length; i < len; i++) {
        opt = choices[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

function create_topics_list() {
    var qtop = [];
    for (var q = 0; q < Questions.length; q++) {
        var t = Questions[q].topic;
        if (qtop.indexOf(t) == -1) {
            qtop.push(t);
        }
    }
    qtop.sort();

    var chapList = document.getElementById("topicSelect");
    var o;
    for (var i = 0; i < qtop.length; i++) {
        o = document.createElement("option");
        o.text = qtop[i];
        o.value = qtop[i];
        chapList.add(o);
    }
}

function Game(params) {
    this._createNewGame(params);
}

Game.prototype = {
    _createNewGame: function(params) {

        this.numPlayers = params["numPlayers"] || 1;
        this.teams = params["teamNames"] || ["Player"];
        this.showNotes = params["showNotes"] || false;

        this.scores = [];
        for (var j = 0; j < this.numPlayers; j++) {
            this.scores.push(0);
        }
        this.currentPlayer = 0;
        this.currentQuestion = null;
        this.currentCorrectAnswer = null;
        this.currentNote = null;

        // this.topics = params["topics"] || [];
        // this.

        // generate question bank array, excluding topics
        // each time a question is shown, it is removed from the list
        // to avoid repeats

        this.questionBank = [];
        for (var q = 0; q < Questions.length; q++) {
            //var c = Questions[q].chapter + "";
            //if (this.chapters.indexOf(c) > -1) {
                this.questionBank.push(Questions[q]);
            //}
        }
        this.questionBank = shuffleArray(this.questionBank);

        this.rounds = params["numRounds"] || Math.floor(this.questionBank.length / this.numPlayers);
        this.turnsLeft = this.rounds * this.numPlayers;
        this.currentRound = 1;
    }
};

var theGame = {};

function checkExists(a) {
    return a;
}

function start_new_game() {

    // pass in the user-selected options
    var params = [];
    params["numPlayers"] = document.getElementById("numPlayers").value;
    params["teamNames"] = document.getElementById("playerNames").value.split("\n").filter(function(a){return a});

    params["numRounds"] = document.getElementById("numRounds").value;

    //params["topics"] = getSelectValues(document.getElementById("topicSelect"));

    params["showNotes"] = document.getElementById("showNotes").checked;
    theGame = new Game(params);
    
    // if more than two players/teams, select one randomly to go first
    if (theGame.numPlayers > 1) {
        var firstPlayer = Math.floor(theGame.numPlayers * Math.random()); // should be 0 or 1 for two players
        document.getElementById("question").innerHTML = theGame.teams[firstPlayer] + " goes first!";
        this.currentPlayer = firstPlayer;

        // show continue button after displaying message, in order to load question
        document.getElementById("divContinue").style.display = "block";
    }
    else {
        // only one player, so just show the first question
        show_new_question();
    }

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
    var pturn = document.getElementById("playerTurn");
    pturn.innerHTML = "Round " + theGame.currentRound;
    pturn.innerHTML += (theGame.numPlayers > 1) ? ", Turn: " + theGame.teams[theGame.currentPlayer] : "";

    document.getElementById("question").innerHTML = theGame.currentQuestion;
    document.getElementById("notes").innerHTML = "(Topic: " + newq.topic + ")";
    
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

    var c = theGame.currentPlayer;

    if (theGame.currentCorrectAnswer == clicked) {
        newMsg += "<p style='color:#008800'>Correct!<br>";
        newMsg += theGame.teams[c] + " gains a point!</p>";

        theGame.scores[c] += 1;

    }
    else {
        newMsg += "<p style='color:#cc0000'>Sorry, that's wrong... better luck next time!<br>";
        newMsg += theGame.teams[c] + " does NOT gain a point!</p>";

        //end_game();
    }
    if (theGame.questionBank.length > 0 && theGame.turnsLeft > 1) {
        // decrement turnsLeft
        theGame.turnsLeft--;

        if (theGame.turnsLeft%theGame.numPlayers == 0) {
            theGame.currentRound++;
        }

        // switch teams, show message
        if (theGame.numPlayers > 1) {
            // go to next player
            theGame.currentPlayer = (c+1)%theGame.numPlayers;

            newMsg += theGame.teams[theGame.currentPlayer] + ", you're up next!";
        }
    }
    else {
        newMsg += "<p style='color:#0000cc'>That's all, folks!</p>";
        //end_game();
        document.getElementById("divContinue").onclick = function(){end_game()};
    }
    document.getElementById("divContinue").style.display = "block";

    score.innerHTML = "";
    for (a in theGame.teams) {
        score.innerHTML += theGame.teams[a] + ": " + theGame.scores[a];
        if (a < theGame.teams.length - 1) {
            score.innerHTML += ", "
        }
    }

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
    //document.getElementById("question").innerHTML = "Refresh the page if you want to play again!";

        var qel = document.getElementById("question");
        qel.innerHTML = "Click below if you want to play again!<br><br>";

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

/*
function checkTeamPlay(el) {
    var d = document.getElementById("teamPlayDiv");
    var p = document.getElementById("teamPlay");
    if (el.value > 1){
        d.style.display = "block";
    }
    else {
        d.style.display = "none";
    }
    p.checked = (el.value > 1);
    showTeamInput(p);

}

function showTeamInput(el) {
    var d = document.getElementById("teamNameDiv");
    if (el.checked) {
        d.style.display = "block";
    }
    else {
        d.style.display = "none";
    }
}
*/



