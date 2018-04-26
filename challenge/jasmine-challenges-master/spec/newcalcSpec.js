describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            areaOfCircle("Cat");
            expect(window.alert).toHaveBeenCalledWith("Your radius needs to be a number");
        });
        
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        
        it("should show an alert for a negative number", function() {
            spyOn(window,"alert");
            squareRoot(-20);
            expect(window.alert).toHaveBeenCalledWith("Negative numbers don't have square roots");
        })
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        
        it("should not return 9 if another number is supplied", function() {
            expect(squareMe(10)).toBe(100);
        });
        
         it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            squareMe("Nine");
            expect(window.alert).toHaveBeenCalledWith("Your input needs to be a number");
        });
    });
    
    describe("Area of triangle function", function() {
        it("Should return 10 as the area", function() { 
            expect(areaOfTriangle(2,10)).toBe(10);
        });
        
        it("Should not return 10 if another number is supplied", function() {
            expect(areaOfTriangle(3,6)).toBe(9);
        });
    });


    describe("How many years function", function() {
        it("Should return 6 as the amount of years", function() {
        expect(howManyYearsUntil(2012)).toBe(6);
    });
    
    it("Should not return 6 for other numbers", function() {
        expect(howManyYearsUntil(2011)).toBe(7);
    });
    
    it("Should return an error is the year is greater than 2018", function() {
         spyOn(window, "alert");
            howManyYearsUntil(2019);
            expect(window.alert).toHaveBeenCalledWith("Your year cannot be greater than 2018");
    });
    });
   
    
    describe("Area of a cylinder function", function() {
        it("Should return 302 as cylinder area", function() {
            expect(areaOfCylinder(6,2)).toBe(301.59);
        });
    });
    
    it("Should return an error if NaN is entered", function() {
         spyOn(window, "alert");
            areaOfCylinder("Cow",10);
            expect(window.alert).toHaveBeenCalledWith("Your radius and height must be numbers");
    });
    
describe("Fizzbuzz", function() {
    it("Should return Fizz if 18 entered", function() {
        expect(fizzBuzz(18)).toBe("Fizz");
    });
});

describe("Fizzbuzz", function() {
    it("Should return Buzz if 20 entered", function() {
        expect(fizzBuzz(20)).toBe("Buzz");
    });
});

describe("Fizzbuzz", function() {
    it("Should return Fizzbuzz if 15 entered", function() {
        expect(fizzBuzz(15)).toBe("Fizzbuzz");
    });
});


describe("Fizzbuzz", function() {
    it("Should return 11 if 11 entered", function() {
        expect(fizzBuzz(11)).toBe(11);
    });
});

describe("Fizzbuzz", function() {
    it("Should return an error if NaN entered", function() {
        spyOn(window, "alert");
        fizzBuzz("Cat");
        expect(window.alert).toHaveBeenCalledWith("You must enter a number");
    });
});


describe ("Drink About", function() {
    
    it("Should return error if entry is NaN",function() {
       spyOn(window, "alert");
        drinkAbout("Cat");
        expect(window.alert).toHaveBeenCalledWith("Your age must be a number");
    });
    
    it("Should return Sorry. I can't tell what drink because that age is incorrect",function() {
       spyOn(window, "alert");
        drinkAbout(-1);
        expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
    });
    
     it("Should return Drink Toddy if age is less than 14",function() {
       spyOn(window, "alert");
        drinkAbout(12);
        expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
    });
    
     it("Should return Drink Coke if age is less than 18",function() {
       spyOn(window, "alert");
        drinkAbout(16);
        expect(window.alert).toHaveBeenCalledWith("Drink Coke");
    });
    
    it("Should return Drink Beer if age is less than 21",function() {
       spyOn(window, "alert");
        drinkAbout(19);
        expect(window.alert).toHaveBeenCalledWith("Drink Beer");
    });
    
    it("Should return Drink Whiskey if age is less than 130",function() {
       spyOn(window, "alert");
        drinkAbout(120);
        expect(window.alert).toHaveBeenCalledWith("Drink Whiskey");
    });
    
    it("Should return Drink Whiskey if age is less than 130",function() {
       spyOn(window, "alert");
        drinkAbout(150);
        expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
    });
    
});



    
})