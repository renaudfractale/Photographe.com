import * as fs from 'fs';
import * as fs_extra from 'fs-extra';

export class FolderRoot {
    //member variables
    Photograhes: string;
    Clients: string;
    DB : string;
    constructor() {
        this.DB =  "./DB";
        this.Photograhes  =  "./DB/Photograhes";
        this.Clients =  "./DB/Clients";
    }
}

export class configdb{
    title : string;
    pathdb : string;
    namets : string[];
    entities : string[] = [];
    constructor(name : string , path : string,names: string[] ){
        this.pathdb = path
        this.namets = names
        names.forEach(name =>{
            this.entities.push("./src/entity/"+name+".ts")
        })
    }
}



export class ConfigFolder {
    Folder: FolderRoot;
    Indexdb : configdb
    profilePhotographedb : configdb
    constructor() {
        this.Folder = new FolderRoot();
        this.Indexdb = new configdb("index",this.Folder.DB+"/index.db",["index"])
    }

    InitprofilePhotographedb(id : number){
        let Utils = new Utilitaire()
        let rootfolder : string  = this.Folder.Photograhes+"/P_"+Utils.int2str6d(id)
        Utils.CreateFolder(rootfolder)
        this.profilePhotographedb = new configdb(
            "profilePhotographe",
            rootfolder+"/photographe.db",
            ["profilePhotographe"])
    }
}

export class Utilitaire {
    int2str6d(no : number ) : string{
        let str : string= no.toString()
        let nbdigite : number= 6
        while(str.length<nbdigite){
            str="0"+str
        }
        return str;
    }
    CreateFolder(path : string) : boolean {
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
    RemoveFolder(path : string) {
        fs_extra.removeSync(path);
    }
    
}
