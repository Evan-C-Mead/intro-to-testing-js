// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined || input === null) {
        return "Hello, World!";
    } else if (typeof input == 'boolean') {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    return typeof input == "boolean" || input == 2;
}