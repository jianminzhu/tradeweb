const generate = require('csv-generate')
generate({
  columns: ['int', 'bool','ascii'],
  length: 2
})
.pipe(process.stdout)