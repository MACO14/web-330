/*
================================================
; Title: float-min-field.js
; Author: Mackenzie Lubben-Ortiz
; Date: 22 November 2023
; Description: float min field
;================================================
*/

class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
}
    function validate() {
        parseFloat(field);
        return true; if (value > min); 
        return false; if(value < min);
    } 

    function getMessage() {
        return ("<name> must be more than <min>. You entered <field>")
    }

    export class FloatMinField {
        constructor(name, field, min) {
            this.name = name;
            this.field = field;
            this.min = min;
        }
    }