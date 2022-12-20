"use strict";

const property = require('./controllers/property.js');

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

const accounts = require('./controllers/accounts.js');

const reading = require("./controllers/reading.js");


router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

router.get('/property/:id', property.index);

router.get('/property/:id/deletereading/:readingid', property.deleteReading);

router.get('/dashboard/deleteproperty/:id', dashboard.deleteProperty);

router.post('/property/:id/addreading', property.addReading);


router.post('/dashboard/addproperty', dashboard.addProperty);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get("/reading/:id/editreading/:readingid", reading.index);
router.post("/reading/:id/updatereading/:readingid", reading.update);


module.exports = router;
