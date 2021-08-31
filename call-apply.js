const kb = {
    id: 1694,
    name: "kb",
    money: 39000,
    treatdey: function (expense = 0, tips = 0, vat = 0) {
        this.money = this.money - expense - tips - vat;
        console.log(this);
        return this.money;
    }
}
const fft = {
    id: 1996,
    name: "fft",
    money: 57000,
}

// call
kb.treatdey.call(fft, 5000, 100, 500);

// apply
kb.treatdey.apply(fft, [5000, 100, 500]);
