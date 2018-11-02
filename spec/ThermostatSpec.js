'use strict';

describe('test Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Check default thermostat value is set to 20', function() {
    expect(thermostat.temp()).toEqual(20);
  });

  it('Temperture UP set temp to 21',function() {
    thermostat.tempUp();
    expect(thermostat.temp()).toEqual(21);
  });

  it('Temperture Down set temp to 19',function() {
    thermostat.tempDown();
    expect(thermostat.temp()).toEqual(19);
  });

  it('Temperature check minimum value 10', function() {
    for (var i = 0; i < 10; i++) thermostat.tempDown();
    expect(thermostat.temp()).toEqual(10);
  });

  it('Temperature returns minimum temp message', function() {
    for (var i = 0; i < 10; i++) thermostat.tempDown();
    expect(thermostat.tempDown()).toEqual("The minimum temperature cannot be less than 10");
  });

  it('check power saving is On by default', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('can turn off power saving', function() {
    thermostat.turnPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can turn on power saving', function(){
    thermostat.turnPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.turnPowerSavingOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  describe('When power saving is on', function() {
    it('temp cannot go above 25', function(){
      for (var i = 0; i < 6; i++) thermostat.tempUp();
      expect(thermostat.temp()).toEqual(25);
    });
  });

  describe('when power saving is off', function() {
    it('has a maximum temp of 32', function() {
      thermostat.turnPowerSavingOff();
      for (var i = 0; i < 15; i++) thermostat.tempUp();
      expect(thermostat.temp()).toEqual(32);
    });
  });

  it('can reset the temperature to 20', function() {
    thermostat.tempUp();
    thermostat.tempReset();
    expect(thermostat.temp()).toEqual(20);
  });

  describe('checks the current energy usage', function(){
    describe('if temp is below 18', function() {
      it('it returns low-usage', function() {
        for (var i = 0; i < 3; i++) thermostat.tempDown();
        expect(thermostat.energyUsage()).toEqual("low-usage")
      });
    });

    describe('if temp is 18 to 24', function() {
      it('it returns medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual("medium-usage")
      });
    });

    describe('if temp is 25 and over', function() {
      it('it returns high-usage', function() {
        for (var i = 0; i < 5; i++) thermostat.tempUp();
        expect(thermostat.energyUsage()).toEqual("high-usage")
      });
    });
  });



});
