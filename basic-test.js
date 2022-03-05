const actual = true;
const expected = false;

if (actual !== expected) {
  throw new Error(`Expected ${expected}, got ${actual}`);
}
