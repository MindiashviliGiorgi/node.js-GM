const fs = require('fs');
const path = require('path');

// toString() method get data
// fs.readFile('./files/lorem.txt', (err, data) => {
//   if(err) throw err;
//   console.log(data.toString())
// })


// readFile
fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8', (err, data) => {
  if(err) throw err;
  console.log(data)
})

let textForFile = "Nice to meet you"
// writeFile
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), textForFile, (err) => {
  if (err) throw err;
  console.log('Write complete')

  // appendFile
  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n\n\n append working', (err) => {
    if (err) throw err;
    console.log('Append complete')

    // renameFile
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
      if (err) throw err;
      console.log('Rename complete')
    })
  })
})

// 30:51


// catch error
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1)
})