import * as fs from 'fs';
import * as fs_extra from 'fs-extra';
import {createConnection} from "typeorm";
import {ConfigFolder,Utilitaire} from  './Global';
import {Index} from  './entity/index';

var Config = new ConfigFolder()
var Utils = new Utilitaire()
function CreateFolder(path : string) : boolean {
    console.log("Demande de création du dossier : "+ path)
    try {
        if (!fs.existsSync(path)){
          fs.mkdirSync(path)
          console.log("Céation du dossier : "+ path)
          return true
        } else {
            console.log("Le dossier : "+ path+ " existe déjà, on ne fait rien")
        }
      } catch (err) {
        console.error(err)
      }
      return false
}


class Indexdb {
    path : string;
    constructor() {
        let Config = new ConfigFolder()
        this.path = Config.Indexdb;
    }

    CreateUser(login : string,pwdclaire : string,isP : boolean,IsC : boolean) : number {
        let index = new Index()
        index.CreateUser(login,pwdclaire,isP,IsC)
        createConnection({
            type: "sqlite",
            database  : this.path,
            entities: [
                "./src/entity/index.ts"
             ],
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            await connection.manager.save(index);
            console.log("Photo has been saved");
        }).catch(error => console.log(error));
        return 1;
    }


}


function InitSite(){
    CreateFolder(Config.Folder.DB)
    CreateFolder(Config.Folder.Photograhes)
    CreateFolder(Config.Folder.Clients)
    let indexdb = new Indexdb()
    indexdb.CreateUser("Admin","Admin",false,true)
}

function  ResteSite(){
    fs_extra.removeSync(Config.Folder.DB);
    //console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
}
InitSite();
//ResteSite();