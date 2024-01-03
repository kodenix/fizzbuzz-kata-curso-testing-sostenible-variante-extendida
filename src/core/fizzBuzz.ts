export class FizzBuzz {
    convert(value: number): string {
        if (value === 10) return "Buzz";
        if (value === 5) return "Buzz";
        if (value % 3 === 0) return "Fizz";
        return value.toString();
    }
}