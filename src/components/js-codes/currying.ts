//regular function
const regFunction = (a: number, b: number, c: number) => {
  return a + b + c;
};

//curried function
const curry = (a: number) => {
    return (b: number) => {
        return (c: number) => {
            return a + b + c
        }
    }
}
const curriedOutput = curry(10)(5)(25)
console.log(curriedOutput)
