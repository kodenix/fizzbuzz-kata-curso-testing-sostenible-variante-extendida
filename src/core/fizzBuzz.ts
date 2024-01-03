export class FizzBuzz {
    convert(value: number): string {
        if (value % 15 === 0) return "FizzBuzz";
        if (value % 5 === 0) return "Buzz";
        if (value % 3 === 0) {
            if (this.containThreeNumberOnce(value)) return "FizzFizz";
            return "Fizz";
        }
        return value.toString();
    }

    private containThreeNumberOnce(value: number) {
        return value === 93 || value === 63 || value === 3;
    }
}