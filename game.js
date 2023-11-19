let Player_Image = document.getElementById("all_logo")
let Auto_Image = document.getElementById("Auto_Logo")
let random;

function random_play(){
    random = Math.floor(Math.random()*3)+1
    switch(random){
        case 1:
            Auto_Image.setAttribute("src", "./assets/paper-hand.png");
            break
        case 2:
            Auto_Image.setAttribute("src", "./assets/rock-hand.png");
            break
        case 3:
            Auto_Image.setAttribute("src", "./assets/scissors-hand.png");
            break
        
    }
}

let User_Score = 0;
let Auto_Score = 0;

let Rock_Button = document.getElementById("rock-logo")
let Paper_Button = document.getElementById("paper-logo")
let Sicssor_Button = document.getElementById("scissors-logo")
let U_Score = document.getElementById("userScore");
let A_Score = document.getElementById("compScore");
let result = document.getElementById("resultMatch");
let playAgain = document.getElementById("playAgain");



Rock_Button.onclick = () =>{
    random_play()
    Player_Image.setAttribute("src", "./assets/rock-hand.png");
    if (random == 3){
        User_Score++
        U_Score.textContent = User_Score 
    }
    if (random == 1){
        Auto_Score++
        A_Score.textContent = Auto_Score
    }
    game_over()
}

Paper_Button.onclick = () =>{
    random_play()
    Player_Image.setAttribute("src", "./assets/paper-hand.png");
    if (random == 2){
        User_Score++
        U_Score.textContent = User_Score 
    }
    if (random == 3){
        Auto_Score++
        A_Score.textContent = Auto_Score
    }
    game_over()
}

Sicssor_Button.onclick = () =>{
    random_play()
    Player_Image.setAttribute("src", "./assets/scissors-hand.png");
    if (random == 1){
        User_Score++
        U_Score.textContent = User_Score 
    }
    if (random == 2){
        Auto_Score++
        A_Score.textContent = Auto_Score
    }
    game_over()
}

function game_over(){
    if (User_Score == 5 || Auto_Score == 5){
        Rock_Button.style.visibility = "hidden";
        Paper_Button.style.visibility = "hidden";
        Sicssor_Button.style.visibility = "hidden";
    }

    if (User_Score == 5){
        result.textContent = "You won the match!"
        playAgain.style.visibility = "visible";
    }

    if (Auto_Score == 5){
        result.textContent = "Computer won the match!"
        playAgain.style.visibility = "visible";
    }
}

playAgain.onclick = () =>{
    window.open("game.html", "_self")
}




