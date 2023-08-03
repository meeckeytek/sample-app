const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// fileFilter: (req, file, cb) => {
//   let ext = path.extname(file.originalname);
//   if (
//     ext !== ".jpg" &&
//     ext !== ".jpeg" &&
//     ext !== ".png" &&
//     ext !== ".JPEG" &&
//     ext !== ".PNG" &&
//     ext !== ".JPG"
//   ) {
//     cb(new Error("File type is not supported"), false);
//     return;
//   }
//   cb(null, true);
// },

let upload = multer({
  storage: storage
});

module.exports = upload;