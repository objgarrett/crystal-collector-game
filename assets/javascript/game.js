//Crystal Collector
//by Olivia Garrett

//START GAME
$(document).ready(function(){

randomNumber = getRndInteger(19,120);	
//VARIABLES
var startingScore = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber;
//assign each of the four crystals a random number between 1-12
var rubyValue = getRndInteger(1, 12); 
var emeraldValue = getRndInteger(1, 12); 
var sapphireValue = getRndInteger(1, 12); 
var diamondValue = getRndInteger(1, 12); 

//writes wins, losses, random number, and total score to document
$('#wins').html('<h2>Wins: ' + wins + '</h2>');
$('#losses').html('<h2>Losses: ' + losses + '</h2>');
$('#random-number').html('<h2>Guess the Number: ' + randomNumber); //maybe change startingScore to sum
$('#total-score').html(startingScore);

//test random numbers
console.log(rubyValue);
console.log(emeraldValue);
console.log(sapphireValue);
console.log(diamondValue);

//Generates random number between 19-120	
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Reset game, generate new random numbers, reset score counter to zero
function reset() {
	randomNumber = getRndInteger(19,120);	
	rubyValue = getRndInteger(1, 12); 
	emeraldValue = getRndInteger(1, 12); 
	sapphireValue = getRndInteger(1, 12); 
	diamondValue = getRndInteger(1, 12); 
	$('#random-number').html('<h2>Guess the Number: ' + randomNumber); //maybe change startingScore to sum
	$('#total-score').html(startingScore);
	console.log("---NEW GAME---");
	console.log(rubyValue);
	console.log(emeraldValue);
	console.log(sapphireValue);
	console.log(diamondValue);
}

//if total score equals random number then player wins and +1 to wins
//else when total score is greater than random number then players loses and +1 to losses
function winLose() {
	if (totalScore > randomNumber) {
		losses++;
		alert('You Lost! Try Again');
		$('#losses').html('<h2>Losses: ' + losses + '</h2>');
		console.log("console losses " + losses);
		reset();
	} else if (totalScore === randomNumber) {
		wins++;
		$('#wins').html('<h2>Wins: ' + wins + '</h2>');
		alert('You Win!');
		console.log("console win " + wins);
		reset();
	}		
}

//On-click add a specific amount of points to the total score
//Ruby Button
$("#ruby-button").click(function () {
	totalScore = parseInt($('#total-score').text());
	var randomNumber = parseInt($('#randomNumber').text());
	var sum	= parseInt($('#total-score').html(rubyValue + totalScore).text());
	winLose();
});

//Emerald Button
$('#emerald-button').click(function() {
	totalScore = parseInt($('#total-score').text());
	var randomNumber = parseInt($('#randomNumber').text());
	var sum	= parseInt($('#total-score').html(emeraldValue + totalScore).text());
	winLose();	
});

//Sapphire Button
$('#sapphire-button').click(function() {
	totalScore = parseInt($('#total-score').text());
	var randomNumber = parseInt($('#randomNumber'))
	var sum = parseInt($('#total-score').html(sapphireValue + totalScore).text());
	winLose();
});	

//Diamond Button
$('#diamond-button').click(function() {
	totalScore = parseInt($('#total-score').text());
	var randomNumber = parseInt($('#randomNumber'))
	var sum = parseInt($('#total-score').html(diamondValue + totalScore).text());
	winLose();
});
});




