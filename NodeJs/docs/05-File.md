# https://nodejs.dev/learn/nodejs-file-stats

1. [file stats] : Every file comes with a set of details that we can inspect using Node.js.

In particular, using the stat() method provided by the fs module.

const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  stats.isFile() //true
  stats.isDirectory() //false
  stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
})

2. [File Paths] : 

3. [file-Reading]: Both fs.readFile() and fs.readFileSync() read the full content of the file in memory before returning the data.

4. 