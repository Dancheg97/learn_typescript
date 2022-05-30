"use strict";
let greet;
let great = () => {
    console.log("alloha buddy");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(1, 123, 12312);
