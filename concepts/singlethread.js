console.log("Hello World!");

let i = 0;

setInterval(function(){
    console.log(i);
    console.log("Still Active")
    
    i++;
    if (i === 5){
        console.log("error here");
        var a = 3 + z;
    }
}, 1000);

console.log("second instruction");