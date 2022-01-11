console.log(Object.keys(users))

console.log(Object.values(users))

console.log(Object.keys(users).length)

const theMostSkilledPerson = (Object.keys(users).sort((a, b) => (users[b]["skills"].length) - (users[a]['skills'].length), 0))

console.log(theMostSkilledPerson)

function count50(obj) {
    let counter = "";
    for (key in obj) {

        if (obj[key].points === 50) {
            counter++;

        }
    }
    return `There are ${counter} users above 50 points`;
}

console.log(count50(users));

function findMERN(obj) {
    let counter = 0;
    let mernUsers = [];
    for (key in obj) {
        if (obj[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
            counter++;
            mernUsers.push(key);
        };
    }
    return `There are ${counter} MERN users, and the names are; ${mernUsers}`;
}

console.log(findMERN(users));

for (const key in users) {
    users[key].name = key;
    users[key].getPersonInfo = function () {
        let statement = `${this.name} is ${this.age} years old.\nHe knows ${this.skills}.`
        return statement
    }
}
console.log(users.Alex.getPersonInfo())