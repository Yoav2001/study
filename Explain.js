//HTML מחזירה אובייקט
document.getElementById('demo');
//שאני שם   html  ומשנה את הערך בו למשפט 
document.getElementById('demo').innerHTML=8;

//Create a array
var cars = ["Saab","Volvo","BMW"];
// craete object
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};


//String+num 
var x = 16 + 4 + "Volvo";
document.getElementById("demo").innerHTML = x; 
//פלט
//20VOLVO


//Js Object
//There are two different ways to access an object property.
//You can use person.property or person["property"].

// Create an object:
var car = {type:"Fiat", model:"500", color:"white"};
// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;




// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
// Display some data from the object:
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";

//or person["property"].
ddocument.getElementById("demo").innerHTML =
person["firstName"] + " " + person["lastName"];







//An object method is a function definition, stored as a property value.
// Create an object:
//This is ecample tp a function proprety as a method 
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

//This is ecample tp a function proprety as a proprty 
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  //stored as a property value.
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.fullName;


// a simple fun-dont in a object
  function myFunction(name,job) {
    document.getElementById("demo").innerHTML = "Welcome " + name + ", the " + job + ".";
  }
  //how to use the fun
<button onclick="myFunction('yoav Potter','Wizard')">Try it</button>


//This example calls a function which performs a calculation and returns the result:
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}



//  דוגמא לפעולה 
function toCelsius(f) {
    return (5/9) * (f-32);
  }

  //בגלל שלא רשום ליד הקריאה לפעולה סוגריםtoCelsius()  היא לא תחשב והפלט יהיה הפעולה עצמה 
  document.getElementById("demo").innerHTML = toCelsius;
//פלט-function toCelsius(f) { return (5/9) * (f-32); }

//פלט התאריך  המלא  -Tue Mar 16 2021 18:40:15 GMT+0200 (Israel Standard Time)
//ישנה את  שם הכפתור לתאריך
<html>
<body>

<button onclick="this.innerHTML=Date()">The time is?</button>

<p id="demo"></p>


</body>


</html>
//דוגמא נוספת רק עם פעולה
/*
<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
 innerHTML = Date();
}
</script>*/


//דרך לשים גרש וגרשים

var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\"  from the north.";

//x.valueOf() 
var x = 123;
x.valueOf() ;//יחזיר123
"f4545".valueOf();//יחזיר f1234
true.valueOf();//יחזיר true


//10 ספרות אחרי הנקודה
var x = 9.123456789;
x.toExponential(5);//פלט 9.12346e+0

//The toFixed() method rounds a number to a given number of digits.
x.toFixed(6);//מחזיר יורת טוב כמה ספרות אחרי הנקודה

//if
if (new Date().getHours() < 19) {
    document.getElementById("demo").innerHTML = "Good day!";
  }

  //if and elseIf
  function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting;
  }

  //switch
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  document.getElementById("demo").innerHTML = "Today is " + day;

  //lop
  var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;



//קטע קוד שנוי HTML עם JS 
<html>
<body>

<p>Loop from 1 to 6, to make HTML headings.</p>

<div id="demo"></div>

</body>
</html>
var x ="", i;
for (i=1; i<=6; i++) {
  x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
}
document.getElementById("demo").innerHTML = x;
 
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_fornext_header  פלט
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
  }


//-------------------------------------------------------------

  //ES6
  var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("demo").innerHTML = x;
//--------------------------------------------------------------------
var  x = 10;
// Here x is 10
{  
  const x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("demo").innerHTML = x;

//Function on Es6--------------------
// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 //const 'name Fun' = (get) => _______
 const x = (x, y) => x * y;

 //דוגמא לפעולה 
 let fname ="yoav";
 let lname="elkana";
 const fullName =(x,y)=>x+" "+y;
 document.getElementById("demo").innerHTML = fullName(fname, lname);
 //פלט yoav elkana
 const x = (x, y) => { return x * y };
 const y = (x, y) => x * y ;
 document.getElementById("demo1").innerHTML = x(5, 5);
 document.getElementById("demo2").innerHTML = y(5, 5);
 //שני הפעולות יחזירו 25


 //for-Looping over an Array

 let cars = ["BMW", "Volvo", "Mini"];
 let text = "";
 
 for (let x of cars) {
   text += x + "<br>";
 }
 document.getElementById("demo").innerHTML = text;
//פלט -שמות המכניות בשורות נפרדות

//Looping over a String
let language = "JavaScript";
let text = "";
//בלולאה יעבור אות אות
for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;
//פלט המילה javascript  בכל שורה אות אחרת 

//JavaScript Classes on es6
/*
class ClassName {
    constructor() { ... }
  }
  */
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  myCar = new Car("Ford", 2014);
  //השורה מתחת תחזיר Ford 2014
  document.getElementById("demo").innerHTML =
  myCar.name + " " + myCar.year;//also use -my car ['name']
