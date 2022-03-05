import { sum, subtract } from "./math.js";

let result, expected;
result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`Expected ${expected}, got ${result}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`Expected ${expected}, got ${result}`);
}
