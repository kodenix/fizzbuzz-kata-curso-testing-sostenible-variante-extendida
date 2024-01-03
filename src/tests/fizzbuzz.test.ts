import { FizzBuzz } from '../core/fizzBuzz';

describe('FizzBuzz', ()=> {
	test('convert_1_to_1', ()=>{
		expect(new FizzBuzz().convert(1)).toBe('1');
	})

	test('convert_2_to_2', ()=>{
		expect(new FizzBuzz().convert(2)).toBe('2');
	})
})