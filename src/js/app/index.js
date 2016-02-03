var config = require('../config'),
    Keen   = require('keen-js');

require('typed.js');

$(function () {
  CommonWeb.Keen.Client = new Keen(config.keen);
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
});
