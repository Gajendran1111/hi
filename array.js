// array methods

// .push 

let a = [10,20,30,40,50]
a.push(60);
console.log(a);

// .pop

let b = [10,20,30,40,50]
b.pop();
console.log(b);

// .shift 
let c = [10,20,30,40,50];
c.shift()
console.log(c);

// .unshift 

let d = [10,20,30,40,50]
d.unshift(9);
console.log(d);

// .splice 
// 0 --> it use to  add a particular value in the given index space and move forword the alredy index value
// 1 --> it use to  add a particular value in the given index space and remove the alredy existing value
// syntax 
// variable name.splice(index,splice,value);

let weeks = ["monday","tuesday","wednesday","thuresday","friday","saturday"]
weeks.splice(0,1,"sunday")
console.log(weeks);

// .sort 

let ab = ["banana","apple","orange","mango","papaya","grapes"]
console.log(ab.sort());

// .reverse
let rev = "irtayahg";
console.log(rev.split("").reverse().join(""));

