let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

// Numplanet returns 8
// yearNeptuneDiscovered returns 1846


let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanet, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?

  // returns yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659


  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?

  // returns 'Your name is undefined and you like green'


  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

// Maya
// Marisa
//Chi


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?
  console.log(whiskers); // ?
  console.log(aFewOfMyFavoriteThings); // ?

//['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']
//0: "Bright copper kettles"
//1: "warm woolen mittens"
//2: "Brown paper packages tied up with strings"
//length: 3


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

//(3) [10, 30, 20]
//0: 10
//1: 30
//2: 20
//length: 3

var obj = {
    numbers: {a: 1,b: 2}
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  const {numbers: {a,b}} = objNumber; 

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

let both = [arr[1],temp[2]];
[temp[2],arr[1]] = both;

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']) 
const raceResults = ([first,second,third, ...rest]) => ([first,second,third,rest]);
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/