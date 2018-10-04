/*
 *
 *
 *       Complete the handler logic below
 *       
 *       
 */

function ConvertHandler() {

  this.getNum = function (input) {
    if (input.indexOf('/' >= 0)) {
      const arr = input.replace(/[A-Za-z]/g, '').split('/');
      // console.log(arr)
      var result = arr[0] / arr[1];

    } else {
      var result = input.replace(/[A-Za-z]/g, '');
    }

    return parseFloat(result);
  };

  this.getUnit = function (input) {
    var result = input.replace(/([^A-Za-z])/g, '');
    return result.toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    var result;
    if (initUnit === 'gal') {
      result = 'l';
    } else if (initUnit === 'kg') {
      result = 'lbs';
    } else if (initUnit === 'mi') {
      result = 'km';
    } else if (initUnit === 'l') {
      result = 'gal';
    } else if (initUnit === 'lbs') {
      result = 'kg';
    } else if (initUnit === 'km') {
      result = 'mi';
    } else {
      result = '';
    }

    return result.toLowerCase();
  };

  this.spellOutUnit = function (unit) {
    const list = {
      gal: 'gallons',
      L: 'liters',
      kg: 'kilograms',
      lbs: 'pounds',
      mi: 'miles',
      km: 'kilometres'
    }
    var result = list[unit];

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit) {
      case 'gal':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum / miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = 0;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };

}

module.exports = ConvertHandler;