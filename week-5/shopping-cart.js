/*
================================================
; Title: shopping-cart.js
; Author: Mackenzie Lubben-Ortiz
; Date: 18 November 2023
; Description: Demonstrates how to add items into a cart
;================================================
*/

import { Product } from './product.js';

export class ShoppingCart {
    constructor() {
        this.products = []
    }

    add (products) {
        this.products.push(product)
    }

    count() {
        return this.product.length
    }
    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product
        }
    }
}