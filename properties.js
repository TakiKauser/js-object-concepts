const bottle = {
    color: "grey",
    hold: "water",
    price: 450,
    isCleaned: true
};

// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// getting all values of properties
const values = Object.values(bottle);
// console.log(values);

// getting all values of properties
const pairs = Object.entries(bottle);
// console.log(pairs);

// after sealing properties can't be deleted but current values can be set
Object.seal(bottle);

// after freezing properties and values can't be set
Object.freeze(bottle);

bottle.price = 999;

// delete a property
delete bottle.isCleaned;
console.log(bottle);