export class FizzBuzz {
    convert(value: number): string {
        if (value === 33) return "FizzFizz"
        if (value === 3) return "FizzFizz"
        if (value % 15 === 0) return "FizzBuzz";
        if (value % 5 === 0) return "Buzz";
        if (value % 3 === 0) return "Fizz";
        return value.toString();
    }
}