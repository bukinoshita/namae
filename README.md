# namae
> Get a list of names or a random name

[![Codeship Status for bukinoshita/namae](https://app.codeship.com/projects/cc6d6330-e013-0134-8f7a-5ecc5558b622/status?branch=master)](https://app.codeship.com/projects/205143)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/namae.svg)](https://www.npmjs.com/package/namae)
[![license](https://img.shields.io/github/license/bukinoshita/namae.svg)](https://raw.githubusercontent.com/bukinoshita/namae/master/LICENSE)

## Install
```
$ npm install --save namae
```

## Usage
```js
import namae from 'namae'

console.log(namae.female)
// => [Amanda, Tyler, Emma, ...]

console.log(namae.maleRandom())
// => Logan
```

## API
### namae

#### .male
Return an array of male names

#### .female
Return an array of female names

#### .all
Return an array names of both genders

#### .lastName
Return an array of last names

#### .maleRandom()
Return a random male name

#### .femaleRandom()
Return a random female name

#### .lastNameRandom()
Return a random last name

#### .randomAll()
Return a random name (can be male or female)

## Related
- [Names](https://github.com/bukinoshita/Names) — List of names
- [nickname](https://github.com/bukinoshita/nickname) — :kissing_cat: Get a list of nicknames or a random nickname
- [rnd-age](https://github.com/bukinoshita/rnd-age) — :keycap_ten: Generate a random age
- [rnd-date](https://github.com/bukinoshita/rnd-date) — :date: Get a random date
- [faceit](https://github.com/bukinoshita/faceit) — :information_desk_person: Diverse user images for user interface design
- [rnd-drawish](https://github.com/bukinoshita/rnd-drawish) — :twisted_rightwards_arrows: List of words & random word

## License
[MIT](https://github.com/bukinoshita/namae/blob/master/LICENSE) &copy; Bu Kinoshita
