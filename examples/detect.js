var DetectLanguage = require('../lib/');

var detectlanguage = new DetectLanguage(process.env.DETECTLANGUAGE_API_KEY);

var text = "Hello! How are you?";

detectlanguage.detect(text).then(function(result) {
  console.log(JSON.stringify(result, null, 2));
});
