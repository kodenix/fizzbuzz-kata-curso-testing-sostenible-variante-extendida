export class FizzBuzz {
    private readonly BUZZ_TEXT = "Buzz";
    private readonly FIZZ_TEXT = "Fizz";
    private readonly THREE_VALUE = 3;
    private readonly FIVE_VALUE = 5;
    
    convert(value: number): string {
        if (this.isDivisibleByNumber(value, this.THREE_VALUE * this.FIVE_VALUE)) {
            return this.processDivisibleByFiveteen(value);
        }
        if (this.isDivisibleByNumber(value, this.FIVE_VALUE)) {
            return this.BUZZ_TEXT+this.processDivisibleByFive(value);
        }
        if (this.isDivisibleByNumber(value, this.THREE_VALUE)) {
            return this.FIZZ_TEXT+this.processDivisibleByThree(value);
        }
        return value.toString();
    }
    
    private isDivisibleByNumber(value: number, dividend: number): boolean {
        return value % dividend === 0;
    }

    private processDivisibleByFiveteen(value: number): string {
        let outText = this.FIZZ_TEXT+this.BUZZ_TEXT;
        outText+=this.processDivisibleByFive(value);
        outText+=this.processDivisibleByThree(value);
        return outText;
    }
    
    private processDivisibleByFive(value: number): string {
        const totalCharacters = this.totalOfCharacterInValue(value, this.FIVE_VALUE.toString());
        let outText = "";
        for (let i=0; i < totalCharacters; i++) {
            outText+= this.BUZZ_TEXT;
        }

        return outText;
    }
    
    private processDivisibleByThree(value): string {
        const totalCharacters = this.totalOfCharacterInValue(value, this.THREE_VALUE.toString());
        let outText = "";
        for (let i=0; i < totalCharacters; i++) {
            outText+= this.FIZZ_TEXT;
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