/*
================================================
; Title: float-field.js
; Author: Mackenzie Lubben-Ortiz
; Date: 22 November 2023
; Description: float field
;================================================
*/

class FloatField {
    constructor(name, field) {
        this.name = name; 
        this.field = field; 
    }
}

function validate (value) {
    if (isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

function getMessage() {
    return "<name> must be a float value. You entered <field>"
}

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
}

    

