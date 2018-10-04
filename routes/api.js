/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res) {
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      console.log(initUnit, RegExp('^(kg|mi|gal|lbs|km|l)$', 'gm').test(initUnit));

      if (!RegExp('^(kg|mi|gal|lbs|km|l)$', 'gm').test(initUnit)) {
        return res.json('invalid unit');
      } else {
        return res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: toString
        })
      }

      // {initNum: 3.1, initUnit: 'mi', returnNum: 5, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
    });

};