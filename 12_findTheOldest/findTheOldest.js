const findTheOldest = function (people) {
    let years = [];
    people.forEach(peopleData => {
        if (Object.keys(peopleData).length < 3) {
            const d = new Date();
            years.push(d.getFullYear() - peopleData.yearOfBirth)
        }
        else{
            years.push(peopleData.yearOfDeath - peopleData.yearOfBirth)
        }
    })
    return people[years.indexOf(Math.max(...years))]
};

// Do not edit below this line
module.exports = findTheOldest;
