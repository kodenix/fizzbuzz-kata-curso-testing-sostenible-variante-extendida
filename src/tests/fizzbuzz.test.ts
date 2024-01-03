import { FizzBuzz } from '../core/fizzBuzz';

describe('FizzBuzz', ()=> {

	test.each([[1, "1"], [2, "2"], [4, "4"]])('convert %i to character representation', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([[3, "Fizz"], [6, "Fizz"], [9, "Fizz"]])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})

	test.each([[5, "Buzz"], [10, "Buzz"], [20, "Buzz"]])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})


	test('convert 15 to FizzBuzz', () => {
		expect(new FizzBuzz().convert(15)).toBe("FizzBuzz");
	})


})