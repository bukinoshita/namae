# namae
> List of names

## Install
```
$ npm install --save namae
```

## Usage
```js
const fs = require('fs')

// Returns the path to the word list which is separated by `\n`
const namaePath = require('namae')

const namaeArray = fs.readFileSync(namaePath, 'utf8').split('\n');
//=> […, 'bu', 'abner', …]
```

## License
[MIT](https://github.com/bukinoshita/namae/blob/master/LICENSE) &copy; Bu Kinoshita
