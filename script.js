// DISPLAYING AND HIDING RULES

const mainRuleBox = document.querySelector(".main-rule-box");
const container = document.querySelector(".container");

document.getElementById('start').addEventListener("click", () => {
    mainRuleBox.style.display = 'none';
    container.style.display = 'block';
})



// ------------------------------------------
// FUNCTION TO GENERATE THE 4-DIGIT SECRET CODE

function generateSecretCode() {
    let secretCode = []
    while (secretCode.length < 4) {
        let code = Math.ceil(Math.random() * 6);
        if (!secretCode.includes(code)) {
            secretCode.push(code);
        }
    }
    console.log("Secret Code: " + secretCode)
    return secretCode;
}



// ------------------------------------------
// GETTING INPUT ON CLICKING NUMBERS

const btn_1 = document.getElementById('btn-1');
const btn_2 = document.getElementById('btn-2');
const btn_3 = document.getElementById('btn-3');
const btn_4 = document.getElementById('btn-4');
const btn_5 = document.getElementById('btn-5');
const btn_6 = document.getElementById('btn-6');

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;

const guessText = document.querySelector('.guess-text');
let guessTextArray = [];    // Initialize an array for user input

btn_1.addEventListener('click', () => {
    if (guessTextArray.length < 4) {
        guessTextArray.push(one);
    };
    guessText.textContent = `Your Guess : ${guessTextArray.join(' ')}`;
    btn_1.disabled = true;
    btn_1.style.cursor = "not-allowed";
});

btn_2.addEventListener('click', () => {
    if (guessTextArray.length < 4) {
        guessTextArray.push(two);
    };
    guessText.textContent = `Your Guess : ${guessTextArray.join(' ')}`;
    btn_2.disabled = true;
    btn_2.style.cursor = "not-allowed";
});

btn_3.addEventListener('click', () => {
    if (guessTextArray.length < 4) {
        guessTextArray.push(three);
    };
    guessText.textContent = `Your Guess : ${guessTextArray.join(' ')}`;
    btn_3.disabled = true;
    btn_3.style.cursor = "not-allowed";
});

btn_4.addEventListener('click', () => {
    if (guessTextArray.length < 4) {
        guessTextArray.push(four);
    };
    guessText.textContent = `Your Guess : ${guessTextArray.join(' ')}`;
    btn_4.disabled = true;
    btn_4.style.cursor = "not-allowed";
});

btn_5.addEventListener('click', () => {
    if (guessTextArray.length < 4) {
        guessTextArray.push(five);
    };
    guessText.textContent = `Your Guess : ${guessTextArray.join(' ')}`;
    btn_5.disabled = true;
    btn_5.style.cursor = "not-allowed";
});

btn_6.addEventListener('click', () => {
    if (guessTextArray.length < 4) {
        guessTextArray.push(six);
    };
    guessText.textContent = `Your Guess : ${guessTextArray.join(' ')}`;
    btn_6.disabled = true;
    btn_6.style.cursor = "not-allowed";
});



// ------------------------------------------
// FUNCTION TO CALCULATE SCORE (BLACK & WHITE PEGS)

function calculateScore(secret, guess) {
    let white = 0;
    let black = 0;

    let unmatchedSecret = [];
    let unmatchedGuess = [];

    // Calculate Black pegs
    for (let i = 0; i < 4; i++) {
        if (secret[i] === guess[i]) {
            black++;
        } else {
            unmatchedGuess.push(guess[i]);      // To add the unmatched number from the 'guess'
            unmatchedSecret.push(secret[i]);    // To add the unmatched number from the 'secret'
        }
    }

    // Calculate White pegs
    /* 
        If the 'num' from 'unmatchedGuess' matches 'unmatchedSecret'.
        It'll increment "white" value and also remove it from 'unmatchedSecret' to ensure each digit is only counted once. 
    */
    unmatchedGuess.forEach(num => {
        if (unmatchedSecret.includes(num)) {
            white++;
            unmatchedSecret.splice(unmatchedSecret.indexOf(num), 1);
        }
    });
    return { black, white };
}



// ------------------------------------------
// TARGETING LEFTOVER IMPORTANT ELEMENTS

const scoreText = document.querySelector('.score-text');
const submitBtn = document.getElementById('submit-btn');
const playAgainBtn = document.getElementById('play-again-btn');



// ------------------------------------------
// FUNCTION TO PLAY GAME

function game() {
    secretcode = generateSecretCode();  // The secret code is generated here
    let totalGuesses = 0;   // Initialize Guesses count

    const timerBox = document.querySelector('.timer-box');
    const timer = document.querySelector('.timer');

    const blackEmoji = document.querySelector('.black');
    blackEmoji.style.color = "black";
    const whiteEmoji = document.querySelector('.white');
    whiteEmoji.style.color = "white";


    submitBtn.addEventListener('click', () => {
        btn_1.disabled = true;
        btn_1.style.cursor = "not-allowed";
        btn_2.disabled = true;
        btn_2.style.cursor = "not-allowed";
        btn_3.disabled = true;
        btn_3.style.cursor = "not-allowed";
        btn_4.disabled = true;
        btn_4.style.cursor = "not-allowed";
        btn_5.disabled = true;
        btn_5.style.cursor = "not-allowed";
        btn_6.disabled = true;
        btn_6.style.cursor = "not-allowed";

        submitBtn.disabled = true;
        submitBtn.style.cursor = "not-allowed";

        totalGuesses++;
        const score = calculateScore(secretcode, guessTextArray);


        if (score.black === 4) {
            scoreText.textContent = `Your Score : ${score.black} BLACK Pegs , ${score.white} WHITE Pegs`;

            blackEmoji.textContent = "◼ ◼ ◼ ◼";
            blackEmoji.style.display = "block"

            setTimeout(() => {
                scoreText.style.color = "green";
                scoreText.textContent = `You  successfully cracked the secret code ( ${secretcode.join('')} ) in ${totalGuesses} guesses !`;

                blackEmoji.style.display = "none";
                playAgainBtn.style.display = 'block';
            }, 2000);   
        }

        else {
            if (score.black === 1) {
                blackEmoji.textContent = "◼";
                blackEmoji.style.display = "block"
            };
            if (score.black === 2) {
                blackEmoji.textContent = "◼ ◼";
                blackEmoji.style.display = "block"
            };
            if (score.black === 3) {
                blackEmoji.textContent = "◼ ◼ ◼";
                blackEmoji.style.display = "block"
            };
            if (score.white === 1) {
                whiteEmoji.textContent = "◼";
                whiteEmoji.style.display = "block"
            };
            if (score.white === 2) {
                whiteEmoji.textContent = "◼ ◼";
                whiteEmoji.style.display = "block"
            };
            if (score.white === 3) {
                whiteEmoji.textContent = "◼ ◼ ◼";
                whiteEmoji.style.display = "block"
            };
            if (score.white === 4) {
                whiteEmoji.textContent = "◼ ◼ ◼ ◼";
                whiteEmoji.style.display = "block"
            };

            scoreText.textContent = `Your Score : ${score.black} BLACK Pegs , ${score.white} WHITE Pegs`;
            timerBox.style.display = 'block';


            setTimeout(() => {
                timer.textContent = "7";
            }, 1000);
            setTimeout(() => {
                timer.textContent = "6";
            }, 2000);
            setTimeout(() => {
                timer.textContent = "5";
            }, 3000);
            setTimeout(() => {
                timer.textContent = "4";
            }, 4000);
            setTimeout(() => {
                timer.textContent = "3";
            }, 5000);
            setTimeout(() => {
                timer.textContent = "2";
            }, 6000);
            setTimeout(() => {
                timer.textContent = "1";
            }, 7000);
            setTimeout(() => {
                timerBox.style.display = 'none';
                timer.textContent = "8"

                guessText.textContent = "Your Guess : ";
                guessTextArray = [];

                scoreText.textContent = "Your Score : ";

                btn_1.disabled = false;
                btn_1.style.cursor = "pointer";
                btn_2.disabled = false;
                btn_2.style.cursor = "pointer";
                btn_3.disabled = false;
                btn_3.style.cursor = "pointer";
                btn_4.disabled = false;
                btn_4.style.cursor = "pointer";
                btn_5.disabled = false;
                btn_5.style.cursor = "pointer";
                btn_6.disabled = false;
                btn_6.style.cursor = "pointer";

                submitBtn.disabled = false;
                submitBtn.style.cursor = "pointer";

                blackEmoji.style.display = "none";
                whiteEmoji.style.display = "none";
            }, 8000);
        }
    });
};



// ------------------------------------------
// CALLING THE GAME FUNCTION

game();



// ------------------------------------------
// PLAY AGAIN GAME

playAgainBtn.addEventListener('click', () => {
    guessText.textContent = "Your Guess : ";
    guessTextArray = [];

    scoreText.textContent = "Your Score : ";
    scoreText.style.color = "#2c2c2c";

    btn_1.disabled = false;
    btn_1.style.cursor = "pointer";
    btn_2.disabled = false;
    btn_2.style.cursor = "pointer";
    btn_3.disabled = false;
    btn_3.style.cursor = "pointer";
    btn_4.disabled = false;
    btn_4.style.cursor = "pointer";
    btn_5.disabled = false;
    btn_5.style.cursor = "pointer";
    btn_6.disabled = false;
    btn_6.style.cursor = "pointer";

    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";

    playAgainBtn.style.display = "none"
    game()
});
