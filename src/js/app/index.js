var config = require('../config'),
    Keen   = require('keen-js');
$(function () {
  CommonWeb.Keen.Client = new Keen(config.keen);
  CommonWeb.addGlobalProperties(CommonWeb.Keen.globalProperties);
  CommonWeb.Callback = CommonWeb.Keen.Callback;
  CommonWeb.trackSession();
  CommonWeb.trackPageview();
  CommonWeb.trackClicks($('a, button'));
  CommonWeb.trackInputChanges();

  $('[data-toggle="tooltip"]').tooltip()
})
