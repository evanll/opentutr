const db = require("../db");
const crypto = require("crypto");
const passport = require("passport");

//auth
module.exports = {
  register({ email, username, password, firstname, lastname, isTutor }) {
    return new Promise((resolve, reject) => {
      // salt and hash password
      const { salt, hash } = encryptPassword(password);
      console.log(`New user ${username} with salt ${salt} and hash ${hash}`);

      // missing isTutor
      db.query(
        "INSERT INTO User (email, username, password_salt, password_hash, firstname, lastname) " +
          "VALUES (?, ?, ?, ?, ?, ?)",
        [email, username, salt, hash, firstname, lastname],
        function(error, result, fields) {
          if (error) {
            reject(error);
          }
          resolve();
        }
      );
    });
  },
  async authenticate({ username, password }) {
    const result = await fetchUserDetails(username);
    const hash = encryptPasswordSalt(password, result[0].password_salt);
    if (hash === result[0].password_hash) {
      console.log("User authenticated.");
      return {
        success: true,
        user_id: result[0].user_id
      };
    }
  }
}; //exports

function fetchUserDetails(username) {
  return new Promise((resolve, reject) => {
    const query =
      "SELECT user_id, password_salt, password_hash FROM User WHERE username = ?";
    db.query(query, [username], (error, result, fields) => {
      if (error) {
        reject(err);
        console.log("rejected");
      }
      console.log("resolved");
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
  console.log("searializeUser called");
});

passport.deserializeUser((user_id, done) => {
  done(null, user_id);
  console.log("deserializeUser");
});
//auth
