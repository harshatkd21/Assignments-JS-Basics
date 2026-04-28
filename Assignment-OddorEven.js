// Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
//number is odd and `"Even"` if the number is even.

//create a function 
/* function isOddOrEven(number){
     
    let x=number%2
     console.log(x)


    if(x===1){
        console.log("This is a odd number")
    }
    else{
        console.log("This is a even number")
    }
}

isOddOrEven("2") */

function isoddoreven(){
    for(let i=0;i<=25;i++){
     //   console.log(i);
        let x= i%2
        console.log("current number",i)
        
        if(x===1){
            console.log(i,"is a odd number")
        }
        else{
            console.log(i,"is a even number")
        }
    }
}

isoddoreven()