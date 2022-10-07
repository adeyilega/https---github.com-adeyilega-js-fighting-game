
function rectangularCollision({ rectangle1, rectangle2}){
	return(
	  rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.position.x && 
		rectangle1.attackbox.position.x <= rectangle2.position.x + rectangle2.width &&
	   rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.position.y &&
	   rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height 
		)
}

function determineWinner({player, enemy, TimerId}){
	 clearTimeout(TimerId)
	document.querySelector('#DisplayText').style.display = 'flex'
	if (player.health === enemy.health){
		document.querySelector('#DisplayText').innerHTML = 'Tie'
		
	 }
		else if(player.health > enemy.health){
		document.querySelector('#DisplayText').innerHTML = 'Player 1 Wins'
		 
	 }
		else if(player.health < enemy.health){
		document.querySelector('#DisplayText').innerHTML = 'Player 2 Wins'
		 
	 }
}

let timer = 60
let TimerId
function decreaseTimer(){
	if (timer > 0){
		TimerId = setTimeout(decreaseTimer, 1000)
		timer--
	document.querySelector('#timer'). innerHTML = timer			  
	}	
	
	if (timer === 0) {
		document.querySelector('#DisplayText').style.display = 'flex'
	     determineWinner({player, enemy, TimerId})
	}
}// JavaScript Document