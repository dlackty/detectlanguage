var detectlanguage = require('../lib')(process.env.DETECTLANGUAGE_API_KEY);

var texts = ['šešios žąsys', 'Strč prst skrz krk'];

detectlanguage.detect(texts).then(function(result) {
  console.log(JSON.stringify(result, null, 2));
});
