const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const app = express();
app.use(express.urlencoded());

console.log('router is loaded');

router.get('/', homeController.home);
router.post('/add_task', homeController.addtask);

module.exports = router;