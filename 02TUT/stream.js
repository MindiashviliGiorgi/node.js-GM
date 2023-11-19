const fs = require('fs');

const rs = fs.createReadStream('./files/promiseComplete.txt', {encoding : 'utf-8'});

const ws = fs.createWriteStream('./files/new-promiseComplete.txt')

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk)
// })

rs.pipe(ws);
