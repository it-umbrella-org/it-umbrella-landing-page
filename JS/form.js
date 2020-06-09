var lightOptions = document.querySelector("#light-options");
var darkOptions = document.querySelector("#dark-options");

var lightInputFields = document.querySelectorAll(".required-light");
var darkInputFields = document.querySelectorAll(".required-dark");

var lightInputFieldsArray = Array.from(lightInputFields);
var darkInputFieldsArray = Array.from(darkInputFields);

function turnRequiredFalse(arr) {
    arr.forEach((element) => {
        element.required = false;
    });
}
function turnRequiredTrue(arr) {
    arr.forEach((element) => {
        element.required = true;
    });
}

function toggleLight() {
    lightOptions.classList.remove("hide");
    darkOptions.classList.add("hide");

    turnRequiredTrue(lightInputFieldsArray);
    turnRequiredFalse(darkInputFieldsArray);
}

function toggleDark() {
    darkOptions.classList.remove("hide");
    lightOptions.classList.add("hide");

    turnRequiredTrue(darkInputFieldsArray);
    turnRequiredFalse(lightInputFieldsArray);
}
