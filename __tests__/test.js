import test from 'ava'
import namae from './..'

test(t => {
  t.true(namae.male.length > 1)
  t.true(namae.female.length > 1)
  t.true(namae.lastName.length > 1)
  t.true(namae.all.length > 1)
  t.not(namae.maleRandom(), namae.maleRandom())
  t.not(namae.femaleRandom(), namae.femaleRandom())
  t.not(namae.lastNameRandom(), namae.lastNameRandom())
  t.not(namae.randomAll(), namae.randomAll())
})
