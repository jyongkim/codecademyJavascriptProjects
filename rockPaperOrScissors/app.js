// Getting the user choice and making sure the result will be in lowercase.
// Obteniendo la opción del usuario y asegurándo que el resultado esté en letra minúscula.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    // Checking if user choice is 'rock', 'paper', 'scissors' or 'bomb' (which is added as an extra).
    // Controlando que si la opción del usuario es 'rock', 'paper', 'scissors' o 'bomb' (que es agregada como extra).
    // If not, there'll be an error message printed to the console
    // Si no, habrá un mensaje de error impreso en la consola.
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error, please type: rock, paper or scissors');
    }
  }
  
  // Computer choice.
  // Elección de la computadora.
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';                  
      }
  }
  
  // Checking who is a winner by comparing userChoice and computerChoice.
  // Comprobando quién es el ganador comparando userChoice y computerChoice.
  const determineWinner = (userChoice, computerChoice)=>{
    if (userChoice === computerChoice){
      return "This game is a tie!";
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return "Sorry, computer won!";
      } else{
        return "Congratulations, you won!";
      }
    }
      if (userChoice=== 'paper'){
        if(computerChoice === 'scissors'){
          return 'Sorry, computer won!';
        }else{
          return "Congratulation, you won!";
        }
      }
    
        if (userChoice=== 'scissors'){
        if (computerChoice === 'rock'){
          return 'Sorry, computer won!';
        } else {
          return "Congratulations, you won";
        }
      }
    
    if (userChoice==='bomb'){
      return 'Congratulation, you won!';
    }
  }
  
  // Starting the game. Log the results: userChoice and computerChoice.
  // Comenzando el juego. Registra el resultado: userChoice y computerChoice.
  const playGame = ()=>{
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    
    // Who won?
    // ¿Quién ganó?
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  // Starting the game.
  // Comenzando el juego.
  playGame();