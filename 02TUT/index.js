// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'lorem.txt'));
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n\Nice to meet u');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
}

fileOps()

// toString() method get data
// fs.readFile('./files/lorem.txt', (err, data) => {
//   if(err) throw err;
//   console.log(data.toString())
// })


// readFile
// fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8', (err, data) => {
//   if(err) throw err;
//   console.log(data)
// })

// let textForFile = "Nice to meet you"
// // writeFile
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), textForFile, (err) => {
//   if (err) throw err;
//   console.log('Write complete')

//   // appendFile
//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n\n\n append working', (err) => {
//     if (err) throw err;
//     console.log('Append complete')

//     // renameFile
//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//       if (err) throw err;
//       console.log('Rename complete')
//     })
//   })
// })

// 30:51


// catch error
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1)
})