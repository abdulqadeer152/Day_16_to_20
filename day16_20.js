"use strict";
// /////// DAY 16
// Question # 46
/// Enhanced Laptop Object
let Laptop = {
    make: "Apple",
    model: "Mcbook Pro",
    year: 2023,
    descript: function () {
        console.log(`This laptop is a ${this.make}, ${this.model}, ${this.year}`);
    }
};
Laptop.descript();
//// Question # 47
// Array of objects
let laptops = [
    { make: "Dell", model: "Xp 123", year: 2019 },
    { make: "HP", model: "HPpw 123", year: 2022 },
    { make: "Mcrop", model: "Core 15", year: 2018 },
];
let [firstlaptop, secondlaptop] = laptops;
console.log('first laptop', firstlaptop);
console.log('Second laptop', secondlaptop);
//// Question # 48
let Price1 = [1000, 1200, 1400];
let Price2 = [1100, 1300, 1500];
let combinePrices = [...Price1, ...Price2].sort((a, b) => a - b);
console.log(combinePrices);
//// Day 17
// Question # 49
function logHobbies(...hobies) {
    hobies.forEach(hobbies => {
        console.log(`i Enjoy ${hobbies}`);
    });
}
logHobbies('coding', 'sleeping', 'eating');
//// Question 50
let myIdealDay = ` My Ideal day involve
1.  Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
console.log(myIdealDay);
//// Question # 51
function calculateArea(lenght, weight) {
    return lenght * weight;
}
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(5, 7));
////// Day 18
// Question # 52
let Smartphone = {
    brand: "Q-mobile",
    model: "Y-53s",
    space: {
        memory: '8 - 128',
        screensize: '9 inch',
        battery: '6 hours'
    }
};
console.log(Smartphone);
////// Question # 53
let developerSkill = {
    languages: ['Typrscript', 'JavaScript', 'Phython'],
    tools: ["Git", "Webpack", "Docker"],
    framework: ["React", "Angular", "Vue"]
};
let { languages, tools, framework } = developerSkill;
console.log(`language ${languages}, tools ${tools}, framework ${framework}`);
//// Question # 54
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
/// Question # 55
let singleNumber = [1, 2, 3, 4, 5];
let doubleNumber = singleNumber.map(number => number * 2);
console.log(doubleNumber);
//// Question # 56
let mixArray = [1, "banana", 2, "cat", true, 6, "van"];
let stringsArray = mixArray.filter(item => typeof item === "string");
console.log(stringsArray);
//// Question # 57
let grades = [68, 89, 96, 75, 46];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
///// Day 20
// Question # 58
// Corrected averageScore function
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(90, 80, 65, 78, 56));
/// Question # 59
// Corrected makeAddress function
function makeAddress(valueToAdd) {
    return function (num) {
        return num + valueToAdd;
    };
}
let addFive = makeAddress(5);
console.log(addFive(10));
/// Question # 60
// This profile sets itself up and can share info about the user
let userProfile = (function () {
    let name = "John";
    let age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
