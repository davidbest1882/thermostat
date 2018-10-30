'use strict';

describe('test Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Check default thermostat value is set to 20', function() {
    expect(thermostat.temp()).toEqual(20)
  });

  it('Temperture UP set temp to 21',function() {
    thermostat.tempUp();
    expect(thermostat.temp()).toEqual(21)
  });

});
