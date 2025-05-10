//callback 

function walk (callback){
    setTimeout(() => {
        console.log("walk the dog");
        callback()
    }, 5000);
}
function clean (callback){
    setTimeout(() => {
        console.log("clean the car");
        callback()
    },2500);
}
// walk(clean);
function trash (callback){
    setTimeout(() => {
        console.log("put the trash out");
        callback()
    }, 500);
}
function work (){
    setTimeout(() => {
        console.log("work done");
        
    }, 3000);
}
walk(()=>{
    clean(()=>{
        trash(()=>{
            work(()=>{})
        })
    })
})
