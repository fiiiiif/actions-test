const package = require('./package.json');
const fs = require('fs');

const [major, minor, patch] = package.version.split('.');

const newVersion = `${major}.${minor}.${(+patch) + 1}`;

package.version = newVersion;
fs.writeFileSync('./package.json', JSON.stringify(package));
