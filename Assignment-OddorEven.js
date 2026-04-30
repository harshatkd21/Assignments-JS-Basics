// Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
//number is odd and `"Even"` if the number is even.

//create a function 
 function OddOrEven(number){
     // divide the number by 2 and save the remainder in x
    let x=number%2
    if(x===1){
        console.log(number+" -This is a odd number") // print if the remainder is 1
    }
    else{
        console.log(number+" -This is a even number") //print if the remainder is not 1
    }
}

OddOrEven("5457") //calling the function with the parameter value as 2

function isoddoreven(){
    for(let i=0;i<=25;i++){  // looping till the value of i is less then or equal to 25.
     //   init the value of i to 0
        let x= i%2     // divide the value of i with 2 and save the value in x  // using modulus operator
        console.log("current number",i)
        
        if(x===1){                              // using strict operator
            console.log(i,"is a odd number")  // print if the remainder is 1
        }
        else{
            console.log(i,"is a even number") // print if the remainder is not 1
        }
    }
}

isoddoreven() //calling the function outside the scope.