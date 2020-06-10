var lightOptions = document.querySelector("#light-options");
var darkOptions = document.querySelector("#dark-options");
var neumoOptions = document.querySelector("#neumo-options");

var lightInputFields = document.querySelectorAll(".required-light");
var darkInputFields = document.querySelectorAll(".required-dark");
var neumoInputFields = document.querySelectorAll(".required-neumo");

var lightInputFieldsArray = Array.from(lightInputFields);
var darkInputFieldsArray = Array.from(darkInputFields);
var neomoInputFieldsArray = Array.from(neumoInputFields);

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
    turnRequiredFalse(neomoInputFieldsArray);
}

function toggleDark() {
    darkOptions.classList.remove("hide");
    lightOptions.classList.add("hide");

    turnRequiredTrue(darkInputFieldsArray);
    turnRequiredFalse(lightInputFieldsArray);
    turnRequiredFalse(neomoInputFieldsArray);
}

function toggleNeumo() {
    neumoOptions.classList.remove("hide");
    lightOptions.classList.add("hide");
    darkOptions.classList.add("hide");

    turnRequiredTrue(neomoInputFieldsArray);
    turnRequiredFalse(lightInputFieldsArray);
    turnRequiredFalse(darkInputFieldsArray);
}
