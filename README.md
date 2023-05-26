# guess-the-number
Number Guessing Game
This is a JavaScript implementation of a number guessing game. The game generates a random number between 1 and 100, and the player's objective is to guess the correct number. The game provides feedback to the player on whether their guess is higher or lower than the target number. If the difference between the player's guess and the target number is less than or equal to 10, the game provides more specific feedback.
# usage
Run the HTML file in a web browser.
Enter a number in the input field.
Click the "Check" button to see if your guess is correct.
The result will be displayed in the result area.
If you guess correctly, a "Play Again" button will appear. Click it to restart the game.

# Code Explanation
The code consists of the following components:

Variables: The necessary variables for the game are declared, including the choiceElement for the input field, checkButton for the check button, resultElement for the result area, and pcNumber for the randomly generated target number.

Random Number Generation: The getRandomNumber() function generates a random number between the provided minimum and maximum values.

Event Listener: The handleButtonClick() function is attached to the "Check" button using the addEventListener() method. It handles the logic of the game.

Game Logic: Inside the handleButtonClick() function, the player's guess is compared to the target number. The result is displayed in the result area accordingly. If the player's guess is higher than the target number, it will show "😢 You are higher 😢". If the difference between the player's guess and the target number is less than or equal to 10, it will show "😭 You are way too high 😭". Similarly, if the player's guess is lower than the target number, it will show "😢 You are lower 😢". If the difference between the target number and the player's guess is less than or equal to 10, it will show "😭 You are way too low 😭". If the player guesses correctly, a winner message is shown, and a "Play Again" button is displayed, allowing the player to restart the game.

Displaying the Result: The displayResult() function updates the result area with the provided message.

[click her](https://schismond.github.io/guess-the-number/) to see a live demo of the website