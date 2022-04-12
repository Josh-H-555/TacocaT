//Instantiate event listener
document.getElementById("buttonSubmit").addEventListener("click", getValues);

document.getElementById("alert").classList.add("invisible");

//getValues
function getValues() {


    let inputString = document.getElementById("userInput").value;

    let palindrome = false;

    if (inputString) {
        isolatedString = inputString.replace(/[^a-zA-Z\\s]/gi, '').toLowerCase();
        isolatedString = isolatedString.replace(/\\/gi, '');
        palindrome = checkPalindrome(isolatedString);
        displayPalindrome(inputString, isolatedString, palindrome);
    } else {
        alert("Please enter a string.");
    }
}

//checkPalindrome
function checkPalindrome(isolatedString) {

    let stringLength = isolatedString.length;

    for (let i = 0; i < Math.floor(stringLength / 2); ++i) {
        if (isolatedString[i] != isolatedString[stringLength - i - 1]) {
            return false;
        }
    }

    return true;
}

function checkPalindrome(isolatedString, poop) {

    let stringLength = isolatedString.length;

    for (let i = 0; i < Math.floor(stringLength / 2); ++i) {
        if (isolatedString[i] != isolatedString[stringLength - i - 1]) {
            return false;
        }
    }

    return true;
}

function checkPalindrome() {

    let stringLength = isolatedString.length;

    for (let i = 0; i < Math.floor(stringLength / 2); ++i) {
        if (isolatedString[i] != isolatedString[stringLength - i - 1]) {
            return false;
        }
    }

    return true;
}

//displayPalindrome
function displayPalindrome(inputString, isolatedString, palindrome) {
    message = document.getElementById("message");
    alertBox = document.getElementById("alert");

    if (palindrome) {
        message.innerHTML = `The string you entered "${isolatedString}" is a palindrome!`;
        alertBox.classList.add("alert-success");
        alertBox.classList.remove("invisible");
    } else {
        message.innerHTML = `The string you entered "${isolatedString}" is not a palindrome.`;
        alertBox.classList.add("alert-danger");
        alertBox.classList.remove("invisible");
    }
}