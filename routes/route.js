const express = require('express');
const r = express.Router();
const controller = require('../controller/controller');

r.post('/EmployeData', controller.EmployeData)

r.post('/deparment', controller.deparment)

r.get('/EmployeGetData', controller.EmployeGetData)

module.exports = r;