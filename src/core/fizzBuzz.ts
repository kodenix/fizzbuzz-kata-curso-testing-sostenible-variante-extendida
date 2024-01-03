export class FizzBuzz {
    convert(value: number): string {
        if (value % 3 === 0) return "Fizz";
        return value.toString();
    }
}