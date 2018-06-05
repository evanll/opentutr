/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
const db = require("../db");
const crypto = require("crypto");
const passport = require("passport");

//auth
module.exports = {
  async register({ email, username, password, firstname, lastname, isTutor }) {
    console.log(isTutor);
    try {
      const result = await createNewUser({ email, username, password, firstname, lastname, isTutor });
      if (isTutor) {
        await registerAsTutor(result.insertId);
      }
      return result.insertId;
    } catch(err) {
      console.log(err);
    }
  },
  async authenticate({ username, password }) {
    try {
      const result = await fetchUserDetails(username);
      // If results array is empty the user is not found
      if (result.length === 0) {
        return {userId: -1};
      }
      // Hashsalt password and compare with stored hash pass
      const hash = encryptPasswordSalt(password, result[0].password_salt);
      if (hash === result[0].password_hash) {
        return {userId: result[0].user_id};
      } else {
        return {userId: -1};
      }
    } catch(err) {
      console.log(err);
    }
  }
}; //exports

function createNewUser({ email, username, password, firstname, lastname, isTutor }) {
  return new Promise((resolve, reject) => {
    // salt and hash password
    const { salt, hash } = encryptPassword(password);
    console.log(salt);
    console.log(hash);
    db.query(
      "INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname, isTutor) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?)",
      [email, username, salt, hash, firstname, lastname, isTutor],
      function(error, result, fields) {
        if (error) {
          reject(error);
        }
        // return generated id to create login session
        resolve(result);
      }
    );
  });
}

function registerAsTutor(user_id) {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO Tutor (user_id) VALUES (?)";
    db.query(query, [user_id], (error, result, fields) => {
      if (error) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function fetchUserDetails(username) {
  return new Promise((resolve, reject) => {
    const query =
      "SELECT user_id, password_salt, password_hash FROM User WHERE username = ?";
    db.query(query, [username], (error, result, fields) => {
      if (error) {
        reject(err);
      }
      resolve(result);
    });
  });
}

// generates a random salt, and encrypts password with it
function encryptPassword(password) {
  const salt = crypto.randomBytes(4).toString("hex");
  const hash = crypto.createHmac("sha512", salt).update(password);
  return {
    salt,
    hash: hash.digest("hex")
  };
}

// takes a password and a salt to encrypt a password
function encryptPasswordSalt(password, salt) {
  const hash = crypto.createHmac("sha512", salt).update(password);
  return hash.digest("hex");
}

passport.serializeUser((user_id, done) => {
  done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
  done(null, user_id);
});
//auth
