var config = require('../config'),
    Keen   = require('keen-js');

require('typed.js');

$(function () {
  var keenClient = new Keen(config.keen);
  CommonWeb.Keen.Client = keenClient;
  CommonWeb.addGlobalProperties(CommonWeb.Keen.globalProperties);
  CommonWeb.Callback = CommonWeb.Keen.Callback;
  CommonWeb.trackSession();
  CommonWeb.trackPageview();
  CommonWeb.trackClicks($('a, button'));
  CommonWeb.trackInputChanges();

  $('[data-toggle="tooltip"]').tooltip();

  $('.typed').typed({
    strings: ['code', 'notes', 'blog', 'work'],
    cursorChar: '_',
    loop: true,
    typeSpeed: 100,
    backDelay: 2000,
    backSpeed: 50
  });

  var hideAlert = function() {
    $('.email-alert').addClass('hide');
  };

  $('#email')
  .on('keyup', hideAlert)
  .on('click', hideAlert)
  .on('keyup', function(e) {
    var code = e.which;
    if(code==32||code==13||code==188||code==186){
        $('#email-reminder').click();
    }
  });

  $('#email-reminder').click(function(evt) {
    hideAlert();
    var email = $('#email').val();
    if (email) {
      console.log('email:', email);
    }

    var cb = function(err, resp) {
      window.location = "/thanks";
    };

    if (email !== "") {
      if (/^\S+@\S+\.\S+$/.test(email)) {
        keenClient.addEvent("email", {email:email});
        cb();
      } else $('.email-alert').removeClass('hide');
    } else cb();

    return false;
  });
});
