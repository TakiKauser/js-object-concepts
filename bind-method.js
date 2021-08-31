const kb = {
    id: 1694,
    name: "kb",
    money: 39000,
    treatdey: function (expense = 0) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
const fft = {
    id: 1996,
    name: "fft",
    money: 57000,
}
kb.treatdey(1000);

const fftTreatDey = kb.treatdey.bind(fft);
fftTreatDey(1000);