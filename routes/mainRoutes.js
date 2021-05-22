const express = require('express');

const router = express.Router();
const controllers = require('../controllers/mainController');

router.get('/', controllers.getIndexPage);
router.get('/ar', controllers.getAugmented);

module.exports = router;
