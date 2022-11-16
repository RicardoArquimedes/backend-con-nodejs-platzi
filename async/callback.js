function hello(firstName, myCallback) {
    setTimeout(function () {
        console.log("Hola", firstName)
        myCallback();
    }, 2000)
}

function goodbye(firstName, secondCallback) {
    setTimeout(function () {
        console.log("Goodbye", firstName);
        secondCallback();
    }, 1000

    )

}

console.log("Start process")
hello("Richie", function () {
    goodbye("Richie", function () {
        console.log("Finish all process")
    });

});
console.log("Finish Process")

hello("Richie", function(){})
goodbye("Richie", function(){})