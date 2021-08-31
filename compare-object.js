// referential integrity
const first = { a: 1 };
const second = { a: 1 };
const third = first;

if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log("Same");
}
else {
    console.log("Different");
}

function compareObject(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for (const property in object1) {
        if (object1[property] !== object2[property]) {
            return false;
        }
    }
    return true;
}