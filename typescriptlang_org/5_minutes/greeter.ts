// typescript works with conventional class-based OO which gets compiled
// into JS's prototype-based OO
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// interface seems to be approximately equivalent to a Swift protocol
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = { firstName: "Jane", lastName: "User" };
const user2 = [0, 1, 2];

document.body.innerHTML = greeter(user);
// document.body.innterHTML = greeter(user2); // will cause compiler error
