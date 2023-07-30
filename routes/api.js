'use strict';
const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert', (req, res) => {
    const inputData = req.query.input;
    let initNum = convertHandler.getNum(inputData);
    let initUnit = convertHandler.getUnit(inputData);
    //console.log("initnNum: ", initNum, "initUnit", initUnit);
    let response;
    if (!initNum && !initUnit ) {
    response = "invalid number and unit"
    } else if (!initNum) {
      response = "invalid number"
    } else if (!initUnit) {
      response ="invalid unit"
    } else {
      let returnUnit = convertHandler.getReturnUnit(initUnit[0]);
      let returnNum = convertHandler.convert(initNum, initUnit[0])
      response = {
        "initNum": initNum,
        "initUnit": initUnit[0],
        "returnNum": returnNum,
        "returnUnit": returnUnit[0],
        "string": `${initNum} ${initUnit[1]} converts to ${returnNum} ${returnUnit[1]}` 
      };
    }
    res.status(200).send(response);
  });
};
