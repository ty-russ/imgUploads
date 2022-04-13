const fs = require("fs");
const request = require("request");
const path = require("path");

//download image from url
const url = "https://api.twilio.com/2010-04-01/Accounts/ACd6679ad89150d5582dadd6b5635e00b2/Messages/MMb7c246cf99da8588115c0290419669bf/Media/MEbee2141a7f69416175030e7a41b6177d";
const filename = "test_image.jpg";

// const url = "https://evisakenya.net/images/photo-requirements-and-size-for-passport.webp";
request(url).pipe(fs.createWriteStream(filename));
//get image path
const filePath = path.join(__dirname, "test_image.jpg");
console.log(filePath);
//convert image to base64 format
var base64string = base64_encode(filePath);
console.log(base64string);
function base64_encode(file) {
  return "data:image/jpg;base64," + fs.readFileSync(file, "base64");
}
//convert base64 to back to image
var base64Data = base64string.replace(/^data:image\/jpg;base64,/, "");

require("fs").writeFile("out.jpg", base64Data, "base64", function (err) {
  console.log(err);
});
