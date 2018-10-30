'use strict';

describe('Feature test', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat is set to 20', function() {
    expect(thermostat.temp()).toEqual(20)
  });

  it('Temperture UP set temp to 21',function() {
    thermostat.tempUp();
    expect(thermostat.temp()).toEqual(21)
  });

  it('Temperture Down set temp to 19',function() {
    thermostat.tempDown();
    expect(thermostat.temp()).toEqual(19)
  });


});
