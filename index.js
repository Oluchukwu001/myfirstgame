const guess = Number(document.querySelector('.guess').value);
let scores = 20;
let secretnumber = Math.floor(Math.random() * 21)
let highscore = document.querySelector('.highscore').textContent





const check = document.querySelector('.check').textContent;
const sendmessage = (messages) => {
    const message = document.querySelector('.message').textContent = messages
    return message
}








const displayText=(g)=>{
  const man = document.querySelector('h1').textContent = g;
  return man
}




function win(){
    document.querySelector('.open').classList.remove('hide')
    document.querySelector('.open').textContent = 'please click on the again button to restart the game !!!';
    // document.querySelector('.hide').classList.remove('hide')
    document.querySelector('.number').textContent = secretnumber;
    displayText( sendmessage('CORRECT GUESS !!!'));

    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.parent').style.backgroundColor = "green";
    document.querySelector('.number').style.height = "200px"
    document.querySelector('.number').style.width = "200px"
    if (scores > highscore) {
        highscore = scores
        document.querySelector('.highscore').textContent = highscore;
    }
};


function closed_guess(){
    document.querySelector('.open').textContent = 'Common, You are almost there !!!';
    
    scores--;
    document.querySelector('.score').textContent = scores;
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.parent').style.backgroundColor = "black";
    document.querySelector('.number').style.height = "100px";
    document.querySelector('.number').style.width = "100px";
    displayText ("Guess My Number!");
};


function guess_not_close(){

    
    scores--;
    document.querySelector('.score').textContent = scores;
    document.querySelector('.open').classList.remove('hide');
    document.querySelector('.open').textContent = 'Common, keep guess !!!';
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.parent').style.backgroundColor = "black";
    document.querySelector('.number').style.height = "100px";
    document.querySelector('.number').style.width = "100px";
    displayText("Guess My Number!");
}


function lost_game(){
    document.querySelector('h1').textContent = sendmessage('YOU LOSE THE GAME !!!');
    document.querySelector('.open').classList.remove('hide');
    document.querySelector('.open').textContent = 'please click on the again button to restart the game !!!';
}





function again_button() {
    secretnumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.parent').style.backgroundColor = "black";
    document.querySelector('.number').style.height = "100px"
    document.querySelector('.number').style.width = "100px"
    sendmessage('Starting Guessing...');
    scores = 20;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = "20";
    document.querySelector('.open').classList.add('hide')
    displayText("Guess My Number!");
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = secretnumber;
}

document.querySelector('.number').textContent = secretnumber;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    if (!guess) {
        sendmessage("No Number!")
    } else if (guess !== secretnumber) {

        document.querySelector('.open').classList.remove('hide');
        if ((guess - 1) == secretnumber || (guess + 1) == secretnumber) {
           closed_guess()
           sendmessage(guess < secretnumber ? 'Low Number' : "High Number");
        } else {
            guess_not_close() 
            sendmessage(guess > secretnumber ? 'High Number' : 'Low Number')
        }
        if (scores == 0) {
            sendmessage('You Lose the Game!!!');
            lost_game()
        }
    } else if (guess === secretnumber) {
        win()
    
    }
})



document.querySelector('.again').addEventListener('click', function () {
   again_button()
})



document.addEventListener('keydown', function (p) {
    console.log(p.key)
    if ((p.key) === 'Enter') {
        const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    if (!guess) {
        sendmessage("No Number!")
    } else if (guess !== secretnumber) {

        document.querySelector('.open').classList.remove('hide');
        if ((guess - 1) == secretnumber || (guess + 1) == secretnumber) {
           closed_guess()
           sendmessage(guess < secretnumber ? 'Low Number' : "High Number");
        } else {
            guess_not_close() 
            sendmessage(guess > secretnumber ? 'High Number' : 'Low Number')
        }
        if (scores == 0) {
            sendmessage('You Lose the Game!!!');
            lost_game()
        }
    } else if (guess === secretnumber) {
        win()
    
    }
    }

})
