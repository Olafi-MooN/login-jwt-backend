const router = require('express').Router();

const insertController = require('../controllers/insertController').insert;
const viewUserController = require('../controllers/viewUsersController').viewUser;
const loginController = require('../controllers/loginController').login;
const authorization = require('../controllers/middleController').middle;

router.post('/insert', insertController);
router.get('/users', authorization, viewUserController);
router.post('/login', loginController);
router.post('/test', (req, res) => {
    const response = req.body;

    

    return res.json({response});
});

module.exports = router;