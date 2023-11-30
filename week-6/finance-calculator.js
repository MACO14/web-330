/*
================================================
; Title: finance-calculator.js
; Author: Mackenzie Lubben-Ortiz
; Date: 22 November 2023
; Description: finance calculator
;================================================
*/

class FinanceCalculator {
     static Months_In_Year = 12;
     
}


class calculateFutureValue {
        constructor(monthlyPayment, rate, years) {
            this.monthlyPayment = monthlyPayment;
            this.rate = rate;
            this.years = years;   
        }
       
        static equals (monthlyPayment, rate, years) {
            return monthlyPayment * rate * years;
        }
}
        let month = years * Months_In_Year
        let interestRate = 1 + rate/100
        let presentValue = monthlyPayment * month
        let futureValue= presentValue * (Math.pow(interestRate, months)).toFixed()
        return futureValue 

        class convertToCurrency {
            constructor(field) {
                this.field = field;
            }

            static (field)
        }

        let currencyFormatter = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);

        export class convertToCurrency {
            constructor(field) {
                this.field = field;
            }

            static (field)
        }

    


   