import fs from 'fs'
import test from 'ava'
import namae from './../'

test(t => {
  t.true(namae.length > 0)
  t.true(fs.statSync(namae).size > 2)
})
