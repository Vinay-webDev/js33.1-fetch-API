// promise
// 3 state: fullfilled, rejected, pending;


const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! resolved the Promise!");
    }
    else {
        reject("No! rejected the Promise!");
    }
})

console.log(myPromise);

myPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    return value + 1111;
}).then(newValue => {
    console.log(newValue);
});


//----rejected-----------//
const myPromise1 = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve("Yes! resolved the Promise!");
    }else {
        reject("No! rejected the Promise!");
    }
});

console.log(myPromise1);
//----this operation will just skips all the code if there is an error is present---//
myPromise1.then(value => {
    return value + 1111;
}).then(newValue => {
    console.log(newValue);
}).catch(error => {
    console.error(error);
});








