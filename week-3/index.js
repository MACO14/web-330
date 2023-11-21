export * from "./appetizer.js";
export * from "./beverage.js";
export * from "./dessert.js";
export * from "./main-course.js";
export * from "./bill.js";

const mainCoursesEl = document.getElementById("main-courses");
const mainCourses = mainCoursesEl.getElementsByTagName("input");

const appetizersEl = document.getElementById("appetizers");
const appetizers = appetizersEl.getElementById("input");

const beveragesEl = document.getElementById("beverages");
const beverages = beveragesEl.getElementById("input");

const dessertsEl = document.getElementById("desserts");
const desserts = dessertsEl.getElementById("input");

for (let mainCourse of mainCourses)
{
    if(mainCourse.checked)
    {
        bill.addMainCourse(new mainCourse(mainCourse.name, mainCourse.value));
    }
}

for (let appetizers of appetizers)
{
    if(appetizers.checked)
    {
        bill.addAppetizers(new appetizers(appetizers.name, appetizers.value));
    }
}

for (let beverages of beverages)
{
    if(beverages.checked)
    {
        bill.addBeverages(new beverages(beverages.name, beverages.value));
    }
}

for (let desserts of desserts)
{
    if(desserts.checked)
    {
        bill.addDesserts(new desserts(desserts.name, desserts.value));
    }
}
