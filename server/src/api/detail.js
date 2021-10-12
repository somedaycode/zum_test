const express = require('express');
const router = express.Router();

const createLocalCache = require('../utils/cache');
const localCache = createLocalCache();

router.get('/:url', function (req, res) {});

module.exports = router;
