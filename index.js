function receivesAFunction(callback1) {
    callback1();
}

function callback2() {
    console.log("Hello");
}

receivesAFunction(callback2);





function returnsANamedFunction() {
    function returnFunction1() {
        console.log("Hello");
    }
    return returnFunction1;
}

const newFunction = returnsANamedFunction();

newFunction();





function returnsAnAnonymousFunction() {
    
    return function() {
        console.log("Anonymous");
    };
}

const anonymous1 = returnsAnAnonymousFunction();

anonymous1();