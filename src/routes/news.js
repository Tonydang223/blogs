const express = require('express');
const app = express();
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.use('/', newsController.index);
router.use('/blog', newsController.blog);

module.exports = router;
