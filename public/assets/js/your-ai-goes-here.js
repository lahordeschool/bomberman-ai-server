const SERVER_URL = "http://192.168.10.21:8080";

/*
* 
* This project has been made by a total noob so don't judge if you find any bug :) 
* Made with love by LA HORDE for BETCLIC
*
*
* Game Loop function is called every 500ms 
* 
* What you can find in the data object : 
*  - players on the board, including their positions
*  - 
*
* You can control your player using those two methods : 
*  - return "MOVE XXX" => possible values for XXX are directions : "UP", "DOWN", "LEFT", "RIGHT"
*  - return "PLANT BOMB" => no parameters nor security, let's blow it baby ! (you better hide soon though)
*
*
*/


/*
*  SAMPLE DUMMY BOT THAT GOES RANDOMLY AROUND
*/

var directions = ["up", "down", "left", "right"];


async function gameLoop(data){
    
        
    return "MOVE "+directions[Math.floor(Math.random()*directions.length)];
    
    console.log(data);


}