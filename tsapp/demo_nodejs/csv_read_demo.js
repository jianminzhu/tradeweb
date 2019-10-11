const parse = require('csv-parse')
const assert = require('assert')

parse(`
"first","last"
"Paul-Émile","Victor" 
`.trim(), {
  max_record_size: 10
}, function(err, records){
	console.log("--------",err)
 // assert.ok( 
   // /Max Record Size/.test(err.message)
  //)
})
	
	
	
	