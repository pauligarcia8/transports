var express = require('express');
var router = express.Router();

var usersModel = require('../../models/userModel');

router.get('/', function (req, res, next) {
  res.render('admin/login', { layout: 'admin/layout' });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', { layout: 'admin/layout' });
});

router.post('/', async function (req, res, next) {
  try {
    var user = req.body.user;
    var password = req.body.password;

    console.log(req.body)

    var data = await usersModel.getUserByUsernameAndPassword(user, password);
    
    console.log(data);    

    if (data != undefined) {
      req.session.id_user = data.id;
      req.session.name = data.user;
      res.redirect('/admin/news');
    } else {
      res.render('admin/login', { layout: 'admin/layout', error: true });
    };
  } catch (error) {
  console.log(error);
  }
});

module.exports = router;