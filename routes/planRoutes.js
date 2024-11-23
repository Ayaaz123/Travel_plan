const express = require('express');
const router = express.Router();
const {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan
} = require('../controllers/planController');

router.post('/plans', createPlan);
router.get('/plans', getPlans);
router.get('/plans/:id', getPlanById);
router.patch('/plans/:id', updatePlan);
router.delete('/plans/:id', deletePlan);

module.exports = router;
