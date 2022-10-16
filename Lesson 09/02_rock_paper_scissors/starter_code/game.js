



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
let random = math.random();
if (random < 0.3333){
    return "rock";
} else if (random < 0.666){
    return "scissors";
} else {
    return "paper";
}


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
//create a variable that holds the winner text
let winnertext; 
// deicdes who wins and fill the winner text variable with who won

if(me == opponent){
    winnertext = "tie"
} 

// me is scissors and opponent is paper scissors wins 

if(me == "scissors" && computerChoice == "paper"){
    return "scissors";
}

// me is
//target the html element that will display winner and populate 






};





    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    document.querySelector("#scissors").addEventListener('click',function(e){
        e.preventDefault();
        let computerPlayerChoice = computerChoice();
        compare("scissors",computerPlayerChoice);
    });


