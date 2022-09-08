let name ='Sam'; //string literal
let age = 40; 
let isApproved = false; 
let firstName=undefined; 
let selectedColor = null; 

//let age = 'Welcome Sam i Am writing Javascript';
//let sam = 'I pray i succeed till i master it Amen';
//let interstRate = 30.4;
//console.log(interstRate);
//console.log(age + '' + sam);

// How to Declare an Object
let car={
    tire:'Black',
    door: 'Blackish',
    glass:1
};
//Changing the colors of the Door
//There are two ways to do this 
// The dot notation e.g
car.door='green';
// second way is Bracket Notation
car['glass']=6;
console.log(car);
//console.log(car.glass);

//Array
let selectedCars = ['GOlf 4', 'Mercedez Benz', 'Murano 4.3'];
selectedCars[3]='G-Wagon';
console.log(selectedCars);
//Pointing at a particular address
//console.log(selectedCars[2]);

//Declaring a Function
//function greet(){
  //   console.log('Hello good evening');
//}
// greet();

// Performing a task
function greet(name,lastName){
    console.log('Hello' + ' ' + name + ' ' + lastName);
}
greet('Samuel', 'Isah');
// calculating a Value
function addition(number){
    return number * number;
   
}
console.log('The sum of the number is ='+' '+ addition(6));
//let number= addition(7);
//console.log('The sum of the number is ='+' '+ number);
a=5;
b=10;
c='I am a';
a=a+1;
b=b+5;
c= c + 'String!';
console.log(a);
console.log(b);
console.log(c);
//escaping key
//This will ensure the code to see all as string characters properly
escapeKey='I am \'a very\'enthusiast person\' when it\'has to do with\'learning';
// To get the length of the string we have 
//escapeKey='I am \'a very\'enthusiast person\' when it\'has to do with\'learning'.length;
console.log(escapeKey); 
testing=''; // To identify a string using their index number
gettingName='Amalgation';
naming=gettingName[6];
console.log('The 7th string in the spelling of Amalgamation is = '+ ' '+ naming);
//To get the last string using it index number
gettingName=gettingName[gettingName.length-1];
console.log('The last string in the spelling of Amalgation is ='+' '+gettingName);
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    result='';
    result += 'That ' + myAdjective + ' '+'Mr.'+ myNoun +' '+ 'is'+' ' + myVerb + ' '+ myAdverb;
    return result;
}
console.log(wordBlanks('John','Fat','Running','Faster'));
console.log(wordBlanks('Peter','Slim','Snoring','Badly'));
// Function using If Statement for Boolean

function trueorFalse(isItTrue){
    if(isItTrue){
        return 'Yes it is True';
    }
        return 'No It is not true';
    }
    console.log(trueorFalse(true));
    //Testinng for Values
     function testValue(val){
         if (val==10){
             return 'Yes it is = 10';
         }
         return 'Value is not = 10';
     }
     console.log(testValue(20));
     
     //Function continues (IF....ELSE)
     
     function testVal(val){
        let result="" ;
        if (val <= 5){
            result="Value is less than or equal to 5";
        }else{
            result="Value is bigger than 5";
        }
        return result;
       
     }
    // testVal(7);
     console.log(testVal(6));
     //Function continues (IF....IF...ELSE)
     
     function testVal(val){
        let result="" ;
        if (val > 5){
            return "Value is > than 5";
        }else if (val<5){
            return "Value is < than 5";
        }
      return  "Value is = to 5";
       
     }
     console.log(testVal(6));
     

     //Switch Case Function
     function swithCase(val){
         result="";
         switch (val){
             case 1:
                 result="Alpha";
                 break;
                 case 2:
                     result="Beta";
                     break;
                     case 3:
                         result ="Gamma";
                         break;
                         case 4:
                             result ="Delta";
                             break;
                             default :          //Like the ELSE statement in switch statement
                             result= "Undefined Variable";
                             break;

         }
         return result;
     }
     console.log(swithCase(4));
//Multiple Case statement
function multipleCase(val){
    result="";
    switch(val){
        case 1:
        case 2:
        case 3:
            result="Low Temperature";
            break;
            case 4:
             case 5:
            case 6:
                result="High Temperature";
             break;
                case 7:
                case 8:
                case 9:
                    result="Very High Temperature";
                    break;
                    default:
                        result="Emergency Case";

    }
    return result;
}
console.log(multipleCase(10));

//returning Boolean Function
function isLess(a,b){
    if (a<b){
        return true;
    }else{
        return false;
    }
    }
    //isLess(2,3);
    console.log(isLess(3,2));

    //Alternatively we can do the returning Boolean Function this way
function isLess(a,b){
    return (a<b);
    }
    //isLess(2,3);
    console.log(isLess(2,6));

    //Building JavaScript Object
    myCar={ 
        "model":"Lexuz 330",
        "Color":"Green",
        "Tires": 4,
        "doors":4,
        "engine":["Everything"]
    };
    console.log(myCar.engine);

    //Accessing Object Properties with Bracket Notation
    myHouse={
        "gate type":"White",
        "rooms type":"4 Bedroom Flat",
        "Kitchen number":7,
        "pools number":"3 Swimming Pools"
    };
gateType = myHouse["gate type"];
kitchenType=myHouse["Kitchen number"];
poolType=myHouse["pools number"]
console.log(gateType);
console.log(kitchenType);
console.log(poolType);
//Updating an Object property
myCar={ 
    "model":"Lexuz 330",
    "Color":"Green",
    "Tires": 4,
    "doors":4,
    "engine":["Everything"]
};
myCar.model="Camry  LX"; //Updating here the model of the car
myCar.prize="5000 Dollars"; //adding properties to Objects
delete myCar.doors; //Deleting properties from object
console.log(myCar.model);
console.log(myCar.prize);
console.log(myCar.doors);

// While Loop
myWhileLoopArray=[];
i=0;
while (i<7){
    myWhileLoopArray.push(i);
    i++;
}
console.log(myWhileLoopArray);

//For Loop
MyForLoopArray=[];
for (j=0; j<5;j++){
    MyForLoopArray.push(j);
    }
    console.log(MyForLoopArray);

    //Incrementing ForLoop with ODD and even numbers
MyForLoopOddArray=[];
for(k=0; k<10; k+=2){
    MyForLoopOddArray.push(k);
}
console.log(MyForLoopOddArray);
///Backward for Loop
backwardForLoop=[];
for(i=10; i>0; i-=2){
    backwardForLoop.push(i);
}
console.log(backwardForLoop);
// DO while Loop
myDoLoop=[]
i=10
do{
    myDoLoop.push(i);
    ++i;
}while (i<5)
console.log(i, myDoLoop);
// Generating Random fractional number
function myFunction() {
    return Math.random();
}
console.log(myFunction());
// Generating random whole number
//randomNumber= Math.floor(Math.random()*20);
    function myFunction(){
        return Math.floor(Math.random()*100);

    }
    console.log(myFunction());

    // COnverting String to Integer
    function convertToInterger(string) {
        return parseInt(string);
    } 
    //convertToInterger("56");
    console.log(convertToInterger("56"));

    // Cnverting binary number to Integer 
    function convertBinaryToInterger(string) {
        return parseInt(string,2);
    } 
    //convertBinaryToInterger("101011");
    console.log(convertBinaryToInterger("1010"));

    // Ternary Operation
    function ternaryOperation(a,b){
        return a===b?true:false;
    }
    console.log(ternaryOperation(2,2));

    // Mutating a CONSTANT Array
    const s=[2,4,6];
    function mutatingFunction(){
        // Updating the Array
        s[0]=6;
        s[1]=4;
        s[2]=2;
    }
    mutatingFunction();
    console.log(s);
// Using return function to return date
 myVar = () => new Date();
console.log(myVar());
//Write Arrow Function with Parameter as well as concatenating array
concatFunction=(arr1, arr2)=>arr1.concat(arr2);
console.log(concatFunction([2,3,4],[5,6,7]));

//Using Spread function to spread the content of Array 1 to Array 2
const arr1 = ['JAN', 'FEB','MAR','APR','MAY'];
var arr2;
(function(){
    arr2=[...arr1];
})();
console.log(arr2);


// Creating Template Literal
const person={
    name:"Samuel Isah",
    age:24,
};
const greeting=`Hello, my name is ${person.name}! and i am ${person.age} Years Old`;
console.log(greeting);

// Writing Concise Object Literal Declarations Using Simple Fields 
const createPerson=(name, age,gender)=>{
    return{
        name:name,
        age:age,
        gender:gender
    };
};
console.log(createPerson("Samuel Isah",23,"Male"));
//Alternative we can rewrite the above function as
const createPersons=(name, age,gender)=>({name, age,gender});
console.log(createPersons("Mike Muddock",56,"Male"));


//Writing Constructors
class spaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet=targetPlanet;
    }
}
var zeus= new spaceShuttle("Uranus");
console.log(zeus.targetPlanet);

// Importing and Exporting File
//import {capitalizeString} from "./string_function";
//const cap = capitalizeString("hello!");
//console.log(cap);


//Using Prompt
var ans="Vatican"
var x = prompt("Where does the Pope live?");
if (x === ans) {
alert("Correct!");
}