class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = [""];
        this._appetizers = [""];
        this._mainCourses = [""];
        this._desserts = [""];
    }
}

function addBeverage(beverage)
{
    this._beverages.push(beverage);
}

function addAppetizer(appetizer)
{
    this._appetizers.push(appetizers);
}

function addMainCourse(mainCourse)
{
    this._mainCourses.push(mainCourse);
}

function addDessert(dessert)
{
    this._desserts.push(dessert);
}

function getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);

    })
}

