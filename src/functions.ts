import { NumberData } from "./NumberData.js"

export function add(x: number, y:number): NumberData {
  const calc = x + y
  const data = new NumberData(x, y, calc)
  return data
}

export function subtract(x: number, y:number): NumberData {
  const calc = x - y
  const data = new NumberData(x, y, calc)
  return data
}

export function multiply(x: number, y:number): NumberData {
  const calc = x * y
  const data = new NumberData(x, y, calc)
  return data
}