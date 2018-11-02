'use strict';

function Thermostat(){
  this._powerSavingOn = true;
  this._MIN_TEMP = 10;
  this._MAX_TEMP_PSM_ON = 25;
  this._MAX_TEMP_PSM_OFF = 32;
  this._MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this._DEFAULT_TEMP = 20;
  this._currTemp = this._DEFAULT_TEMP;
}

Thermostat.prototype.temp = function () {
  return this._currTemp;
};

Thermostat.prototype.tempUp = function () {
  if (this.isMaximumTemperature()) {
    return;
  } else {
    ++this._currTemp;
  }
};

Thermostat.prototype.tempDown = function () {
  if (this._currTemp > this._MIN_TEMP) {
    --this._currTemp;
  } else {
    return "The minimum temperature cannot be less than 10";
  }
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSavingOn;
};

Thermostat.prototype.turnPowerSavingOff = function () {
  this._powerSavingOn = false;
};

Thermostat.prototype.turnPowerSavingOn = function () {
  this._powerSavingOn = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingOn() === false) {
    return this._currTemp === this._MAX_TEMP_PSM_OFF;
  }
  return this._currTemp === this._MAX_TEMP_PSM_ON;
};

Thermostat.prototype.tempReset = function () {
  this._currTemp = this._DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this._currTemp < this._MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this._currTemp >= this._MAX_TEMP_PSM_ON) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  }
};

Thermostat.prototype.savedTemp = function (data) {
  this._currTemp = data;
};
