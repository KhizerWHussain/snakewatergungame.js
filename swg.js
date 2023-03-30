
const user = (prompt("Enter Any from these S, W, and G"));
console.log("Note: S = Snake, W = Water and G = Gun");

const computerInput = Math.floor(Math.random() * 3);
const cpu = ["S", "W", "G"][computerInput];

const match = (cpu, user) => {
    if (cpu === user){
        return "Tied";
    }
    else if (cpu === "S" && user === "W"){
        return "CPU Wins";
    }
    else if (cpu === "S" && user === "G"){
        return "You Wins";
    }
    else if (cpu === "G" && user === "W"){
        return "You Wins";
    }
    else if (cpu === "G" && user === "S"){
        return "CPU Wins";
    }
    else if (cpu === "W" && user === "S"){
        return "CPU Wins";
    }
    else if (cpu === "W" && user === "G"){
        return "CPU Wins";
    }
    else {
        return "Invalid Input";
    }
}
let result = match(cpu, user);
console.log(`CPU Input ${cpu} and Your Input ${user}`);
console.log(result);
