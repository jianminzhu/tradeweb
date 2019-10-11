var Decimal = require('decimal.js');
var Big = require('Big.js');
Big.DP = 3


var height= 2.274
var low= 2.223


var h = new Big(height);
var qujian= h.minus(low)
var a=[h.minus(qujian.mul(0.191).toFixed(3)),
    h.minus(qujian.mul(0.382).toFixed(3)),
    h.minus(qujian.mul(0.5).toFixed(3)),
    h.minus(qujian.mul(0.618).toFixed(3)),
    h.minus(qujian.mul(0.809).toFixed(3) )
]

var arr=[7676.25,7676.5,7673.25,7674.75];

console.log(Math.max.apply(Math,arr))
console.log(Math.min.apply(Math,arr))



// console.log( eval("( " +arr.join(",")+" )") )
// console.log( eval("( " +arr.join(",")+" )") )
