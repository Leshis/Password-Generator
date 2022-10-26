const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","&lt;","&gt;",".","?","/"];

let btn = document.getElementById("generateBtn")
let passwordOneDiv = document.getElementById("password-one")
let passwordTwoDiv = document.getElementById("password-two")
let passwordOne = ""
let passwordTwo = ""
let passwordLength = document.getElementById("password-length").value

const passwordLengthInput = document.getElementById("password-length")
passwordLengthInput.addEventListener("input", updateValue)

btn.addEventListener("click", generatePass);

function updateValue(e) {
    passwordLength = e.target.value
}

function generatePass() {

    passwordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += characters[Math.floor(Math.random()*characters.length)]
    }

    passwordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordTwo += characters[Math.floor(Math.random()*characters.length)]
    }

    passwordOneDiv.innerHTML = `<p>${passwordOne}</p>`
    passwordTwoDiv.innerHTML = `<p>${passwordTwo}</p>`
}