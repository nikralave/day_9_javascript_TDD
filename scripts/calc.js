function addition(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 + num2;
    }
    else {
        alert("Arguments must both be numbers");
    }
}

function subtract(num1, num2) {
    if (typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 - num2;
    }
    else {
        alert("Arguments must both be numbers");
    }
}

function multiply(num1, num2) {
    if(typeof(num1) == "number" & typeof(num2) == "number") {
    return num1 * num2;
}
else {
    alert("You need two arguments and they must both be numbers");
}
}