'use strict'

const path = require('path')
const fs = require('fs')
const uniqueRandomArray = require('unique-random-array')

const maleList = path.join(__dirname, 'male-names.txt')
const femaleList = path.join(__dirname, 'female-names.txt')
const lastNameList = path.join(__dirname, 'last-names.txt')
const maleNames = fs.readFileSync(maleList, 'utf8').split('\n')
const femaleNames = fs.readFileSync(femaleList, 'utf8').split('\n')
const lastNames = fs.readFileSync(lastNameList, 'utf8').split('\n')
const allNames = []

femaleNames.forEach((el, i) => {
  allNames.push(el, maleNames[i])
})

exports.male = maleNames
exports.female = femaleNames
exports.lastName = lastNames
exports.all = allNames

exports.maleRandom = uniqueRandomArray(maleNames)
exports.femaleRandom = uniqueRandomArray(femaleNames)
exports.lastNameRandom = uniqueRandomArray(lastNames)
exports.randomAll = uniqueRandomArray(allNames)
