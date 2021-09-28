const express = require('express');
const router = express.Router();
const userController = require('../controller/userCon')


// const jwtHelper = require('../config/jwtHelper');
// comments
router.post('/register', userController.register);
router.patch('/update-user', userController.update);
router.get('/users',userController.getAll);
router.get('/users/:id',userController.getOne);
router.delete('/users/:id',userController.delete);

module.exports = router;

