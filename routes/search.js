var express = require('express');
var router = express.Router();

var searchController = require('../controllers/search');

// All actual paths start with "/search"

router.get('/', searchController.search);
module.exports = router;
