export class FizzBuzz {
    convert(value: number): string {
        if (value % 15 === 0) return "FizzBuzz";
        if (value % 5 === 0) return "Buzz";
        if (value % 3 === 0) {
            if (this.containThreeNumberOnce(value)===2) return "FizzFizzFizz";
            if (this.containThreeNumberOnce(value)===1) return "FizzFizz";
            return "Fizz";
        }
        return value.toString();
    }

    private containThreeNumberOnce(value: number) {
        const stringfiedValue = value.toString()
        let countThreeNumber = 0;
        for (let i = 0; i < stringfiedValue.length; i ++) {
            if (stringfiedValue[i] === "3") {
                countThreeNumber++;
            }
        }
        return countThreeNumber;
    }
}