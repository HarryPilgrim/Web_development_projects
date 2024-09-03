//var generateName = require('sillyname');     //commonjs


import generateName from "sillyname";         //ECMA script ESM
var sillyName = generateName();

//console.log(`my name is ${sillyName}.`)



import {randomSuperhero} from "superheroes";
var superHeroName = randomSuperhero();

console.log(`my name is ${superHeroName}.`)