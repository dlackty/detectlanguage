var DetectLanguage = require('../lib/');

var detectlanguage = new DetectLanguage(process.env.DETECTLANGUAGE_API_KEY);

detectlanguage.userStatus().then(function(result) {
  console.log(JSON.stringify(result, null, 2));
});
