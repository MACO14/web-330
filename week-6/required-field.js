/*
================================================
; Title: required-field.js
; Author: Mackenzie Lubben-Ortiz
; Date: 23 November 2023
; Description: required field
;================================================
*/


class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
}

function validate() {
    return Boolean(this.field);
}

function getMessage() {
    return "<name> is a required field."
}

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
}