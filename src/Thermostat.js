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
