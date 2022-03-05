import {sum,subtract} from './math.js';

let result, expected;

const expect=(actual)=>{
    return {
        toBe(expected){
            if(actual!==expected){
                throw new Error(`Expected ${expected}, got ${actual}`);
            }
        }
    }
}

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

