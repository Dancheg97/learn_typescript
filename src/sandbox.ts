let greet: Function;

let great = () => {
  console.log("alloha buddy");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(1, 123, 12312);
