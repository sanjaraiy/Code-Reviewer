const express = require('express');

const router = express.Router();
const aiController = require('../controllers/aiController');


router.get("/get-response", aiController);

module.exports = router;