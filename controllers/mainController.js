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
    res.render('lessons', {
      pageTitle: 'AR Engine',
    });
  } catch (err) {
    next(err);
  }
};