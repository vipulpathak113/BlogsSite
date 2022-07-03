const fs = require("fs");

/* Reading the file new.txt and returning the data. */
fs.readFile("./new.txt", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data.toString());
});

/* Writing a file called write.txt and putting the string "Written file" in it. */
fs.writeFile("./write.txt", "Written file", (err, data) => {
  console.log("file written");
});

/* Checking if the folder docs exists, if it does it will delete it, if it doesn't it will create it. */
if (!fs.existsSync("./docs")) {
  fs.mkdir("./docs", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("New folder created");
    }
  });
} else {
  fs.rmdir("./docs", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("New folder deleted");
    }
  });
}

/* Checking if the file delete.txt exists, if it does it will delete it. */
if (fs.existsSync("./delete.txt")) {
  fs.unlink("./delete.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
