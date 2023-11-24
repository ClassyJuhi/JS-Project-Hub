let displayPass = document.getElementById('displayPass');
let generate = document.getElementById('generate');
let copy = document.getElementById('copy');
let form = document.querySelector('form');

function generatePassword(e) {
    e.preventDefault();

    let passLengthInput = document.getElementById('passLength');
    let passLength = parseInt(passLengthInput.value, 10);

    if (isNaN(passLength) || passLength <= 0) {
        alert('Please enter a valid password length');
        return;
    }

    let elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' , 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~','!', '@', '#', '$', '%', '^', '&', ';','*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', '<', '>', '.', '?', '/'];;
    let password = '';
    
    for (let i = 0; i < passLength; i++) {
        let index = Math.floor(Math.random() * elements.length + 1);
        password += elements[index];
    }

    displayPass.innerText = password;
}

generate.addEventListener('click', generatePassword);

function copyPassword() {
    const passwordToCopy = displayPass.innerText;

    if (!passwordToCopy) {
        alert('There is no password to copy.');
        return;
    }

    const tempInput = document.createElement('input');
    tempInput.value = passwordToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Password copied to clipboard: ' + passwordToCopy);
}

copy.addEventListener('click', copyPassword);