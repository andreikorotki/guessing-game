class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.solutionCandidate = 0;
        this.divideAssumptions = 2;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max; 
    }

    guess() {
        this.solutionCandidate = Math.floor((this.min + this.max + 1) / this.divideAssumptions );
        return this.solutionCandidate;
    }

    lower() {
        this.max = this.solutionCandidate;
    }

    greater() {
        this.min = this.solutionCandidate;
    }
}

module.exports = GuessingGame;
