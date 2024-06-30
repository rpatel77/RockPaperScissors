let humanScore = 0; 
let computerScore = 0;
let round = 1; 
const input_player = document.querySelector("#playerChoice");
const input_computer = document.querySelector("#computerChoice");
const container = document.getElementById("container");
const final_result = document.createElement("div");


// Round will be played whenever a button is pressed
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
	if (round > 5) {
		gameEnd();
	} else {
		let humanChoice = button.id;
		input_player.value = humanChoice;
		playRound(humanChoice);
		round++;
	}
  });
}); 

function getComputerChoice() {
  	let x;
	do {
		x = Math.floor((Math.random() * 10) + 1); 
	} 
	while (x != 0 && x != 1 && x != 2);

	if (x == 0) {
		x = "rock";
	} else if (x == 1) {
		x = "paper";

	} else if (x == 2) {
		x = "scissors";
	} 
	return x;

}

function playRound(humanChoice) {
	/*
	
	- Get player choice 
	- Generate computer choice only once player choice has been made 
	- Compare both choices 
	- Display in console whether round won, lost or drawn

	*/

	let computerChoice = getComputerChoice(); 
	console.log("player choice: " + humanChoice);
	console.log("computer choice: " + computerChoice);
	input_computer.value = computerChoice; 
	let result; 

  	switch (humanChoice) {
		case "rock":
			if (computerChoice == "rock") {
				result = "DRAW! Rock vs Rock";
			} else if (computerChoice == "paper") {
				result = "YOU LOSE! Paper beats Rock";
				computerScore++; 
			} else if (computerChoice == "scissors") {
				result = "YOU WIN! Rock beats Scissors";
				humanScore++;
			}
			break;

		case "paper":
			if (computerChoice == "rock") {
				result = "YOU WIN! Paper beats Rock";
				humanScore++;
			} else if (computerChoice == "paper") {
				result = "DRAW! Paper vs Paper";
			} else if (computerChoice == "scissors") {
				result = "YOU LOSE! Scissors beats Paper";
				computerScore++; 
			}
			break;
		
		case "scissors":
			if (computerChoice == "rock") {
				result = "YOU LOSE! Rock beats Scissors";
				computerScore++; 
			} else if (computerChoice == "paper") {
				result = "YOU WIN! Scissors beats Rock"; 
				humanScore++;
			} else if (computerChoice == "scissors") {
				result = "DRAW! Scissors vs Scissors";

			}
			break;
	}

	const div_result = document.createElement("div");
	div_result.textContent = "Round " + round + " : " + result;
	container.appendChild(div_result);
}

function gameEnd() {
	if (humanScore > computerScore) {
		last_result = "Final Result: YOU WIN";
	} else if (humanScore == computerScore) {
		last_result = "Final Result: DRAW";
	} else {
		last_result = "Final Result: YOU LOSE";
	}
	final_result.textContent = last_result; 
	container.appendChild(final_result);
}
