//Hoisting
//var,let,const
// var x=5;
// let y=10;
// const z=15;
//  y = x+1;
// console.log(x/y,z);


// //function
// function click(){
//     console.log(x*y*z);
  
// }

// click();


//If statement
// let name = "anandh";
// let age =1;
// //const gender= "Male";

// if(gender == "Male"){
//     console.log("He is Male");
    
// }
// else{
//     console.log("He is not a Male");
// }

// var name1 = "amir";
// var mark1 = 420;
// var name2 = "partha";
// var mark2 = 452;
// var name3 = "akash";
// var mark3 = 380;
// var name4 = "karthick";
// var mark4 = 460;
// var name5 = "kavin";
// var mark5 = 440;

//array[] 
//object{}

// const person = [{
//     name:"amir",
//     mark:420
// },
// {
//     name:"partha",
//     mark:452
// },
// {
//     name:"akash",
//     mark:380
// },
// {
//     name:"karthick",
//     mark:460
// },
// {
//     name:"kavin",
//     mark:440
// },]
// // a = [1,2,3,4,5,6,7,8]
// // console.log(a[7]);
// for(let i=0;i<=person.length;i++){
//     let names = person[i];
//     if(names.mark>450){
//     console.log(names.name + " He is Topper");
// }
// else{
//     console.log(names.name + " He is Average Student");
// }
    
// }
///operator,fuction,loop,statement,Hoisting,


// let x = 10;
// let y = 13;
// let z = 20;

// if(x%2==0 || y%2==0 && z%2==0){
//     console.log("all the numbers even numbers"); 
// }
// else{
//     console.log("Not a even number");
    
// }

//parameters ternary >==,switch , for of ,in



// function greet(x,y){
//     console.log(x+y);
//     }
// greet(5,10);

// let age = 12;
// console.log(age>=18 ? "is Adult" : "Not an Adult");


//switch case

// switch (age) {
//     case 10:
//         console.log("Not an adult");        
//         break;
//         case 18:
//             console.log("is an adult");        
//         break;
//     default:
//         console.log("Not");  
//         break;
// }


// //for in loop

// let arr = ["blue", "red","green","yellow"]

// let person = {
//     name:"Azar",
//     age:20,
//     gender:"Male",
//     isAlive:true,
//     siblings:{
//         brother:"Anaz",
//         sister:"aysha"
//     }
// }

// //Number,Boolean, Undifined,String,Nan,array,object,function,
// let b;
// console.log(typeof(person.age));



// for(let i=0;i<arr.length;i++){

// }

// for (const key in arr) {
//         const element = arr[key];
//         console.log(element);
        
        
// }


// for (const key of arr) {
//     console.log(key);
    
// }

//MRF,Template Literals
//Map Method
// const numbers = [1,2,3,4,5,6];
// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
//   ];
  
// const maps = numbers.map(item=> console.log(item));
// const mapuser = users.map(x=>console.log(`Name is ${x.name}`));
// //Filter
// const fill = numbers.filter(x =>{
//     console.log(x%2==0);
    
// })
// function names(){

// }
// //arrow function
// //map(x =>{}) 

// //filter
// numbers.filter(x =>{
//     const even = x/2==0;
//     console.log(even);
    
// })


//reduce
//const new_var = numbers.reduce((acc,x) =>acc+x,0) ;console.log(new_var);
//Rest Operators
// const[num1,num2,...nums] = numbers;
// console.log("First Value:" + num1);
// console.log("Second Value:" +num2);
// console.log("Third Value:" +nums);

//Spread Operators
// const new_num = [10,20,30,...numbers];
// console.log(new_num);
// //Slice()
//     const sep = numbers.slice(3)
//     console.log(sep);
    
// //Template Literals
//  function name(params) {
    
//  }
//  const arrow = (()=>{

//  })
//  //anonoums Function
//  const ana = function name() {
    
//  }
  
 //IFFI
//Promises
   
//     const ticket = new Promise ((resolve,reject)=>{
//         let confirmed = true;
//         if(confirmed){
//             resolve(220);
//         }
//         else{
//             reject();
//         }
//     })
//     ticket.then((amount)=>{
//         console.log("Ticked Booked Succesfully You have to Pay" + amount);
        
//     }).catch(()=>{
//         console.log("Failure");
//     })

//     const friend1 = new Promise ((resolve,reject)=>{
//         let status = true;
//         if(status){
//             resolve("I am reached Home: xyz");
//         }
//         else{
//             setTimeout(()=>{
//                 reject("He is Not Reached: xyz");                
//             },5000);
//         }
//     })
//     const friend2 = new Promise ((resolve,reject)=>{
//         let status = true;
//         if(status){
//             setTimeout(()=>{
//                 resolve("I am reached Home: abc");;                
//             },1000);
//         }
//         else{
//             reject("He is Not Reached: abc")
//         }
//     })
//     const friend3 = new Promise ((resolve,reject)=>{
//         let status = false;
//         if(status){
//             setTimeout(()=>{
//                 resolve("I am reached Home: 123");               
//             },10000);
//         }
//         else{
//             reject("He is Not Reached: 123")
//         }
//     })

//     setTimeout(()=>{
//         console.log("Hello");
        
//     },5000);

//     friend3.then(()=>{

//     })
//     Promise.allSettled([friend1,friend2,friend3]).then((message)=>{
//         console.log(message);        
//     }).catch((err)=>{
//         console.log(err);
        
//     })
// //Async/Await
// async function name() {
//     try{
//         states = await friend3
//         console.log("Hello");
//         console.log(states);        
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// name();
//Error Handling
//try,catch
//then,catch
//fetch api????



//HomeWork

// 1. Hoisting Example
console.log("Task is starting...");
var taskName = "Student Performance Tracker";
showWelcomeMessage();
function showWelcomeMessage() {
    console.log(`Welcome to the ${taskName}`);
}

// 2. Student Object
const student1 = {
    name: "John",
    age: 16,
    rollNumber: 101,
    scores: [85, 78, 92]
};

// 3. Function to Calculate Average
function calculateAverage(...scores) { // Rest Operator
    const total = scores.reduce((sum, score) => sum + score, 0); // Reduce
    return total / scores.length;
}

// 4. If Statement
const averageScore = calculateAverage(...student1.scores); // Spread Operator
if (averageScore >= 50) {
    console.log(`${student1.name} has passed with an average score of ${averageScore}`);
} else {
    console.log(`${student1.name} has failed.`);
}

// 5. For Loop to Log Scores
console.log(`Scores of ${student1.name}:`);
for (let i = 0; i < student1.scores.length; i++) {
    console.log(`Test ${i + 1}: ${student1.scores[i]}`);
}

// 6. Array of Students
const students = [
    { name: "John", scores: [85, 78, 92] },
    { name: "Jane", scores: [45, 55, 65] },
    { name: "Alex", scores: [90, 88, 84] }
];

// 7. Switch Case for Grades
function assignGrade(score) {
    switch (true) {
        case score >= 90: return "A";
        case score >= 80: return "B";
        case score >= 70: return "C";
        case score >= 50: return "D";
        default: return "F";
    }
}

// 8. Looping with For In & For Of
for (const student of students) { // For Of
    console.log(`Details of ${student.name}:`);
    for (const key in student) { // For In
        console.log(`${key}: ${student[key]}`);
    }
}

// 9. Map, Filter, and Reduce Methods
const reports = students.map(student => {
    const avg = calculateAverage(...student.scores);
    return {
        ...student,
        average: avg,
        grade: assignGrade(avg)
    };
});
console.log("Reports:", reports);

const passedStudents = reports.filter(student => student.average >= 50);
console.log("Passed Students:", passedStudents);

const classAverage = reports.reduce((total, student) => total + student.average, 0) / reports.length;
console.log(`Class Average: ${classAverage}`);

// 10. Promises and Async/Await
const fetchData = () => new Promise((resolve, reject) => {
    const success = true; // Simulate data fetch
    setTimeout(() => {
        success ? resolve("Data fetched successfully!") : reject("Failed to fetch data.");
    }, 1000);
});

async function processStudentData() {
    try {
        const message = await fetchData();
        console.log(message);
    } catch (error) {
        console.error("Error:", error);
    }
}
processStudentData();