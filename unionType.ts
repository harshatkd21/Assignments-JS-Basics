// Classroom : Union Type Alias

// *Classroom activity on union type* :
//  ------------------------------------

// - Create a function that accepts only specific payment methods.

// - Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".

// - Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.

// - Call the function with "UPI" and "CreditCard" as arguments.

type PaymentMethod = 'UPI'|'CreditCard'|'PayPal'

function Payment(method1:PaymentMethod, method2:PaymentMethod){
    if(method1==="UPI" || method2==="CreditCard"){
        console.log("Payment done with UPI");
        
    }else{
        console.log("Unknown Payment Method");
        
    }
} Payment("UPI","CreditCard")
