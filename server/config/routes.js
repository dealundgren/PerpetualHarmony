var EatUpController = require('../controllers/eatUps.controller.js');
var UserController = require('../controllers/user.controller.js');
var router = require('express').Router();


router.get('/sessions/allSessions', EatUpController.sessions.getAll);

router.get('/sessions/userSessions', EatUpController.sessions.getUserSessions);

router.post('/users/signUp', UserController.users.signUp);

router.post('/users/signIn', UserController.users.signIn);

router.post('/sessions/createMeetUp', EatUpController.sessions.createMeetUp);

router.delete('/sessions/deleteMeetUp', EatUpController.sessions.deleteMeetUp);

module.exports = router;