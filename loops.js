// loops  

// for loop 
// while loop 
// do while
// for of 
// for in 

// for loop 
// syntax 

// for (initilization ; condition ; incerment \ decrement)

for (let a = 1;a<=5;a++){
    console.log(a);
    
};

// while loop
// syntax 

// initilization 
// while(condition){
// console.log();
// ++/--
// }


let b = 1;
while (b<=6){
    console.log(b);
    b++;
};

// do while 
let c = 6;
do{
    console.log(c);
    c++
    
}while(c<=5)


// for of 

let days = ["sunday","monday","tuesday","wednesday","thuresday","friday"]
for(sap of days){
    console.log(sap);
    
}

// for in

let obj = {
    name : "ghayathri",
    place : "chennai",
    num : 98765432,
    batch : "morning"
}
for(sape in obj){
    console.log(sape+" = "+obj[sape]);
    
};