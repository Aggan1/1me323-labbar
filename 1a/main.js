// Alias import från labb 1a
import { add as addition, subtract as subtraction } from './math.js';
import { SECRET_SAUCE as MEANING_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING } from './math.js';

console.log(addition(5, 3));     // 8
console.log(subtraction(10, 4)); // 6
console.log(MEANING_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING);            // 42

// Namespace import från labb 1a
import * as MathUtils from './math.js';

console.log(MathUtils.add(2, 3));      // 5
console.log(MathUtils.multiply(4, 5)); // 20
console.log(MathUtils.PI);          // 3.14159