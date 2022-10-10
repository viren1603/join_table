const express = require('express');
const r = express.Router();
const controller = require('../controller/controller');

r.post('/EmployeData', controller.EmployeData)

r.post('/deparment', controller.deparment)

module.exports = r;