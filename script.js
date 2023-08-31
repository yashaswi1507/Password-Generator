let inputSlider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let specialcase = document.getElementById("specialcase");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";

//function to generate password
function generatePassword() {
    let genPassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += upperChars.checked ? upperChars : "";
    allchars += number.checked ? allNumbers : "";
    allchars += specialcase.checked ? allSymbols : "";

    if (allchars == "" || allchars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;


    }
    return genPassword;




}
copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)

    }

})