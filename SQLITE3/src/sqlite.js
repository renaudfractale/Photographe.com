console.log("hello WWW !")
//const sqlite3 = require('sqlite3').verbose();

/*

let db = new sqlite3.Database('./db/sqlite3.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});*/
/*

 syc function GetListeTable(){
    var req = "SELECT name FROM  sqlite_master WHERE  type ='table' AND  name NOT LIKE 'sqlite_%';";
    db.serialize(() => {
        db.all(req, (err, rows) => {
            if (err){
              throw err;
            }
            console.log(rows);
            callback(rows);
        });
    });
}

var tableliste = GetListeTable();
console.log("*************");
console.log(tableliste);
/*if(tableliste.length==1){
    db.serialize(() => {
        // Queries scheduled here will be serialized.
        db.run('CREATE TABLE greetings(message text)')
          .run(`INSERT INTO greetings(message)
                VALUES('Hi'),
                      ('Hello'),
                      ('Welcome')`)
          .each(`SELECT message FROM greetings`, (err, row) => {
            if (err){
              throw err;
            }
            console.log(row.message);
          });
    });
//}
console.log("+++++++++++++++");
var tableliste = GetListeTable();
console.log(tableliste);

// close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
});*/








//https://stackoverflow.com/questions/39106668/node-js-sqlite3-read-all-records-in-table-and-return

/*
async function readRecordsFromMediaTable (){
    return new Promise(function (resolve, reject) {
      var responseObj;
      db.all("SELECT name FROM  sqlite_master WHERE  type ='table' AND  name NOT LIKE 'sqlite_%'", null, function cb(err, rows) {
        if (err) {
          responseObj = {
            'error': err
          };
          reject(responseObj);
        } else {
          responseObj = {
            statement: this,
            rows: rows
          };
          resolve(responseObj);
        }
        db.close();
      });
    });
  };


  var AAA = await readRecordsFromMediaTable();

  console.log(AAA)*/

  //https://stackoverflow.com/questions/39106668/node-js-sqlite3-read-all-records-in-table-and-return
/*
  var readRecordsFromMediaTable = function(callback){
  
      var db = new sqlite3.Database("./db/sqlite3.db", sqlite3.OPEN_READONLY);
  
      db.serialize(function() {
  
          db.all("SELECT name FROM  sqlite_master WHERE  type ='table' AND  name NOT LIKE 'sqlite_%'", function(err, allRows) {
  
              if(err != null){
                  console.log(err);
                  callback(err);
              }
  
              console.log(allRows);
  
              callback(allRows);
              db.close();
  
          });
  
  
      });
  
  };

  console.log(readRecordsFromMediaTable());*/

//https://stackoverflow.com/questions/15575914/how-to-read-a-sqlite3-database-using-node-js-synchronously

var sqlite = require('sqlite-sync'); //requiring
 
//Connecting - if the file does not exist it will be created
sqlite.connect('./db/sqlite3.db'); 
 

var aa =sqlite.run("SELECT name FROM  sqlite_master WHERE  type ='table' AND  name NOT LIKE 'sqlite_%'");

console.log(aa);

// Closing connection 
sqlite.close();
