// promise 
// syntax 

// return new Promise((resolve, reject) => {})

function go (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shop =true
            if(shop){
                resolve("going to the shop")
            }
            else{
                reject("iam not going to the shop")
            }
           
        },5000);
    })
}
function buy (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product =false
            if (product){
                resolve("buy the product")
            }
            else{
                reject("iam not but the product")
            }
        },2000);
    })
}
function change (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const get = true
            if(get){
                resolve("get the change back")
            }
            else{
                reject("forgot to get the change back")
            }
        },2000);
    })
}
function back (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const home = true
            if(home){
                resolve("back to the home")
            }
            else {
                reject("back to the park")
            }
        },5000);
    })
}
// go()
// .catch(val => {console.log(val); return buy()})
// .then(val => {console.log(val); return change()})
// .catch(val => {console.log(val); return back()})
// .then(val => {console.log(val)})


async function js() {
    try {
        const a = await go();
    console.log(a);
    const b = await buy();
    console.log(b);
    const c =await change();
    console.log(c);
    const d = await back();
    console.log(d);
    } catch (er) {
        console.log(er);
    }
}
js();