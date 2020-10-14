const fs = require('fs')

// fs.open('/commands.md', 'r', (err, fd) => {
//   console.log(fd);
// })

fs.stat('C:\\Users\\g.h.jain\\Desktop\\SLG\\Study\\NodeJs\\labs\\commands.md', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats.size);
  stats.isFile() //true
  stats.isDirectory() //false
  stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
})