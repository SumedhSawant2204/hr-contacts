const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hrController');

router.get('/company/:companyId', hrController.getHrsByCompanyId);
router.post('/', hrController.createHr);
router.put('/:id', hrController.updateHr);
router.delete('/:id', hrController.deleteHr);

module.exports = router;
