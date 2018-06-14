const passport = require('passport');
const request = require('request');

const { Strategy: LocalStrategy } = require('passport-local');
const { OAuth2Strategy } = require('passport-oauth');


/**
 * Sign in using Email and Password.
 */
// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//   User.findOne({ email: email.toLowerCase() }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { msg: `Email ${email} not found.` });
//     }
//     user.comparePassword(password, (err, isMatch) => {
//       if (err) { return done(err); }
//       if (isMatch) {
//         return done(null, user);
//       }
//       return done(null, false, { msg: 'Invalid email or password.' });
//     });
//   });
// }));

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */


/**
 * Foursquare API OAuth.
 */
// passport.use('foursquare', new OAuth2Strategy({
//   authorizationURL: 'https://foursquare.com/oauth2/authorize',
//   tokenURL: 'https://foursquare.com/oauth2/access_token',
//   clientID: process.env.FOURSQUARE_ID,
//   clientSecret: process.env.FOURSQUARE_SECRET,
//   callbackURL: process.env.FOURSQUARE_REDIRECT_URL,
//   passReqToCallback: true
// },
// (req, accessToken, refreshToken, profile, done) => {
//   User.findById(req.user._id, (err, user) => {
//     if (err) { return done(err); }
//     user.tokens.push({ kind: 'foursquare', accessToken });
//     user.save((err) => {
//       done(err, user);
//     });
//   });
// }));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0];
  const token = req.user.tokens.find(token => token.kind === provider);
  if (token) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
