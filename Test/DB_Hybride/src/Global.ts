import { realpathSync } from "fs";

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
    constructor() {
        this.Folder = new FolderRoot();
        this.Indexdb = new configdb("index",this.Folder.DB+"/index.db",["index"])
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
}
