const express = require('express')

const router = express.Router();


const {
        getChecking,
        newChecking, 
        getSingleChecking,
        deleteChecking
    } = require('../../controllers/checking/checkingController');
const sendEmail = require('../../controllers/checking/ses');

router.route('/checking').get(getChecking);
router.route('/checking/:id').get(getSingleChecking);
router.route('/checking/new').post(newChecking);
router.route('/checking/delete/:id').delete(deleteChecking);
module.exports = router;