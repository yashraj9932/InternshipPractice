const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const config = require("./database");
const bcrypt = require("bcrypt");

module.exports = function (passport) {
  passport.use(
    new LocalStconstrategy(function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) throw err;
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        bcrypt.compare(user.password, password, function (err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Wrong Password" });
          }
        });
      });
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(async function (id, done) {
    await User.findById(id).then((err, user) => {
      done(null, user);
    });
  });
};
