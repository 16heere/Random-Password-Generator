const passwordBox = document.getElementById("password-box");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!£$%^&*()-_=+[{]};:'@#~,<.>/?/*\\|";
const allCharacters = upperCase + lowerCase + numbers + symbols;
let password = ""; 

function generatePassword(){
    password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < 15){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordBox.value = password;
}

async function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value);
}