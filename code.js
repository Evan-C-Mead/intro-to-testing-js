// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    // if (input === undefined) {
    //     return "Hello, World!";
    // } else {
    //     return "Hello, " + input + "!";
    // }
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}
