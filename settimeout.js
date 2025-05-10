// settime out
// assynchronous

function a (){
    setTimeout(() => {
        console.log("hello tuesday");
        
    },5000);
}
function b() {
    setTimeout(() => {
        console.log("hello monday");
        
    },2500);
}
function c (){
    setTimeout(() => {
        console.log("hello sunday");
        
    },500);
}
a();
b();
c();