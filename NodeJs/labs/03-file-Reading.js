const fs = require('fs')

fs.readFile('C:\\Users\\g.h.jain\\Desktop\\SLG\\Study\\NodeJs\\labs\\commands.md', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})