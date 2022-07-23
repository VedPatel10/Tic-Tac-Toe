// A function that easily prints the gameboard, easy to read. It prints out each index of gameboard so that it is not one long line
function printGameboard() {
  console.log(gameboard[0])
  console.log(gameboard[1])
  console.log(gameboard[2])
}

// A function that runs whenever the 'start' button is pressed
function startGame() {
  
  // if the players have entered something for both names
  if (document.getElementById("player1name").value != "" && document.getElementById("player2name").value != "") {

    // Hide all of the start menu items
    document.getElementById("startMenu").style.display = "none"
    // Make the tic-tac-toe gameboard and the information paragraph visable
    document.getElementById("boardButtons").style.display = "block"
    document.getElementById("infoPara").style.display = "block"

    printGameboard();

    // Get player names and set the title to player 1 vs player 2 
    player1 = document.getElementById("player1name").value
    player2 = document.getElementById("player2name").value
    document.getElementById("title").innerHTML = player1 + " (X) VS " + player2 + " (O)"

    // Set variable to either 1 or 2. If value is 1, player 1 will go first. If value is 2, player 2 will go first. The information paragraph will show this
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    if (whoseTurn == 1) {
      document.getElementById("infoPara").innerHTML = player1 + "'s turn"
    }
  
    else {
      document.getElementById("infoPara").innerHTML = player2 + "'s turn"
    }

  }
  // If the players have not entered both names then it will remind them
  else {
    document.getElementById("feedback").innerHTML = "Enter both names to start playing"
  }

}

// A function that checks if someone has won the game or if it is a tie. This function is called after every move
function gameOverCheck() {
  // Repeat 3 times
  for (i=0; i<3; i++) {

    // If there are 3 horizontal 'X' from left to right 
    if (gameboard[i][0] == "X" && gameboard[i][1] == "X" && gameboard[i][2] == "X") {
      // The information paragraph will show that player 1 is the winner
      console.log("Game over! " + player1 + " wins")
      document.getElementById("infoPara").innerHTML = "Game over! " + player1 + " wins"
      // GamerOver variable is now true, so the restart button will show up
      gameOver = true;
    }

    // If there are 3 horizontal 'O' from left to right
    if (gameboard[i][0] == "O" && gameboard[i][1] == "O" && gameboard[i][2] == "O") { 
      // The information paragraph will show that player 2 is the winner
      console.log("Game over! " + player2 + " wins")
      document.getElementById("infoPara").innerHTML = "Game over! " + player2 + " wins"
      gameOver = true;
    }

    // If there are 3 vertical 'X' from top to bottom
    if (gameboard[0][i] == "X" && gameboard[1][i] == "X" && gameboard[2][i] == "X") {
      // The information paragraph will show that player 1 is the winner
      console.log("Game over! " + player1 + " wins")
      document.getElementById("infoPara").innerHTML = "Game over! " + player1 + " wins"
      gameOver = true;
    }

    // If there are 3 vertical 'O' from top to bottom
    if (gameboard[0][i] == "O" && gameboard[1][i] == "O" && gameboard[2][i] == "O") {
      // The information paragraph will show that player 1 is the winner
      console.log("Game over! " + player2 + " wins")
      document.getElementById("infoPara").innerHTML = "Game over! " + player2 + " wins"
      gameOver = true;
    }
  }

  // If there are 3 'X' diagonal from top left to bottom right
  if (gameboard[0][0] == "X" && gameboard[1][1] == "X" && gameboard[2][2] == "X") {
    // The information paragraph will show that player 1 is the winner
    console.log("Game over! " + player1 + " wins")
    document.getElementById("infoPara").innerHTML = "Game over! " + player1 + " wins"
    gameOver = true;
  }

  // If there are 3 'O' diagonal from top left to bottom right
  if (gameboard[0][0] == "O" && gameboard[1][1] == "O" && gameboard[2][2] == "O") {
    // The information paragraph will show that player 2 is the winner
    console.log("Game over! O wins")
    document.getElementById("infoPara").innerHTML = "Game over! " + player2 + " wins"
    gameOver = true;
  }

  // If there are 3 'X' diagonal from top right to bottom left
  if (gameboard[0][2] == "X" && gameboard[1][1] == "X" && gameboard[2][0] == "X") {
    // The information paragraph will show that player 1 is the winner
    console.log("Game over! X wins")
    document.getElementById("infoPara").innerHTML = "Game over! " + player1 + " wins"
    gameOver = true;
  }

  // If there are 3 'O' diagonal from top right to bottom left
  if (gameboard[0][2] == "O" && gameboard[1][1] == "O" && gameboard[2][0] == "O") {
    // The information paragraph will show that player 2 is the winner
    console.log("Game over! O wins")
    document.getElementById("infoPara").innerHTML = "Game over! " + player2 + " wins"
    gameOver = true;
  }

  // If gameOver is true (if someone has won), change the display of the restart button to 'block', which makes it visable and make the board buttons disabled so you can't click them
  if (gameOver == true) {
    document.getElementById("playAgainButton").style.display = "block"
    // Making each button on the board disabled
    document.getElementById("0,0").disabled = true
    document.getElementById("0,1").disabled = true
    document.getElementById("0,2").disabled = true
    document.getElementById("1,0").disabled = true
    document.getElementById("1,1").disabled = true
    document.getElementById("1,2").disabled = true
    document.getElementById("2,0").disabled = true
    document.getElementById("2,1").disabled = true
    document.getElementById("2,2").disabled = true
  }

  // If there have been 9 moves and there is not a winner (tie), the information paragraph will show that it is a tie and the restart button will become visable. The board buttons will become disabled so you can't click on them.
  if (moves == 9 && gameOver != true) {
    console.log("Tie game!")
    document.getElementById("infoPara").innerHTML = "Tie game!"
    document.getElementById("playAgainButton").style.display = "block"

    // Making each button on the board disabled
    document.getElementById("0,0").disabled = true
    document.getElementById("0,1").disabled = true
    document.getElementById("0,2").disabled = true
    document.getElementById("1,0").disabled = true
    document.getElementById("1,1").disabled = true
    document.getElementById("1,2").disabled = true
    document.getElementById("2,0").disabled = true
    document.getElementById("2,1").disabled = true
    document.getElementById("2,2").disabled = true

  }
}

// A function that runs whenever one of the tic-tac-toe board buttons is clicked using the specific id from the button
function playerClick(clicked_id) {
  
  // The function will only do something if the text of the button it a blank (If you click on a button with an 'X' on it, nothing will happen)
  if (document.getElementById(clicked_id).innerHTML == "&nbsp;") {
    // The total number of moves increases by 1
    moves ++;
    console.log("Number of moves: " + moves)
    
    // If it is player 1's turn
    if (whoseTurn == 1) {
      // Change the text of the button player 1 clicked to 'X'
      document.getElementById(clicked_id).innerHTML = "X"
      // Splits the id into seperate characters and uses the first and last characters to select the correct spot on the 2D array to update it. For example, if the user clicked on the middle button, it would split the clicked_id (1,1) into ["1", ",", "1"]. The first and last elements would be used to select the same button that was clicked on the 2D array to update it.
      gameboard[clicked_id.split('')[0]][clicked_id.split('')[2]] = "X"
      // It is now player 2's turn. The information paragraph will show this
      whoseTurn = 2;
      document.getElementById("infoPara").innerHTML = player2 + "'s turn"
      // Output the updated gameboard
      printGameboard();
      // Run the gameOverCheck function to see if the game is over
      gameOverCheck()
    }
    // If it is player 2's turn
    else {
      // Change the text of the button player 2 clicked to 'O'
      document.getElementById(clicked_id).innerHTML = "O"
      // Same process as when player 1 clicks but changes text to 'O'
      gameboard[clicked_id.split('')[0]][clicked_id.split('')[2]] = "O"
      // It is now player 1's turn. The information paragraph will show this
      whoseTurn = 1;
      document.getElementById("infoPara").innerHTML = player1 + "'s turn"
      // Output the updated gameboard
      printGameboard();
      // Run the gameOverCheck function to see if the game is over
      gameOverCheck()
    }
  }
}

// A function that will run whenever the 'Play Again' button is clicked
function restart() {
  // Set the total number of moves back to 0
  moves = 0;
  // Set gameOver to false
  gameOver = false

  // Make all of the board buttons enabled so they can be used again 
  document.getElementById("0,0").disabled = false
  document.getElementById("0,1").disabled = false
  document.getElementById("0,2").disabled = false
  document.getElementById("1,0").disabled = false
  document.getElementById("1,1").disabled = false
  document.getElementById("1,2").disabled = false
  document.getElementById("2,0").disabled = false
  document.getElementById("2,1").disabled = false
  document.getElementById("2,2").disabled = false
  
  //  Clear the text in the buttons so they are blank again 
  document.getElementById("0,0").innerHTML = "&nbsp"
  document.getElementById("0,1").innerHTML = "&nbsp"
  document.getElementById("0,2").innerHTML = "&nbsp"
  document.getElementById("1,0").innerHTML = "&nbsp"
  document.getElementById("1,1").innerHTML = "&nbsp"
  document.getElementById("1,2").innerHTML = "&nbsp"
  document.getElementById("2,0").innerHTML = "&nbsp"
  document.getElementById("2,1").innerHTML = "&nbsp"
  document.getElementById("2,2").innerHTML = "&nbsp"

  // Clear the 2D array so it can be used again
  gameboard[0] = ["", "", ""]
  gameboard[1] = ["", "", ""]
  gameboard[2] = ["", "", ""]

  printGameboard()

  // Hide the 'Play Again' button
  document.getElementById("playAgainButton").style.display = "none"

  // Generate another random number from 1 - 2 to decide who will have the first move in the new game
  whoseTurn = Math.floor(Math.random() * 2) + 1;
    if (whoseTurn == 1) {
      document.getElementById("infoPara").innerHTML = player1 + "'s turn"
    }
  
    else {
      document.getElementById("infoPara").innerHTML = player2 + "'s turn"
    }
  
}

