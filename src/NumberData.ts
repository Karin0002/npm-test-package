export class NumberData {
  number1: number
  number2: number
  calculatedNumber: number

  constructor (number1: number, number2: number, calculatedNumber:number) {
    this.number1 = number1
    this.number2 = number2
    this.calculatedNumber = calculatedNumber
  }

  addOneToNumber1 () {
    this.number1 = this.number1 + 1
  }

  addOneToNumber2 () {
    this.number2 = this.number2 + 1
  }

  addOneToCalculatedNumber () {
    this.calculatedNumber = this.calculatedNumber + 1
  }
}