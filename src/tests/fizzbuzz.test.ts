import { FizzBuzz } from '../core/fizzBuzz';

describe('FizzBuzz', ()=> {

	test.each([[1, "1"], [2, "2"], [4, "4"]])('convert %i to character representation', (value: number, expected: string)=>{
		expect(new FizzBuzz().convert(value)).toBe(expected);
	})
})