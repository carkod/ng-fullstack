/**
 * GET /api/foursquare
 * Foursquare API example.
 */
exports.getFoursquare = async (req, res, next) => {
    const token = req.user.tokens.find(token => token.kind === 'foursquare');
    try {
      const getTrendingAsync = promisify(Venues.getTrending);
      const getVenueAsync = promisify(Venues.getVenue);
      const getCheckinsAsync = promisify(Users.getCheckins);
      const trendingVenues = await getTrendingAsync('40.7222756', '-74.0022724', { limit: 50 }, token.accessToken);
      const venueDetail = await getVenueAsync('49da74aef964a5208b5e1fe3', token.accessToken);
      const userCheckins = await getCheckinsAsync('self', null, token.accessToken);
      return res.render('api/foursquare', {
        title: 'Foursquare API',
        trendingVenues,
        venueDetail,
        userCheckins
      });
    } catch (err) {
      return next(err);
    }
  };