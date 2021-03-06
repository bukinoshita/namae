'use strict'

const fs = require('fs')
const got = require('got')

const url = 'https://raw.githubusercontent.com/bukinoshita/Names/master/Names/last-names.txt'

got(url).then(res => {
  fs.writeFileSync('last-names.txt', res.body.trim())
}).catch(err => {
  console.error(err)
  process.exit(1) // eslint-disable-line unicorn/no-process-exit
})
