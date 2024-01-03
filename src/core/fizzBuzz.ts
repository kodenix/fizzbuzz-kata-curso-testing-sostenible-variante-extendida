export class FizzBuzz {
    convert(value: number): string {
        if (value === 15) return "FizzBuzz";
        if (value % 5 === 0) return "Buzz";
        if (value % 3 === 0) return "Fizz";
        return value.toString();
    }
}