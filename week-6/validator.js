/*
================================================
; Title: validator.js
; Author: Mackenzie Lubben-Ortiz
; Date: 23 November 2023
; Description: validator
;================================================
*/

import "required-field.js";
import "float-field.js";
import "float-min-field";
import "float-max-field";

class validators { [] };
class messages { [] };
    constructor(name, field) 
        this.name = name;
        this.field = field;

function addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
}

function addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
}

function addFloatMaxField(max) {
    this.validators.push(new addFloatMaxField(this.name, this.field, max));
}

function validate() {
   const validateObjects = ['RequiredField', 'FloatField', 'FloatMinField', 'FloatMaxField', ''];

   for (const object of validateObjects) return true;
    {
       if (item.length === 0) false;
   }

    


    }
