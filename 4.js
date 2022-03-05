import { sum, subtract } from "./math.js";

const test = (title, callback) => {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
};

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    },
  };
};

test("Sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
