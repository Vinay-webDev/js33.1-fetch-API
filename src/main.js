// promise
// 3 state: fullfilled, rejected, pending;
/*
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
*/
//----real reason why need async or await------///
/*
const myPromise2 = new Promise((resolve, reject)=> {
    const error = false;
    if(!error) {
        resolve("yes! resolved the Promise!");
    }
    else {
        reject("no! rejected the Promise!");
    }
})

const myPromise3 = new Promise((resolve, reject)=> {
    setInterval(function() {
        resolve("yes! the Promise is resolved!");
    }, 3000);
});



myPromise3.then(value=> {
    console.log(value);
});

myPromise2.then(value => {
    console.log(value);
}); 
console.log("--------------------------------------------"); */
//----pending--------//

const users = fetch("https://jsonplaceholder.typicode.com");
///
console.log(users);



















