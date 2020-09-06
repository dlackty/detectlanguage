var detectlanguage = require('../lib')(process.env.DETECTLANGUAGE_API_KEY);

detectlanguage.languages().then(function(result) {
  console.log(JSON.stringify(result, null, 2));
});
