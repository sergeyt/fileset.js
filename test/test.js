var fs = require('../index');

fs(['**/*.cs']).then(function(files){
  files.forEach(function(s){
    console.log(s);
  });
});
