// function getsum(n){
//     let sum = 0;
//     for(let i = 0; i< n; i++){
//         sum += i* (i+1);
//     }
//     return sum
// }

// let res = getsum(5);
// console.log(res);

// function getsumdigit(n){
//     return n
//     .toString()
//     .split("")
//     .reduce((acc,el) => acc + +el, 0);
// }

// function getsumdigits(arr){
//     return arr.map((el) => getsumdigit(el));
// }
// let arr = [2444,5667,7576,8658,765454]
// let res = getsumdigits(arr);
// console.log(res);

// let vowels = "oeaiu";
// let unvowels = "";

// for(let i = 97; i < 122; i++){
//     unvowels += String.fromCharCode(i);
//     !vowels.includes(el) && (unvowels +=el);
// }
// console.log(unvowels);

// function getdif(str){
//   let arr = str.split("");
//   return arr.reduce((acc,el) => {
//     if (vowels.includes(el)){
//         acc--;
//     }else if(unvowels.includes(el)){
//         acc++;
//     }
//     return acc
//   },0)
// }

// const str = "MEn kelajakda kuchli dasturchi bo'laman";
// let res = getdif(str);
// console.log(res);
 
// 1 exam exercises

// function getSum(n){
//     let sum = 0;
//     for(let i = 1; i < n; i++){
//         sum += i *(i+2)*(i+4)
//     }
//     return sum
// }

// let res = getSum(3)
// console.log(res);

// 2 exam exercises

// function getHighestNumberOfDigits(arr){
//    let arr = [1589, 31851, 512, 180975, 78];
//    let max = arr[0];
//    for( let el of arr){
//     if(el > max){
//         max = el;
//     }
//    }
// }

// let res = getHighestNumberOfDigits(arr)
// console.log(max);

// 3 exam exercises

// function getStringArr(arr){
//     let sum = {}
//     let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}]

//     for(el of arr){
//         if(el == String){
//             sum += el;
//         }
//     }

// }


// 4 exam exercises

// function getPunctuationNumber(str) {
//   const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (punctuationSigns.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// let str = "Hello! How are you? I'm doing great. What's new?";
// console.log(getPunctuationNumber(str)); 

// 5 exam exercise


// function switchLetters(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }

//   return result;
// }

// let str = "Abdulaziz Programmer";
// console.log(switchLetters(str)); 

// exam 6

// function changeObjToArr(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// let obj = {a: 1, b: 2, c: 3};
// console.log(changeObjToArr(obj)); 

// exam 7

// function separateStudents(students) {
//   let result = {
//     grant: [],
//     contract: []
//   };

//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];

//     if (student.isGrant) {
//       result.grant.push(student.name);
//     } else {
//       result.contract.push(student.name);
//     }
//   }

//   return result;
// }

// let students = [
//   {name: "Jurabek", isGrant: false},
//   {name: "Elbek", isGrant: true},
//   {name: "Shamshod", isGrant: false},
//   {name: "Kamola", isGrant: false},
//   {name: "Gulnoza", isGrant: true},
//   {name: "Savlatbek", isGrant: false},
// ];
// console.log(separateStudents(students));

// exam 8

// function getTotalPages(books) {
//   let totalPages = 0;

//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];

//     if (book.isReadFinished) {
//       totalPages += book.pages;
//     }
//   }

//   return totalPages;
// }

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];

// console.log(getTotalPages(books)); 

// exam 9


// function changeObjToArr(obj) {
//   return Object.entries(obj).map(([key, value]) => key);
// }

// let obj = {a: 1, b: 2, c: 3};
// console.log(changeObjToArr(obj)); 

// exam 10

// function Student(firstName, lastName, university, course, totalYears, isGrant) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.university = university;
//   this.course = course;
//   this.totalYears = totalYears;
//   this.isGrant = isGrant;
// }

// Student.prototype.getInfo = function() {
//   let grantType = this.isGrant ? "grant asosida" : "kontrakt asosida";
//   let graduationYear = this.totalYears + 1;

//   return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantType} o'qiydi. ${graduationYear} yildan keyin universitetdan qutuladi.`;
// };

// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
// console.log(student.getInfo()); 


// exam 11 5.10

// function getOddDividersSum(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         if(n % i == 0 && i % 2 ==1){
//             sum += i;
//         }else{
//             sum =0;
//         }
//         return sum
//     }

// }
// console.log(getOddDividersSum(30));

// let n = 30;


// exam 12

// function search(arr, str) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const name = arr[i];

//     if (name.toLowerCase().includes(str.toLowerCase())) {
//       result.push(name);
//     }
//   }

//   return result;
// }

// let arr = ["Abdulaziz", "Shahobiddin", "Shohrux", "Shukurjon", "Azamat", "Rahmatulla"];
// let str = "az";
// console.log(search(arr, str));

// exam 3

// function getDividersSum(arr, n) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % n === 0) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// console.log(getDividersSum(arr, n));


// exam 4
// function checkSentence(str) {
//   if (str[0] === str[0].toUpperCase() && str[str.length - 1] === '.') {
//     return true;
//   } else {
//     return false;
//   }
// }

// let str = "Abdulaziz programmer is full-stack developer.";
// console.log(checkSentence(str));

// exam 5

// function getNumberOfCases(str) {
//   let result = {
//     upperCases: 0,
//     lowerCases: 0
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       result.upperCases++;
//     } else if (str[i] === str[i].toLowerCase()) {
//       result.lowerCases++;
//     }
//   }

//   return result;
// }

// let str = "Abdulaziz Programmer";
// console.log(getNumberOfCases(str));

// exam 6

// function changeObjToArr(obj) {
//     let res = []
//   return Object.entries(obj).map(([key, value]) => res += key + value);
// }

// let obj = {a: 1, b: 2, c: 3};
// console.log(changeObjToArr(obj)); 

// exam 7



// function getTotalPrice(products, ids) {
//   return products
//     .filter((el) => ids.includes(el.id))
//     .reduce((acc, el) => acc + el.price, 0);
// }

// const ids = [4,6,9];

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// let res = getTotalPrice(products, ids);

// console.log(res);



// exam 8


// function getTotalPrice(products, ids) {
//   return products
//     .filter((el) => ids.includes(el.id))
//     .reduce((acc, el) => acc + el.name, []);
// }

// const ids = [4,6,9];

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// let res = getTotalPrice(products, ids);

// console.log(res);


// exam 9
//  function count(str,char){
//     let sum =0;
//     for(let i=0; i< str.length; i++){
//         if(str[i].to.LowerCase== char.to.LowerCase){
//             sum++
//         }
//         return sum
//     }
//  }

// let str = "Abdulaziz Programmer"
// let char = "a"
// console.log(count(str,char));

// exam 10

// let p1 = new Product("Iphone 15", "Apple", 1500, 20);
// let p2 = new Product("S22", "Samsung", 1200);

// let res = `"Apple kompaniyasi tomonidan ishlab chiqarilgan ${P1} ning asl narxi 1500$. Aksiyadagi narxi esa 1200$."
// "Samsung kompaniyasi tomonidan ishlab chiqarilgan ${P2} ning asl narxi 1200$. Aksiya mavjud emas!"
// `
