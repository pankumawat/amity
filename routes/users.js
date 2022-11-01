var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    const users = [
        {name: "Pankaj", gender: "Male"},
        {name: "Vikas", gender: "Male"},
        {name: "Neha", gender: "Female"}
    ]
    res.render('users', {users: users});
});

/* GET users listing. */
router.get('/data', function (req, res, next) {
    const users = [
        {name: "Pankaj", gender: "Male"},
        {name: "Vikas", gender: "Male"},
        {name: "Neha", gender: "Female"}
    ]
    res.send(users);
});

module.exports = router;
