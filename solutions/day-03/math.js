// Method 1 of export module (Frontend)
export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

export default function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  };
};

// Method 2 of export module (Frontend)
// const addTwo = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const subtract = (a, b) => a - b;

// function doSomeMath() {
//   return {
//     addTwo,
//     multiply,
//     subtract,
//   };
// };

// export { addTwo, multiply, subtract };
// export default doSomeMath;
