/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import { input } from '@inquirer/prompts';
const userURL = await input({ message: 'Enter your URL' });


import qr from "qr-image";
import fs from "node:fs";
var qrCode = qr.image(userURL);
qrCode.pipe(fs.createWriteStream(`userQRcode.png`));



fs.writeFile("userURL.txt", userURL, (err) => {
    if (err) throw err;
    console.log('The QR code has been created');
  });
