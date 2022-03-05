import assert from 'assert';
import {sum, subtract} from './math.js';

let result, expected;

result = sum(3, 7);
expected = 10;
assert.strictEqual(result, expected, `Expected ${expected}, got ${result}`);

result = subtract(7, 3);
expected = 4;
assert.strictEqual(result, expected, `Expected ${expected}, got ${result}`);