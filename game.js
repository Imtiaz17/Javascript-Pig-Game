	var scores, roundScores,activePlayer, gamePlaying;

	init();

	document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
			//random number
	var dice=Math.floor(Math.random() * 6) + 1;
	//display the number
	var diceDom= document.querySelector('.dice');
	diceDom.style.display='block';
	diceDom.src='images/dice-'+ dice+'.png';
	//update and show value if dice number is not 1
	if (dice !== 1) {
	//add score
	roundScores += dice;
	document.querySelector('#current-'+ activePlayer).textContent=roundScores;
	}
	else
	{
	//next player
	nextPlayer();
	}
	}
	
});
	document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying) {
		//add number in global score
	scores[activePlayer] += roundScores;
	//update ui
	document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
	//cheak if player get 20 point
	if (scores[activePlayer]>=20) {
	document.querySelector('#score-'+activePlayer).textContent='Winner';
	document.querySelector('.dice').style.display='none';
	gamePlaying=false;
	}
	else
	{
	//next player
	nextPlayer();
	}
	}
	


});
	document.querySelector('.btn-add').addEventListener('click', function(){
	init();
});
	function nextPlayer()
{
	//next player
	activePlayer===0? activePlayer=1:activePlayer=0;
	roundScores=0;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

	//change active class
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.player-2-panel').classList.toggle('active');
}
	function init()
{
	scores=[0,0];
	roundScores=0;
	activePlayer=0;
	gamePlaying=true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-2-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.add('active');

}