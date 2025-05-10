// arraymethods 


// push 

let  a = [10,20,30,40,50]
a.push(60)
console.log(a);

// pop 

let  b = [10,20,30,40,50]
b.pop()
console.log(b);

// shift 

let  c = [10,20,30,40,50]
c.shift()
console.log(c);

// unshift 

let  d = [10,20,30,40,50]
d.unshift(9)
console.log(d);

// splice 

// syntax 
// variable name.splice(index,splice,value)

// 0 --> it use to  add a particular value in the given index space and move forword the alredy index value
// 1 --> it use to  add a particular value in the given index space and remove the alredy existing value

let days = ["sunday","monday","tuesday","thuresday","friday","saturday"]
days.splice(3,1,"wednesday")
console.log(days);


// sort 

let abc =["d","f","a","c","b","g","e"]
console.log(abc.sort());

// reverse 

let rev = "prakesh"
console.log(rev.split("").reverse().join(""));





