function start_game()//function used to start rendering of the game
{
	$('body').html('');
	$(document.body).html('');
}

//classes used in the game
var Bomb= Class.create();
var plane=Class.create();
var ship=Class.create();
var rhino=Class.create();

//class initialization and functions
Bomb.prototype = {
  initialize: function(type) {
    this.type=type; 
    //0 for bullet
    //1 for nuclear 
    //2 for normal bomb
  },
  attack: function(message) {
  	switch(this.type)
  	{
  		case 0://bullet
  		break;
  		case 1://nuclear bomb
  		break;
  		case 2://normal bomb
  		break;
  	}
  }
};