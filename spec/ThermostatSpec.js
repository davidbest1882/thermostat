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

  it('Temperture Down set temp to 19',function() {
    thermostat.tempDown();
    expect(thermostat.temp()).toEqual(19)
  });

  it('Temperature check minimum value 10', function() {
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    expect(thermostat.temp()).toEqual(10)
  });

  it('Temperature returns minimum temp message', function() {
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    thermostat.tempDown();
    expect(thermostat.tempDown()).toEqual("The minimum temperature cannot be less than 10")
  });

});
