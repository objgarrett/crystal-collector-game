//Crystal Collector
//by Olivia Garrett

//Variables
var randomNumber
var startingScore = 0;
var rubyValue;
var emeraldValue;
var sapphireValue;
var diamondValue;
var wins = 0;
var losses = 0;
var totalScore = 0;

//function startGame(){
//random number generator between 19-120	
	randomNumber = Math.floor((Math.random() * 120) + 19);
	document.getElementById('random-number').innerHTML = randomNumber;
	document.getElementById('wins').innerHTML = 'Wins: ' + wins;
	document.getElementById('losses').innerHTML = 'Losses: ' + losses;
	document.getElementById('total-score').innerHTML = startingScore;

$(document).ready(function(){

//assign each of the four crystals a random number between 1-12
	rubyValue = Math.floor((Math.random() *12) + 1);
	emeraldValue = Math.floor((Math.random() *12) + 1);
	sapphireValue = Math.floor((Math.random() *12) + 1);
	diamondValue = Math.floor((Math.random() *12) + 1);

//on click add a specific amount of points to the total score
$("#ruby-button").on("click", function() {
	rubyValue = Math.floor((Math.random() * 12) + 1);
	totalScore == rubyValue +  startingScore;
	$("#total-score").text(totalScore);
});

$('#emerald-button').on('click', function() {
	//emeraldValue = Math.floor((Math.random() *12) + 1);
	totalScore == emeraldValue + startingScore;
	$('#total-score').text(totalScore);

});

$('#sapphire-button').on('click', function() {
	//sapphireValue = Math.floor((Math.random() *12) + 1);
	totalScore == sapphireValue + startingScore;
	$('#total-score').text(totalScore);

});

});





//};


//if total score equals random number then player wins and +1 to wins

//else when total score is greater than random number then players loses and +1 to losses

//restart game when player wins or loses
//generate new random number 
//assign new hidden value to each crystal
//reset score counter to zero
