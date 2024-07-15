"use strict";



function getComputerChoice(){
let random = Math.floor(Math.random() * 3); // It will generate 3 numbers 0,1,2
if (random === 0)
    {
        return "rock";
        
    }
else if (random === 1)
    {
            
        return "paper";
    }

else if (random === 2)
    {
        return "scissor"; 
    }   
else{
    console.log("getComputerChoice Failed to execute");
}
}

function getHumanChoice() {

let RSP = prompt("Dear Human please Select: Rock, Paper or Scissor ").toLowerCase();

if (RSP === "rock" || RSP === "paper" || RSP === "scissor")
    {
    console.log(`you chose ${RSP}`)
        return RSP;
    }
else
    {
        alert("please type Rock, Paper or Scissor")
    }
} 

function Rules(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        return console.log("Draw try again! :)");
    }
    
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        Humanscore++;
        console.log("Human Score: " + Humanscore);
        console.log("Computer Score: " + Computerscore);
    } else {
        Computerscore++;
        console.log("Human Score: " + Humanscore);
        console.log("Computer Score: " + Computerscore);
    }
    
    
}

let Humanscore = 0;
let Computerscore = 0;

while (Humanscore <= 5 || Computerscore <=5){

let humantobias = getHumanChoice();

let pcpick = getComputerChoice();

console.log(`Computer chose ${pcpick}`);


Rules(humantobias, pcpick);

if (Humanscore === 5){
    console.log("You won the game!")
}
else if (Computerscore === 5){
console.log("The Computer Won the game.")
}

if (Computerscore === 5 || Humanscore === 5){
    break;
}

}