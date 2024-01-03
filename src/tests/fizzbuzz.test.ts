import { FizzBuzz } from '../core/fizzBuzz';

describe('FizzBuzz', ()=> {

	test.each([[1, "1"], [2, "2"], [4, "4"]])('convert %i to character representation', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([[3, "Fizz"], [6, "Fizz"], [9, "Fizz"]])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test('convert 5 to Buzz', () => {
		expect(new FizzBuzz().convert(5)).toBe("Buzz");
	})

	test('convert 10 to Buzz', () => {
		expect(new FizzBuzz().convert(10)).toBe("Buzz");
	})

	test('convert 20 to Buzz', () => {
		expect(new FizzBuzz().convert(20)).toBe("Buzz");
	})


})