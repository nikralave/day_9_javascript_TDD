describe("Calculator tests", function() {
    describe("Addition tests", function() {
        
        it("should return 4", function() {
            expect(addition(2, 2)).toBe(4);
        });

        it("should not return 4 for different numbers", function() {
            expect(addition(20, 22)).toBe(42);
        });
        it("should show an alert for NaN",function() {
            spyOn(window, "alert");
            addition("Fish", 22);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
            
        it("Should show an alert if we only supply one number",
        function() {
            spyOn(window, "alert");
            addition(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
    });
    
    
    describe("Subtraction function", function() {
        it("should return 4", function() {
            expect(subtract(6,2)).toBe(4);
        });
        
        it("should not return 4 for different numbers", function() {
            expect(subtract(20, 12)).toBe(8);
        });
        
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            subtract("Coffee", 10);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers"
            );
        });
        
        it("should show an alert if we only supply one number",
        function() {
            spyOn(window, "alert");
            subtract(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
        
    });
   
   describe("Multiplication function", function() {
       it("should return 6", function() {
           expect(multiply(2,3)).toBe(6);
       });
       
      it("should not return 6 for different numbers", function() {
            expect(multiply(10, 2)).toBe(20);
        });
        
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            multiply(10,"Cat");
            expect(window.alert).toHaveBeenCalledWith("You need two arguments and they must both be numbers");
        });
        
        it("should show an alert if we only supply one number", function() {
            spyOn(window,"alert");
            multiply(60);
            expect(window.alert).toHaveBeenCalledWith("You need two arguments and they must both be numbers");
        })
   });
    
    
});

    

