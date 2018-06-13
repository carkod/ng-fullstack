// const { Venues, Users } = require('node-foursquare')({
//   secrets: {
//     clientId: process.env.FOURSQUARE_ID,
//     clientSecret: process.env.FOURSQUARE_SECRET,
//     redirectUrl: process.env.FOURSQUARE_REDIRECT_URL
//   },
//   foursquare: {
//     mode: 'foursquare',
//     version: 20140806,
//   }
// });

const 

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

/**
 * GET /api/foursquare
 * Foursquare API example.
 */
exports.getBinance = async (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'foursquare');
//   try {
//     const getTrendingAsync = promisify(Venues.getTrending);
//     const getVenueAsync = promisify(Venues.getVenue);
//     const getCheckinsAsync = promisify(Users.getCheckins);
//     const trendingVenues = await getTrendingAsync('40.7222756', '-74.0022724', { limit: 50 }, token.accessToken);
//     const venueDetail = await getVenueAsync('49da74aef964a5208b5e1fe3', token.accessToken);
//     const userCheckins = await getCheckinsAsync('self', null, token.accessToken);
//     return res.render('api/foursquare', {
//       title: 'Foursquare API',
//       trendingVenues,
//       venueDetail,
//       userCheckins
//     });
//   } catch (err) {
//     return next(err);
//   }
};

/**
 * GET /api/linkedin
 * LinkedIn API example.
 */
exports.getLinkedin = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'linkedin');
  const linkedin = Linkedin.init(token.accessToken);
  linkedin.people.me((err, $in) => {
    if (err) { return next(err); }
    res.render('api/linkedin', {
      title: 'LinkedIn API',
      profile: $in
    });
  });
};

/**
 * GET /api/instagram
 * Instagram API example.
 */
exports.getInstagram = async (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'instagram');
  ig.use({ client_id: process.env.INSTAGRAM_ID, client_secret: process.env.INSTAGRAM_SECRET });
  ig.use({ access_token: token.accessToken });
  try {
    const userSearchAsync = promisify(ig.user_search);
    const userAsync = promisify(ig.user);
    const userSelfMediaRecentAsync = promisify(ig.user_self_media_recent);
    const searchByUsername = await userSearchAsync('richellemead');
    const searchByUserId = await userAsync('175948269');
    const myRecentMedia = await userSelfMediaRecentAsync();
    res.render('api/instagram', {
      title: 'Instagram API',
      usernames: searchByUsername,
      userById: searchByUserId,
      myRecentMedia
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/upload
 * File Upload API example.
 */

exports.getFileUpload = (req, res) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};
