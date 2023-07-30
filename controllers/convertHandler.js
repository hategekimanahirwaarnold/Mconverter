function ConvertHandler() {

  this.getNum = function (input) {
    //const regex = /^\d+(.\d+)?(\/\d+(.\d+)?)?/g;
    let regex = /^[^a-z]+/i;
    let result = input.match(regex);
    //console.log("result: ", result);
    if (result !== null) {
      ////console.log("within initNum: ", input, "result: ", result);
      let result2 = result[0].split('/');
      //console.log("second result: ", result2);
      if (result2.length === 2) {
        let first = result2[0] * 1;
        let second = result2[1] * 1;
        if (second !== 0) {
          let answer = first / second;
          return answer
        } else {
          return false
        }
      } else if (result2.length > 2) {
        return false
      } else {
        return result[0]
      }
    } else {
      //console.log("No non-word characters found at the beginning of the input string.");
      if (this.getUnit(input)) {
        return 1
      } else {
        let rege = /\d/g;
        let findNumber = rege.test(input);
        //console.log("wer are in test", findNumber);
        if (findNumber) {
          return false
        } else {
          return true
        }
      }
    }
  };

  this.getUnit = function (input) {
    const regex = /[a-z]+$/gi;
    let result = input.match(regex);
    //console.log("the unit part: ", result);
    if(result) {
      //console.log("the unit part: ", result);
      switch(result[0].toLowerCase()) {
        case "gal":
          return ["gal", "gallons"]
          break;
        case "km":
          return ["km", "kilometers"]
          break;
        case "lbs":
          return ["lbs", "pounds"]
          break;
        case "kg": 
          return ["kg", "kilograms"];
          break;
        case "mi": 
          return ["mi", "miles"];
          break;
        case "l": 
          return ["L", "liters"];
          break;
        default: 
         return false
      }
    //  return result[0]
    } else {
      //console.log("no unit part")
      return false;
    }
  };

  this.getReturnUnit = function (initUnit) {
    //console.log("sent init unit: ", initUnit)
    switch(initUnit) {
      case 'gal': 
        return ['L', 'liters']
        break;
      case 'km': 
        return ['mi', 'miles']
        break;
      case 'lbs': 
      return ['kg', 'kilograms']
      break;
      case "kg": 
        return ["lbs", "pounds"];
        break;
      case "mi": 
        return ["km", "kilometers"];
        break;
      case "L": 
        return ["gal", "gallons"];
        break;
    }
  };

  this.spellOutUnit = function (unit) {
    //console.log("sent init unit: ", initUnit)
    switch(unit) {
      case 'gal': 
        return "gallons"
        break;
      case 'km': 
        return "kilometers"
        break;
      case 'lbs': 
      return "pounds"
      break;
      case "kg": 
        return "kilograms"
        break;
      case "mi": 
        return "miles"
        break;
      case "L": 
        return "liters"
        break;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    //console.log("sent in convert: ", initUnit)
    switch(initUnit) {
      case 'gal': 
        return parseFloat((initNum * galToL).toFixed(5))
        break;
      case 'km': 
        return   parseFloat((initNum / miToKm).toFixed(5)) 
        break;
      case 'lbs': 
      return parseFloat((initNum * lbsToKg).toFixed(5))
      break;
      case "kg": 
        return parseFloat((initNum / lbsToKg).toFixed(5))
        break;
      case "mi": 
        return parseFloat((initNum * miToKm).toFixed(5))
        break;
      case "L": 
        return parseFloat((initNum / galToL).toFixed(5))
        break;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
