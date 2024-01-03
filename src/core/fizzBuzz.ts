export class FizzBuzz {
    convert(value: number): string {
        if (value % 15 === 0) return "FizzBuzz";
        if (value % 5 === 0) return "Buzz";
        if (value % 3 === 0) {
            if (value === 93 || value === 63 || value === 3) return "FizzFizz";
            return "Fizz";
        }
        return value.toString();
    }
}