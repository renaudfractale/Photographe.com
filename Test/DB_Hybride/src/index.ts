import * as fs from 'fs';
import * as fs_extra from 'fs-extra';
import {ConfigFolder,Utilitaire} from  './Global';
import {Indexdb} from  './db/indexdb';

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

async function InitSite(){
    CreateFolder(Config.Folder.DB)
    CreateFolder(Config.Folder.Photograhes)
    CreateFolder(Config.Folder.Clients)
    let indexdb = new Indexdb()
    let id1 : number = await indexdb.CreateUser("Admin","Admin",false,true)
    console.log("id1 : " );
    console.log(id1)
    let id2 : number = await indexdb.CreateUser("Admin","Admin",false,true)
    console.log("id2 : " );
    console.log(id2)
    let profiles = await indexdb.GetProfileByLogin("Admin")
    console.log("Profiles 2: " );
    console.log(profiles)
    console.log("*****************   1  *******************");
    console.log(await indexdb.UnActiveUserById(id1))
    console.log("*****************   2  *************************");
    console.log(await indexdb.ActiveUserById(id1))
    console.log("*****************   3  *************************");
    console.log(await indexdb.ActiveUserById(id2))
    console.log("*****************   4  *************************");
    console.log(await indexdb.DelUserById(id2))
    console.log("*****************   5  *************************");
    console.log(await indexdb.DelUserById(id2))
    console.log("*****************   6  *************************");
    let id3 : number = await indexdb.CreateUser("User","User",false,true)
    console.log("id3 : " );
    console.log(id3)
    console.log("*****************   7  *************************");
    let id4 : number = await indexdb.CreateUser("Admin","Admin",false,true)
    console.log("id4 : " );
    console.log(id4)
    console.log("*****************   8  *************************");
    let P1 = await  indexdb.GetUserByLogin("Admin")
    console.log("out P1: " );
    console.log(P1)
    console.log("*****************   9  *************************");
    let P2 = await  indexdb.GetUserByLogin("User")
    console.log("out P2: " );
    console.log(P2)
    console.log("*****************   10  *************************");
    let P3 = await  indexdb.GetUserByLogin("User3")
    console.log("out P3: " );
    console.log(P3)

}

function  ResteSite(){
    fs_extra.removeSync(Config.Folder.DB);
    //console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
}
ResteSite();
InitSite();
//ResteSite();