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

export class ConfigFolder {
    Folder: FolderRoot;
    Indexdb : string
    constructor() {
        this.Folder = new FolderRoot();
        this.Indexdb = this.Folder.DB+"/index.db"
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
