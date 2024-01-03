export class FizzBuzz {
    convert(value: number): string {
        if (value % 15 === 0) return "FizzBuzz";
        if (value % 5 === 0) return "Buzz";
        if (value % 3 === 0) {
            return this.processDivisibleByThree(value);
        }
        return value.toString();
    }
    
    private processDivisibleByThree(value): string {
        if (this.totalOfCharacterInValue(value, "3")===2) return "FizzFizzFizz";
        if (this.totalOfCharacterInValue(value, "3")===1) return "FizzFizz";
        return "Fizz";
    }

    private totalOfCharacterInValue(value: number, character: string): number {
        const stringfiedValue = value.toString()
        let countThreeNumber = 0;
        for (let i = 0; i < stringfiedValue.length; i ++) {
            if (stringfiedValue[i] === character) {
                countThreeNumber++;
            }
        }
        return countThreeNumber;
    }
}