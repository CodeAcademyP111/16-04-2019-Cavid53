// var n = Number(prompt("Reqem girin"));
// var temp = n;
// var reverse = -1;

// while (temp > 0) {
//     if (reverse == -1) {
//         reverse = temp % 10;
//     } else {
//         reverse = reverse * 10 + temp % 10;
//     }

//     temp = (temp - temp % 10) / 10;
// }

// if (n == reverse) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// Array

// var ages = [19, 28, 25, 29, 23, 25, 24];

// for (var i = 0; i < 7; i++) {
//     console.log(ages[i]);
// }


// var datas = [
//     [1.8, 60],
//     [1.67, 80],
//     [1.63, 55]
// ];

// console.log(datas[2][2]);

// Object
var person = {
    name: "Musviq",
    surname: "Agayev",
    age: 28,
    isMarried: true,
    examResult: [80, 75, 81],
    languages: ["az", "ru", "tr"]
};


var persons = [{
        name: "Musviq",
        surname: "Agayev",
        age: 28,
        isMarried: true,
        examResult: [80, 75, 81],
        languages: ["az", "ru", "tr"]
    },
    {
        name: "Cavid",
        surname: "Bashirov",
        age: 25,
        isMarried: false,
        examResult: [79, 71, 84],
        languages: ["az", "en", "tr"]
    }
];

// for (var i = 0; i < 2; i++) {
//     console.log(persons[i].name + " " + persons[i].surname);
// }

// Function

function calcProductChangeRate(productPrice, changeRate) {
    if (productPrice == undefined || changeRate == undefined) {
        return -1;
    }

    if (productPrice < 0) {
        return -1;
    }

    var price = 0;

    if (changeRate < 0) {
        price = productPrice - (productPrice * (changeRate * -1) / 100)
    } else {
        price = productPrice + (productPrice * changeRate / 100)
    }


    return price;
}


console.log(calcProductChangeRate()); // false
console.log(calcProductChangeRate(-79, 5)); // false
console.log(calcProductChangeRate(79, 10));
console.log(calcProductChangeRate(79, -10));