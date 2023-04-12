const express = require('express')

const router = express.Router();


const {
        getChecking,
        newChecking, 
        getSingleChecking
    } = require('../../controllers/checking/checkingController');

router.route('/checking').get(getChecking);
router.route('/checking/:id').get(getSingleChecking);
router.route('/checking/new').post(newChecking);

module.exports = router;