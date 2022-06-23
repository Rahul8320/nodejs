console.log("Taking input from args!");

function add(a, b) {
    return (a + b);
}

// takes the input from terminal as args
var args = process.argv.slice(2);

console.log(args);

console.log("add : ", add(parseInt(args[0]),parseInt(args[1])));