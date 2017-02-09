import fs from 'fs'
import test from 'ava'
import { male } from './../'

test(t => {
  const mArray = fs.readFileSync(male, 'utf8').split('\n')

  t.true(mArray.length > 0)
})
