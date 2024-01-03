import { FizzBuzz } from '../core/fizzBuzz';

describe('FizzBuzz', ()=> {

	test.each([
		[1, "1"], 
		[2, "2"], 
		[4, "4"],
		[1543, "1543"],
		[6, "Fizz"], 
		[9, "Fizz"],
		[5, "BuzzBuzz"],
		[550, "BuzzBuzzBuzz"], 
		[10, "Buzz"], 
		[20, "Buzz"],
		[15, "FizzBuzzBuzz"], 
		[555, "FizzBuzzBuzzBuzzBuzz"], 
		[30, "FizzBuzzFizz"], 
		[60, "FizzBuzz"],
		[3000, "FizzBuzzFizz"],
		[3, "FizzFizz"], 
		[33, "FizzFizzFizz"], 
		[63, "FizzFizz"], 
		[93, "FizzFizz"],
		[333, "FizzFizzFizzFizz"],
	])('convert %i to %s', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})
	
})