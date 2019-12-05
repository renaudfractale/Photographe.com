var watch = require('node-watch');
 
watch('./Folder', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
});