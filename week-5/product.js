/*
================================================
; Title: shopping-cart.js
; Author: Mackenzie Lubben-Ortiz
; Date: 18 November 2023
; Description: Demonstrates how to add items into a cart
;================================================
*/


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}