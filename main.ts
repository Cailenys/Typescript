var myCondition= {
    i: 1, // Iterator.
    iterations: 100, // Number of total iterations.
    outputString: '',

    myGreetting: function () {
        // Loop based on iterations.
        while ( this.i <= this.iterations ) {
            if ( this.hello( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'Hello';
            } else if ( this.world( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'World';
            } else if ( this.helloWorld( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'Hello  World';
            } else {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += this.i; // Plus one, so that only values between "1 and 100" will show.
            }
            // Newline.
            this.outputString += '\r\n';
            // Iterate.
            this.i++;
        }
        // Output result when loop is complete.
        return console.log( this.outputString );
    },
    // Checks If the number is a multiple of 3
    hello: ( multipleOfThree:number ) => {
        // If divisible by 3... (no remainders.)
        if ( ( multipleOfThree % 3 ) === 0 ) {
            return true; 
        }
       
        return false;
    },
    // Checks If the number is a multiple of 5
    world: ( multipleOfFive: number ) => {
        // If it is NOT divisible by 3... (remainders present.)
        if ( (multipleOfFive % 3 ) !== 0 ) {
            // And if it IS divisible by 5... (no remainders.)
            if ( ( multipleOfFive % 5 ) === 0 ) {
                return true; 
            }
        }
      
        return false;
    },
    //If the number is a multiple of both 3 and 5
    helloWorld: (multipleOfThreeAndFive: number ) => {
        // If it is divisible by 3... (remainders present.)
        if ( (multipleOfThreeAndFive % 3 ) === 0 ) {
            // And if it is divisible by 5... (no remainders.)
            if ( ( multipleOfThreeAndFive % 5 ) === 0 ) {
                return true; 
            }
        }
             return false;
    }
}


 myCondition.myGreetting();