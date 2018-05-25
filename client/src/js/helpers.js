import React from "react";
import axios from "axios";

const path = require("path");
const fs = require("fs");

export function calculateReviewStars(totalrating) {
  if (totalrating === undefined) {
    totalrating = 0;
  }
  const stars = Math.round(totalrating);
  // apply allows to provide arguments as an array
  var highlighterStars = Array(stars)
    .fill()
    .map((e, i) => <i className="fas fa-star" key={i} />);

  var greyStars = Array(5 - stars)
    .fill()
    .map((e, i) => <i className="far fa-star" key={i} />);

  return highlighterStars.concat(greyStars);
}

export function getProfileImage(userId) {
    var imgPath = "/api/user-images/" + userId + ".jpg";
    return imgPath;
}

export function sendFile(file) {
  // file = JSON.parse(file);
  console.log("The file is the following " + file);

  var folder = "../assets/images/" + file + ".jpg";
  axios
    .post({
      folder
    })
    .then(function(response) {
      console.log("Success");
    })
    .catch(function(error) {
      console.log("Fail");
    });
}

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|gif|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("error images only");
  }
}

// Static incrementer
function increment() {
  if (typeof increment.counter === "undefined") {
    increment.counter = 0;
  }
  increment.counter++;
}

// export function sendPhoto(){
//     console.log("Complete");
//
//   }
//     // Set storage engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename : function(req, file, cb){
//     increment();
//     var counter = increment.counter;
//     cb(null, 'newImage' + counter + path.extname(file.originalname));
//   }
// });
//
//   // Upload && constraints
// export upload = multer({
//   storage: storage,
//   limits:{fileSize: 1000000},
//   fileFilter: function(req, file, cb){
//   checkFileType(file, cb);
//   }
// }).single('tutorImage');
//
// //  Checks whether file is of correct type
// function checkFileType(file, cb){
//   const filetypes = /jpeg|jpg|gif|png/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);
//
//   if(mimetype && extname){
//     return cb(null, true);
//   }else{
//     cb('error images only');
//   }
// }

// API HANDLERS
// export function fetchProfileImage(userId) {
//   return new Promise((resolve, reject) => {
//     var img = "../profile_images/" + userId + ".jpg";
//     fs.stat(img, (err, result) => {
//       if (err) {
//         reject();
//       }
//       resolve(img);
//     });
//   });
// }
//
// export async function getProfileImage(userId) {
//   console.log("fire");
//   try {
//     var img = await fetchProfileImage(userId);
//     console.log("promise");
//     console.log(img);
//     return img;
//   } catch (err) {
//     console.log("catched");
//     return "../assets/images/default_user_md.png";
//   }
// }
