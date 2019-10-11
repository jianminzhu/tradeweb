//var Decimal = require('decimal.js');
var Decimal = require('decimal.js-light/decimal');

// Adjust the global configuration if required (these are the defaults)
Decimal.set({
  precision: 20,
  rounding: Decimal.ROUND_HALF_UP,
  toExpNeg: -7,
  toExpPos: 21
});

phi = new Decimal('1.61803398874989484820458683436563811772030917980576');

phi.toFixed(10);    // '1.6180339887'

phi.times(2).minus(1).toPower(2).plus('1e-19').equals(5);    // true
