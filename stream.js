const fs = require("fs");

const readStream = fs.createReadStream("./docs/large.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/largeWrite.txt");
const writeStream2 = fs.createWriteStream("./docs/largeWrite2.txt");

readStream.on("data", (chunk) => {
  // console.log(chunk)
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

//write can also be done by pipe if read from stream n write to stream

readStream.pipe(writeStream2);
