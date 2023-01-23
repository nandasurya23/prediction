class Prediction {
    constructor() {
        this.fruitPrediction = document.getElementById("fruit-prediction");
        this.meatPrediction = document.getElementById("meat-prediction");
        this.greedyPrediction = document.getElementById("greedy-prediction");
        this.finalPrediction = document.getElementById("final-prediction");
        this.countdown = document.getElementById("countdown");
        this.fruit = [
            "https://img.nimo.tv/nw/nms/images/reward_icon0.d25dee56123e4513bb91d741d3727423.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon1.f11cff51093f7b16530ca265a5355cdb.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon2.88b5c33e0dd14bcefb7fff3065bca8f7.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon3.6d6db31b2d70246faef76120ce479b18.png/l0/img.png",
        ];
        this.meat = [
            "https://img.nimo.tv/nw/nms/images/reward_icon4.2b02621cefacafbc528e306254a9b880.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon5.bb3d000a5713dbad41152ed7a6303546.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon6.d0256f3d0525d2a7675e3a51c0b9fe84.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon7.8acea489e2d0dd2bf3d60a5591d98552.png/l0/img.png",
        ];
        this.greedy = [
            "https://img.nimo.tv/nw/nms/images/reward_icon0.d25dee56123e4513bb91d741d3727423.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon1.f11cff51093f7b16530ca265a5355cdb.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon2.88b5c33e0dd14bcefb7fff3065bca8f7.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon3.6d6db31b2d70246faef76120ce479b18.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon4.2b02621cefacafbc528e306254a9b880.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon5.bb3d000a5713dbad41152ed7a6303546.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon6.d0256f3d0525d2a7675e3a51c0b9fe84.png/l0/img.png",
            "https://img.nimo.tv/nw/nms/images/reward_icon7.8acea489e2d0dd2bf3d60a5591d98552.png/l0/img.png",
        ];
    }

    startCountdown() {
        var time = 10;
        var countdownInterval = setInterval(() => {
            time--;
            this.countdown.innerHTML = time;
            if (time === 0) {
                clearInterval(countdownInterval);
                this.showPrediction();
            }
        }, 1000);
    }
    showPrediction() {
        var randomFruit = Math.floor(Math.random() * this.fruit.length);
        var randomMeat = Math.floor(Math.random() * this.meat.length);
        var randomGreedy = Math.floor(Math.random() * this.greedy.length);
        this.fruitPrediction.innerHTML = '<img src="' + this.fruit[randomFruit] + '">';
        this.meatPrediction.innerHTML = '<img src="' + this.meat[randomMeat] + '">';
        this.greedyPrediction.innerHTML = '<img src="' + this.greedy[randomGreedy] + '">';
        this.finalPrediction.innerHTML = '<img src="' + this.greedy[randomGreedy] + '">';
        this.fruitPrediction.classList.add("animation-prediction");
        this.meatPrediction.classList.add("animation-prediction");
        this.greedyPrediction.classList.add("animation-prediction");
        setTimeout(() => {
            this.finalPrediction.classList.remove("animation-final-prediction");
            this.fruitPrediction.classList.remove("animation-prediction");
            this.meatPrediction.classList.remove("animation-prediction");
            this.greedyPrediction.classList.remove("animation-prediction");
        }, 2000);
        setTimeout(() => {
            this.finalPrediction.classList.add("show");
        }, 1000);
    }
    startCountdown() {
        var time = 10;
        var countdownInterval = setInterval(() => {
            time--;
            this.countdown.innerHTML = time;
            if (time === 0) {
                clearInterval(countdownInterval);
                this.showPrediction();
            }
        }, 1000);
    }

    start() {
        this.startCountdown();
    }
}

var prediction = new Prediction();
prediction.start();



