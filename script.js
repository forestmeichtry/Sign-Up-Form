function validate() {
    if (fieldOne.value != '' || fieldTwo.value != '') {
        if (fieldOne.value != fieldTwo.value) {
            errorMessage.textContent = '* Passwords do not match';
            errorMessage.style.display = "inline";
            fieldOne.classList.add("inputError");
            fieldTwo.classList.add("inputError");
        } else {
            errorMessage.style.display = "none";
            fieldOne.classList.remove("inputError");
            fieldTwo.classList.remove("inputError");
        }
    } else if (fieldOne.value === '' && fieldTwo.value === '') {
        errorMessage.style.display = "none";
        fieldOne.classList.remove("inputError");
        fieldTwo.classList.remove("inputError");
    }
}

const fieldOne = document.querySelector("#password");
const fieldTwo = document.querySelector("#password2");
const errorMessage = document.querySelector("#matchError");

fieldOne.addEventListener("input", validate);
fieldTwo.addEventListener("input", validate);
