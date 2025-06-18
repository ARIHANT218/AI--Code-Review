const express = require ('express')
const aiController = require('../controllers/ai.Controller')

const router = express.Router();

router.post("/get-Response", aiController.getResponse);



module.exports = router ;