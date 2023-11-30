/*
================================================
; Title: float-max-field.js
; Author: Mackenzie Lubben-Ortiz
; Date: 22 November 2023
; Description: float max field
;================================================
*/

class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
}

function validate() {
    parseFloat(field);
    return true; if (value > max); 
    return false; if(value < max);
} 
function getMessage() {
    return "<name> must be less than <max>. You entered <field>"
}

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
}