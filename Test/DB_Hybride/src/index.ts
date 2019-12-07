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
async function TestIndex(db : Indexdb ){
    let id1 : number = await db.CreateUser("Admin","Admin",false,true)
    console.log("id1 : " );
    console.log(id1)
    let id2 : number = await db.CreateUser("Admin","Admin",false,true)
    console.log("id2 : " );
    console.log(id2)
    let profiles = await db.GetProfileByLogin("Admin")
    console.log("Profiles 2: " );
    console.log(profiles)
    console.log("*****************   1  *******************");
    console.log(await db.UnActiveUserById(id1))
    console.log("*****************   2  *************************");
    console.log(await db.ActiveUserById(id1))
    console.log("*****************   3  *************************");
    console.log(await db.ActiveUserById(id2))
    console.log("*****************   4  *************************");
    console.log(await db.DelUserById(id2))
    console.log("*****************   5  *************************");
    console.log(await db.DelUserById(id2))
    console.log("*****************   6  *************************");
    let id3 : number = await db.CreateUser("User","User",false,true)
    console.log("id3 : " );
    console.log(id3)
    console.log("*****************   7  *************************");
    let id4 : number = await db.CreateUser("Admin","Admin",false,true)
    console.log("id4 : " );
    console.log(id4)
    console.log("*****************   8  *************************");
    let P1 = await  db.GetUserByLogin("Admin")
    console.log("out P1: " );
    console.log(P1)
    console.log("*****************   9  *************************");
    let P2 = await  db.GetUserByLogin("User")
    console.log("out P2: " );
    console.log(P2)
    console.log("*****************   10  *************************");
    let P3 = await  db.GetUserByLogin("User3")
    console.log("out P3: " );
    console.log(P3)
    console.log("*****************   11  *************************");
    let P4 = await  db.GetUserById(id2)
    console.log("out P4: " );
    console.log(P4)
    console.log("*****************   12  *************************");
    let P5 = await  db.GetUserById(id4)
    console.log("out P5: " );
    console.log(P5)
}
async function InitSite(){
    CreateFolder(Config.Folder.DB)
    CreateFolder(Config.Folder.Photograhes)
    CreateFolder(Config.Folder.Clients)
    await TestIndex(new Indexdb)

}

function  ResteSite(){
    fs_extra.removeSync(Config.Folder.DB);
    //console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
}
ResteSite();
InitSite();
//ResteSite();