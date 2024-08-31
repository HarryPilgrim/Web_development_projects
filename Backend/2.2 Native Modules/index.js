const fs = require("node:fs");   //short for file system


/*
fs.writeFile("message.txt", "Hello from me", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
*/


fs.readFile("message.txt", 'utf8',  (err, data) => {
    if (err) throw err;
    console.log(data);
  });