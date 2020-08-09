function sayBye(){
    console.log("mim");
    console.log("akib");
}
sayBye();

//function parameter

function doubleIt(num){
    var result = num*2;
    console.log(result);
}
doubleIt(5);
doubleIt(50);

//return type

function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
console.log(first,second);

// return type

function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);

//2 parameter

function add(num1,num2){
    var result = num1 + num2;
    return result;
}
var sum = add(15,20);
console.log(sum);