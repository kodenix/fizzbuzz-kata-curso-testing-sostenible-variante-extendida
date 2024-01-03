import { FizzBuzz } from '../core/fizzBuzz';

describe('FizzBuzz', ()=> {

	test.each([[1, "1"], [2, "2"], [4, "4"]])('convert %i to character representation', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([[6, "Fizz"], [9, "Fizz"]])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([
		[5, "BuzzBuzz"],
		[550, "BuzzBuzzBuzz"], 
		[10, "Buzz"], 
		[20, "Buzz"]
	])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([[15, "FizzBuzzBuzz"], [30, "FizzBuzz"], [60, "FizzBuzz"]])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([
		[3, "FizzFizz"], 
		[33, "FizzFizzFizz"], 
		[63, "FizzFizz"], 
		[93, "FizzFizz"],
		[333, "FizzFizzFizzFizz"],
	])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	
})