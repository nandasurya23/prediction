
class Roulette {
    constructor() {
        this.resultInput = document.getElementById("result-input");
        this.submitButton = document.getElementById("submit-button");
        this.result1 = document.getElementById("result-1");
        this.result2 = document.getElementById("result-2");
        this.result3 = document.getElementById("result-3");
        this.result4 = document.getElementById("result-4");
        this.loadingContainer = document.getElementById("loading-container");
        this.countdown = document.getElementById("countdown");
        this.submitButton.addEventListener("click", this.submitResult.bind(this));
    }

    submitResult(e) {
        e.preventDefault();
        if (this.resultInput.value === "") {
            alert("Please enter a previous result.");
            return;
        }
        this.showLoading();
        setTimeout(() => {
            this.showResults();
        }, 2000);
    }

    showLoading() {
        this.loadingContainer.style.display = "block";
        let timeLeft = 30;
        this.countdown.innerHTML = `${timeLeft} seconds left`;
        let countdownInterval = setInterval(() => {
            timeLeft--;
            this.countdown.innerHTML = `${timeLeft} seconds left`;
            if (timeLeft === 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    showResults() {
        this.loadingContainer.style.display = "none";
        let previousResult = parseInt(this.resultInput.value);
        let result1 = (previousResult + Math.floor(Math.random() * 36)) % 36;
        let result2 = (previousResult + Math.floor(Math.random() * 36)) % 36;
        let result3 = (previousResult + Math.floor(Math.random() * 36)) % 36;
        let result4 = (previousResult + Math.floor(Math.random() * 36)) % 36;
        this.result1.innerHTML = result1;
        this.result2.innerHTML = result2;
        this.result3.innerHTML = result3;
        this.result4.innerHTML = result4;
        if (result1 === 0) {
            this.result1.classList.add("green");
        } else if (result1 % 2 === 0) {
            this.result1.classList.add("even");
        } else {
            this.result1.classList.add("odd");
        }
        if (result2 === 0) {
            this.result2.classList.add("green");
        } else if (result2 % 2 === 0) {
            this.result2.classList.add("even");
        } else {
            this.result2.classList.add("odd");
        }
        if (result3 === 0) {
            this.result3.classList.add("green");
        } else if (result3 % 2 === 0) {
            this.result3.classList.add("even");
        } else {
            this.result3.classList.add("odd");
        }
        if (result3 === 0) {
            this.result4.classList.add("green");
        } else if (result3 % 2 === 0) {
            this.result4.classList.add("even");
        } else {
            this.result4.classList.add("odd");
        }
    }
}


let roulette = new Roulette();

