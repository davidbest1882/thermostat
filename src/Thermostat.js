'use strict';

function Thermostat(){
  this._currTemp = 20;
}

Thermostat.prototype.temp = function () {
  return this._currTemp;
};

Thermostat.prototype.tempUp = function () {
  ++this._currTemp;
};

Thermostat.prototype.tempDown = function () {
  if (this._currTemp > 10) {
    --this._currTemp;
  } else {
    return "The minimum temperature cannot be less than 10";
  }
};
