exports.getIndexPage = (req, res, next) => {
  try {
    res.render('index', {
      pageTitle: 'Music Lessons with AR',
    });
  } catch (err) {
    next(err);
  }
};

exports.getAugmented = async (req, res, next) => {
  try {
    res.render('index', {
      pageTitle: 'AR Engine',
    });
  } catch (err) {
    next(err);
  }
};