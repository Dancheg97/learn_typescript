type stuff = {
  a: number;
  b: number;
  f: string | number;
  c?: string;
  d?: string;
  e?: string;
};

const minus = (a: stuff): string => {
  return `${a.c}+${a.b}`;
};

console.log(minus({ a: 1, b: 2, f: "" }));
