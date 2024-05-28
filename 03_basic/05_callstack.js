// code > global execution context refer to this variables 

// Function Execution context >

// Global Execution context   >
    // code  -- Memory creation phase(creation phase)
    //       -- Execution phase    

    let val1 = 10
    let val2 = 20
    
    function addnum(num1, num2){
        let total = num1 + num2
        return total
    }
    
    let result1 = addnum(val1 + val2)
    let result2 = addnum(10, 2)
    
    console.log(result1)
    console.log(result2)
    
    
    // call stack 
    //          GEC -- lifo