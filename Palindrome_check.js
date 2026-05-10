// Palindrome check for single value
function Palindrome(value){            // Rest operator used to add multiple values in a argument
    let str = value.toLowerCase()         // convert the value to lower case
    let rev = "";                        // assign a empty string to store the reversed string
    for(let i = str.length-1;i>=0;i--){
        rev = rev + str.charAt(i)        // convert the string to seperate char [M,A,D,A,m]
    }
    console.log(rev);
    if(rev === str){                       // Using strict equality compare the revsered value with the orignal if match
        console.log(value+" is a palindrom");  // print is Palindrom
    }else{
        console.log(value+' is not a palindrom');  // else print this
    }
}
Palindrome('MADAm');                     // Passing the value as a parameter

// Palindrom check with rest operator for passing more then one value in the argument
function Ispalaindrom(...ele){
    for(let el of ele){                                   // iterate through array elements
        let element = el.toLowerCase();
        let reverse_ele = "";
        reverse_ele = element.split().reverse().join()    // Js function to split the value then reverse and join them back in one single step.
        if(reverse_ele === ele){                          // [Name= N,a,m,e => e,m,a,N => emaN]
            console.log(`${el}` + ` is a palindrome`);    // `${ele}`=> Template literal => for passing argument in runtime.
        }else{
            console.log(`${el}` + ` is not a palindrome`);
        }
    } 
    
}
Ispalaindrom('Name','Madam','lol','palindrome check Completed')

//        console.log('original value = '+ ele + "reversed value = " + reverse_ele );
