
let computerRoundScore = 0;
let userRoundScore = 0;
let computerGlobalScore = 0;
let userGlobalScore = 0;
let turns = 0;
let rounds = 0;
const container = document.querySelector('#talk')


function computerPlay() {
    let table = ["rock", "paper", "scissors"]
    return table[Math.round(Math.random() * 2)]
}

function oneRound(computerInput, userInput) {
    userInput = userInput.toLowerCase();
    let scores = [
        {
            "input": ["rock", "rock"],
            "score": [0, 0]
        },
        {
            "input": ["paper", "paper"],
            "score": [0, 0]
        },
        {
            "input": ["scissors", "scissors"],
            "score": [0, 0]
        },
        {
            "input": ["rock", "paper"],
            "score": [0, 1]
        },
        {
            "input": ["rock", "scissors"],
            "score": [1, 0]
        },
        {
            "input": ["paper", "scissors"],
            "score": [0, 1]
        },
    ]
    for (i of scores) {
        if (computerInput == i.input[0] && userInput == i.input[1])
            return {
                "computer": i.score[0],
                "user": i.score[1]
            }
        if (computerInput == i.input[1] && userInput == i.input[0])
            return {
                "computer": i.score[1],
                "user": i.score[0]
            }
    }
    return 0
}

function whoWins(userScore, computerScore, phase)
{
    const winner = document.createElement('div')
    winner.id = "winner"
    if (userScore == computerScore)
    {
        computerGlobalScore+=1;
        userGlobalScore+=1;
        winner.textContent = "Nobody wins this " + phase
        console.log("Nobody wins this " + phase );
    }
    else if (userScore > computerScore)
    {
        winner.textContent = "You win this " + phase +  "!"
        console.log("You win this " + phase +  "!");
        userGlobalScore+=1;
    }
    else
    {
        winner.textContent = "You loose this "+ phase +  "!"
        console.log("You loose this "+ phase +  "!");
        computerGlobalScore+=1;
    }
    winner.style.color="white"
    container.appendChild(winner)
}

function player_input()
{
    let userInput = this.id
    let computerInput = computerPlay()
    let rez  = oneRound(computerInput, userInput)
    computerRoundScore +=rez.computer;
    userRoundScore+=rez.user;

    let winner = document.querySelector("#winner")
    if (winner)
        container.removeChild(winner)
    whoWins (rez.user, rez.computer, "turn")
    turns++;

    if (turns == 3)
    {
        winner = document.querySelector("#winner")
        if (winner)
            container.removeChild(winner)
        whoWins(userRoundScore, computerRoundScore, "round")
        userRoundScore = 0;
        computerRoundScore = 0;
        rounds++;
        turns = 0;
    }

    if (rounds == 5)
    {
        winner = document.querySelector("#winner")
        if (winner)
            container.removeChild(winner)
        whoWins(userGlobalScore, computerGlobalScore, "game")
        rounds = 0;
        computerGlobalScore = 0;
        userGlobalScore = 0;
    }
}

const buttons = document.querySelectorAll('button');

function game_1()
{
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
     button.addEventListener('click', player_input);
    });
}

game_1();


