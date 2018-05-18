const db = require("../db");
const crypto = require("crypto");

// module.exports = {
//   register
//
//
// }

//auth
module.exports = {
  register({ email, username, password, firstname, lastname, isTutor }) {
    // salt and hash password
    const { salt, hash } = encryptPassword(password);
    console.log(`New user ${username} with salt ${salt} and hash ${hash}`);

    // missing isTutor
    db.m (
      "INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname) " +
        "VALUES (?, ?, ?, ?, ?, ?)",
      [email, username, salt, hash, firstname, lastname],
      function(error, result, fields) {
        if (error) throw error;
      }
    );
  },
  authenticate({ username, password }) {
    db.query(
      "SELECT password_salt, password_hash FROM User WHERE username = ?",
      [username],
      function(error, result, fields) {
        if (error) throw error;
        if (result.length == 0) {
          // console.log(fields);
          console.log(result[0].user);
          return {success: false};
        }
        const hash = encryptPasswordSalt(password, result[0].password_salt);
        console.log(result[0].password_hash);
        console.log(hash);
        if (hash === result[0].password_hash) {
          console.log("User authenticated.");
          return {success : true};
        }
      }
    );
  }
};

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
//auth
