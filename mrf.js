// map 

// syntax 
// variable name.map((value,index,accumalator)=>)

    let a = [10,20,30,40,50]
    let b =a.map((val,ind,acc)=>acc*2)
    console.log(b);
    
// filter

// syntax 
// variable name.filter((value,index,accumalator)=>)

    let c =[10,20,30,40,50,2,45,75,63,7,456,458,2,7,963,30,75,36,83,111,12,2]
    let d=c.filter((x,y,z)=>z>10)
    console.log(d);
    
// reduce
// syntax 
// variablename .reduce((accumalator,currentvalue)=>)
let e =[10,20,30,40,50,2,45,75,63,7,456,458,2,7,963,30,75,36,83,111,12,2]
let f = e.reduce((i,j)=>i+j)
console.log(f);

