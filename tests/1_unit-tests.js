const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    // #1
    test('convertHandler should correctly read a whole number input.', function () {
        assert.equal(12, convertHandler.getNum('12'), 'getNum should return a whole number = 12');
    });
    // #2
    test('convertHandler should correctly read a decimal number input.', function () {
        assert.equal(12.5, convertHandler.getNum('12.5'), 'getNum should return a decimal number = 12.5');
    });
    // #3
    test('convertHandler should correctly read a fractional input.', function () {
        assert.equal(2.5, convertHandler.getNum('5/2'), 'getNum should return 12');
    });
    // #4
    test('convertHandler should correctly read a fractional input with a decimal.', function () {
        assert.equal(2, convertHandler.getNum('5.4/2.7'), 'getNum should return 2');
    });
    // #5
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function () {
        assert.equal(false, convertHandler.getNum('5.4/2.7/2'), 'getNum should return false');
    });
    // #6
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
        assert.equal(1, convertHandler.getNum('kg'), 'getNum should return 1');
    });
    // #7
    test('convertHandler should correctly read each valid input unit.', function () {
        assert.equal('gal', convertHandler.getUnit('gal')[0]);
        assert.equal('km', convertHandler.getUnit('km')[0]);
        assert.equal('lbs', convertHandler.getUnit('lbs')[0]);
        assert.equal('kg', convertHandler.getUnit('kg')[0]);
        assert.equal('mi', convertHandler.getUnit('mi')[0]);
        assert.equal('L', convertHandler.getUnit('l')[0]);
    });
    // #8
    test('convertHandler should correctly return an error for an invalid input unit.', function () {
        assert.equal(false, convertHandler.getUnit('kgl'), 'getNum should return false');
    });
    // #9
    test('convertHandler should return the correct return unit for each valid input unit.', function () {
        assert.equal('gal', convertHandler.getReturnUnit('L')[0]);
        assert.equal('km', convertHandler.getReturnUnit('mi')[0]);
        assert.equal('lbs', convertHandler.getReturnUnit('kg')[0]);
        assert.equal('kg', convertHandler.getReturnUnit('lbs')[0]);
        assert.equal('mi', convertHandler.getReturnUnit('km')[0]);
        assert.equal('L', convertHandler.getReturnUnit('gal')[0]);
    });
    // #10
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function () {
        assert.equal('gallons', convertHandler.spellOutUnit('gal'));
        assert.equal('kilometers', convertHandler.spellOutUnit('km'));
        assert.equal('pounds', convertHandler.spellOutUnit('lbs'));
        assert.equal('kilograms', convertHandler.spellOutUnit('kg'));
        assert.equal('miles', convertHandler.spellOutUnit('mi'));
        assert.equal('liters', convertHandler.spellOutUnit('L'));
    });
    // #11
    test('convertHandler should correctly convert gal to L.', function () {
        assert.equal(3.78541, convertHandler.convert('1', "gal"), 'getNum should convert gal');
    });
    // #12
    test('convertHandler should correctly convert L to gal.', function () {
        assert.equal(0.26417, convertHandler.convert('1', 'L'), 'getNum should convert gal');
    });
    // #13
    test('convertHandler should correctly convert mi to km.', function () {
        assert.equal(3.21868, convertHandler.convert('2', 'mi'), 'getNum should convert gal');
    });
    // #14
    test('convertHandler should correctly convert km to mi', function () {
        assert.equal(1.86412, convertHandler.convert('3', 'km'), 'getNum should convert gal');
    });
    // #15
    test('convertHandler should correctly convert kg to lbs.', function () {
        assert.equal(8.81850, convertHandler.convert('4', 'kg'), 'getNum should convert gal');
    });
    // #16
    test('convertHandler should correctly convert lbs to kg', function () {
        assert.equal(2.26796, convertHandler.convert('5', 'lbs'), 'getNum should convert gal');
    });
});
