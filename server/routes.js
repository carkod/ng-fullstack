/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index', {
    page: 'Home'
  });
};

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('index', {
    page: 'API Examples'
  });
};



