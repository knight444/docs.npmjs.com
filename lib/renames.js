var shell = require('shelljs')
var config = require('shelljs').config
config.silent = true

var renames = module.exports = {}

shell
  .exec('git diff --name-status -C 855154 HEAD')
  .output
  .split("\n")
  .filter(function(line) {
    // `R100` signifies a rename in git parlance
    // Ignore renames outside of the content directory
    return line.match(/^R100\tcontent/)
  })
  .map(function(line) {
    return line
      .replace(/(R100)\t/g, '')
      .replace(/content\/?/g, '')
      .replace(/\.md/g, '')
      .split("\t")
  })
  .forEach(function(line) {
    renames[line[0]] = line[1]
  })
