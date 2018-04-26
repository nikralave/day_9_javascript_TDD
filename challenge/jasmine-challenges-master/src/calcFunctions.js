function areaOfCircle(n) {
    if (typeof(n) == "number") {
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
    } else {
        alert("Your radius needs to be a number");
    }
}

function squareRoot(n) {
    if(typeof(n) == "number" && Math.sign(n) == 1) {
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
} else {
    alert("Negative numbers don't have square roots");
}
}

function squareMe(n) {
    if(typeof(n) == "number") {
    let result = n *n;
    return Number(result.toFixed(2));
} else {
    alert("Your input needs to be a number");
}
}

function areaOfTriangle(b,h) {
    let result = (b*h)/2;
    return Number(result.toFixed(2));
}

function howManyYearsUntil(y){
    if(y<=2018) {
    let result = 2018 - y;
     return Number(result.toFixed(2));
} else {
    alert("Your year cannot be greater than 2018");
}
}

function areaOfCylinder (r,h){
    if(typeof(r) == "number" && typeof(h) == "number") {
    let result = (2 * Math.PI * r * h) + (2 * Math.PI * (r * r));
     return Number(result.toFixed(2));
} else {
    alert("Your radius and height must be numbers")
}
}

function fizzBuzz(n) {
    
    if(typeof(n)!= "number") {
        alert("You must enter a number");
    }
    
    else if(n % 5 == 0 && n % 3 == 0) {
        return "Fizzbuzz";
    }
    
    else if(n % 3 == 0) {
        return "Fizz";
    }
    
    else if(n % 5 == 0) {
        return "Buzz";
    }
    
    else {
        return(n);
    }
}




function drinkAbout(n) {
    if(typeof(n)!= "number") {
        alert("Your age must be a number");
    }
    
    else if(n > 0 && n < 14) {
        alert ("Drink Toddy");
    }
    
    else if(n >= 14 && n< 18) {
        alert ("Drink Coke");
    }
    
   else if(n >= 18 && n < 21) {
        alert ("Drink Beer");
    }
    
    else if(n >= 21 && n < 130) {
        alert ("Drink Whiskey");
    }
    
    else {
         alert ("Sorry. I can't tell what drink because that age is incorrect!");
    }
}