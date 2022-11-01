//variables 

let myChoice = document.getElementById('choice');
let myButton = document.getElementById('putAclick');
let myResult = document.getElementById('result');
let pcNumber = Math.floor(Math.random() * 100 + 1);

//event listner
myButton.addEventListener('click', function(){
    let playerNumber = `${myChoice.value}`;
    console.log(playerNumber);
    console.log(pcNumber);
        if(playerNumber==pcNumber){
             myResult.innerText= ("🥳We Have a WINNER🥳");
             myButton.innerText = ('play again');
             myButton.addEventListener('click', function(){
                document.location.reload(false);
             });
        }
        else if (playerNumber > pcNumber){
            myResult.innerText=("😢you are higher😢");
            if (playerNumber - pcNumber >10){
                myResult.innerText=("😭you are way too high😭");
            }
        }
        else {
            myResult.innerText=("😢 you are lower 😢");
            if (pcNumber - playerNumber >10){
                myResult.innerText=("😭you are way too low😭");
            }
        }
});
