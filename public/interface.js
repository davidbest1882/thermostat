$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('/return_temp', function(data) {
    $('#temp').text(data);
    thermostat.savedTemp(data);
  })
  $('#temp').attr('class', thermostat.energyUsage());

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temp').text(data.main.temp);
    })
  })

  $('#temp-up').click(function() {
    thermostat.tempUp();
    updateTemp();
  })

  $('#temp-down').click(function() {
    thermostat.tempDown();
    updateTemp();
  })

  $('#temp-reset').click(function() {
    thermostat.tempReset();
    updateTemp();
  })

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSavingOn();
    $('#powersaving-status').text('on')
    updateTemp();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingOff();
    $('#powersaving-status').text('off')
    updateTemp();
  })

  function updateTemp() {
    $('#temp').text(thermostat.temp());
    $('#temp').attr('class', thermostat.energyUsage());
    $.ajax({
     type: "POST",
     url: "/store",
     data: { temperature: $('#temp').text(),
       psm_status: $('#powersaving-status').text() }
   });
  };

});
