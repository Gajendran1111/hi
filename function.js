// function 

// syntax 
// function name (){}


function js (){

    var d =10;
    var a =20;
    var a = 30;
    console.log(a);
    console.log(d);
    
    let b =11;
    b = 22;
    console.log(b);
    
    const c = 100;
    console.log(c);


}
js();


// function types 

// Function Declaration --> parameters arguments

function hi (hello){
    console.log(hello);
    
}
hi("declaration");

// Function Expression or Anonymous Function

let fun = function java (exp){
    console.log(exp);
    
}
fun("exxpression");

//

let a = function (ano){
    console.log(ano);
    
} 
a("anonymous");
// Immediate Invoke Function expression 

(function (iife){
    console.log(iife);
    
})("function");
// Arrow Function

// syntax 

// ()=>{}

let s = (arrow)=>{console.log(arrow)}
s("arrow function");
