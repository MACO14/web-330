import {foo} from '../week-4/food-model.js';

let txtFoodItemEl = ["txtFoodItem"];
document.getElementById("btnSearch").onclick = function () {txtFoodItemEl};

const foods = Find('id', 'name', 'calories');
const result = text.toLowerCase();
    console.log(foods);

const tableData1 = ['Egg,', 'Apple', 'Hamburger', 'Fries', 'Banana', 'Soda'];
   // using for...of
   for (let element of tableData) {
    // displaying the values
    console.log(element);
   }
const tableData2 = ['78', '95', '354', '400', '105', '150'];
   for(let element of tableData2) {
    console.log(element);
   }

class CalorieConverter {
    static data = ['food1', 'food2', 'food3', 'food4', 'food5', 'food6'];
    // static variable defined
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    method_1(food1) {Id='1007', Name='Egg', Calories='78'}
    method_2(food2) {Id='1008', Name='Apple', Calories='95'}
    method_2(food3) {Id='1009', Name='Hamburger', Calories='354'}
    method_2(food4) {Id='1010', Name='Fries', Calories='400'}
    method_2(food5) {Id='1011', Name='Banana', Calories='105'}
    method_2(food6) {Id='1012', Name='Soda', Calories='150'}
}

function Find (find) {
    const food = [{name: "Egg", calories: "78"},{name: "Apple", calories: "95"}, {name: "Hamburger", calories: "354"}, {name: "fries", calories: "400"}, {name: "banana", calories: "105"}, {name: "soda", calories: "150"}];
    const filter_food = food.filter(function(food) {
        return food.name == "Egg, Apple, Hamburger, Fries, Banana, Soda";
    });
    console.log(filter_food);
}

export {Find};

addEventListener("keyup", (event) => {});
onkeyup = (event) => {};

var search = document.getElementById("btnSearch");
document.getElementById('btnSearch').addEventListener("click", function(){} );





