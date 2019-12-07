import {createConnection, NamingStrategyInterface} from "typeorm";
import {ConfigFolder,configdb} from  '../Global';
import {profilePhotographe} from  '../entity/profilePhotographe';

export class profilePhotographedb {
    db : configdb;
    idIndex : number 
    constructor(id : number) {
        let Config = new ConfigFolder()
        this.idIndex=id;
        this.db = Config.Indexdb;
    }

}