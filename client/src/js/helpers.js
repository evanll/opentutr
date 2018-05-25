import React from "react";
import axios from 'axios';

const path = require('path');

export function calculateReviewStars(totalrating) {
    if (totalrating === undefined) {
      totalrating = 0;
    }
    const stars = Math.round(totalrating);
    // apply allows to provide arguments as an array
    var highlighterStars = Array(stars).fill().map((e, i) => (
      <i className = "fas fa-star" key={i}></i>
    ));

    var greyStars = Array(5 - stars).fill().map((e, i) => (
      <i className = "far fa-star" key={i}></i>
    ));

    return highlighterStars.concat(greyStars);
  }

export function getMethod(name){
    var name = name;
    var final = "../assets/images/" + name + ".jpg";
    return final;

  }

  export function sendFile(file){

      // file = JSON.parse(file);
      console.log("The file is the following " + file);

      var folder = "../assets/images/" + file + ".jpg";
      axios.post( { folder
      } )
      .then(function (response) {
      console.log('Success');
      })
      .catch(function (error) {
      console.log('Fail');
      });
}


    function checkFileType(file, cb){
    const filetypes = /jpeg|jpg|gif|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
      return cb(null, true);
    }else{
      cb('error images only');
    }
  }

  // Static incrementer
  function increment() {
      if( typeof increment.counter == 'undefined' ) {
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
