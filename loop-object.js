const bottle = {
    color: "grey",
    hold: "water",
    price: 450,
    isCleaned: true
};

/*
for(let i = 0; i < n; i++){} // regular
for(const element of array){} // array
for(const property in object){} // object
*/

for (const property in bottle) {
    // console.log(property, bottle[property]);
}

const keys = Object.keys(bottle);
// console.log(keys);

for (const element of keys){
    // console.log(element, bottle[element]);
}

// advanced
const entries = Object.entries(bottle);
console.log(entries);
for(const [key, values] of Object.entries(bottle)){
    console.log(key, values);
}