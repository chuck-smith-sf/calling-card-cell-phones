

module.export = class CallingCard {
    constructor(centPerMinute) {
        this.centPerMinute = centPerMinute;
        this.money = 0;
        this.minutes = 0;
    }

    addDollars(money) {
        this.money += money;
    }

    getRemainingMinutes() {
        return this.minutes;
    }

    useMinutes(minutes) {
        //add logic that will only return 0 if less that 0
        this.minutes -= minutes;
    }



};