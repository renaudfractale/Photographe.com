var mongoose = require('mongoose');
mongoose.connect('mongodb://bdphoto:qDeSBIUq1hxXiH6ZvGgkgXlXjmsytpikCe2BviG9gttRSkIYC62k94JL9XYMYvUnNX9VXJEtDWRsGnbgXEu7pA==@bdphoto.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var kittySchema = new mongoose.Schema({
        name: String
      });
    
      var Kitten = mongoose.model('Kitten', kittySchema);

    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'
    
    
    kittySchema.methods.speak = function () {
        var greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
      }
    
    
    var Kitten = mongoose.model('Kitten', kittySchema);


      var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak();
    
    
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
      });
    
      Kitten.find({ name: /^fluff/ }, callback);
});

