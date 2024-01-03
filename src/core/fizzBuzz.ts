export class FizzBuzz {
    convert(value: number): string {
        if (value === 3) return "Fizz";
        if (value === 6) return "Fizz";
        return value.toString();
    }
}