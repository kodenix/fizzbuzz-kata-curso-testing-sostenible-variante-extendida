export class FizzBuzz {
    convert(value: number): string {
        if (value % 15 === 0) {
            return this.processDivisibleByFiveteen(value);
        }
        if (value % 5 === 0) {
            return this.processDivisibleByFive(value);
        }
        if (value % 3 === 0) {
            return this.processDivisibleByThree(value);
        }
        return value.toString();
    }
    
    private processDivisibleByFiveteen(value: number): string {
        let outText = "FizzBuzz";
        const totalCharacters = this.totalOfCharacterInValue(value, "5");
        for (let i=0; i < totalCharacters; i++) {
            outText+= "Buzz";
        }

        const total3Characters = this.totalOfCharacterInValue(value, "3");
        for (let i=0; i < total3Characters; i++) {
            outText+= "Fizz";
        }

        return outText;
        
    }
    
    private processDivisibleByFive(value: number): string {
        const totalCharacters = this.totalOfCharacterInValue(value, "5");
        let outText = "Buzz";
        for (let i=0; i < totalCharacters; i++) {
            outText+= "Buzz";
        }

        return outText;
    }
    
    private processDivisibleByThree(value): string {
        const totalCharacters = this.totalOfCharacterInValue(value, "3");
        let outText = "Fizz";
        for (let i=0; i < totalCharacters; i++) {
            outText+= "Fizz";
        }

        return outText;
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