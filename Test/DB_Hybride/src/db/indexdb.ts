import {createConnection} from "typeorm";
import {ConfigFolder,configdb} from  '../Global';
import {Index} from  '../entity/index';
export class Indexdb {
    db : configdb;
    constructor() {
        let Config = new ConfigFolder()
        this.db = Config.Indexdb;
    }

    async CreateUser(login : string,pwdclaire : string,isP : boolean,IsC : boolean) :  Promise<number> {
        let index = new Index()
        var out : Index
        index.CreateUser(login,pwdclaire,isP,IsC)
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            out = await connection.manager.save(index);
            console.log("Photo has been saved");
            await connection.close()
        }).catch(error => console.log(error));
        return out.id;
    }

    async GetProfileByLogin(login : string) : Promise<Index[]> {
        var profiles : Index[] 
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            let IndexRepository = connection.getRepository(Index)
            profiles = await IndexRepository.find({login : "Admin"});
            await connection.close()
            console.log("Profiles : " );
            console.log(profiles)
            
        }).catch(error => console.log(error));
        return profiles; 
    }

    async UnActiveUserById(id : number) : Promise<boolean>  {
        var status : boolean = false;
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            let IndexRepository = connection.getRepository(Index)
            let profile = await IndexRepository.findOne({id : id});
            console.log("profile à désactiver : " );
            console.log(profile)
            if(profile.isActive == true){
                profile.isActive=false
                console.log("profile désactivé : " );
                console.log(profile)
                await IndexRepository.save(profile);
                console.log("profile désactivé save" );
                status = true
            } 
            await connection.close()
        }).catch(error => console.log(error));

        return status
    }
    async ActiveUserById(id : number) : Promise<boolean>  {
        var status : boolean = false;
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            let IndexRepository = connection.getRepository(Index)
            let profile = await IndexRepository.findOne({id : id});
            console.log("profile à activer : " );
            console.log(profile)
            if(profile.isActive == false){
                profile.isActive=true
                console.log("profile activé : " );
                console.log(profile)
                await IndexRepository.save(profile);
                console.log("profile activé save" );
                status = true
            } 
            await connection.close()
        }).catch(error => console.log(error));

        return status
    }
    async DelUserById(id : number) : Promise<boolean>  {
        var status : boolean = false;
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            let IndexRepository = connection.getRepository(Index)
            let profile = await IndexRepository.findOne({id : id});
            
            if(profile!=undefined){
                console.log("profile à supprimer : " );
                console.log(profile)
                await IndexRepository.remove(profile)
                console.log("profile supprimé : " );
                status = true
            } else {
                console.log("profile à supprimer non trouvé" );
            }
            await connection.close()
        }).catch(error => console.log(error));

        return status
    }

    async GetUserById(id : number) : Promise<Index>  {
        var profile : Index;
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            console.log("Recherche de l'ID : "+ id.toString() );
            let IndexRepository = connection.getRepository(Index)
             profile = await IndexRepository.findOne({id : id});

            if(profile!=undefined){
                console.log("profile trouvé : " );
                console.log(profile)
            } else {
                console.log("profile non trouvé");
            }
            await connection.close()
        }).catch(error => console.log(error));

        return profile
    }
    async GetUserByLogin(login : string) : Promise<Index[]>  {
        var profiles : Index[];
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            console.log("Recherche du login : "+ login );
            let IndexRepository = connection.getRepository(Index)
            profiles = await IndexRepository.find({login : login});
            if(profiles!=undefined){
                console.log("profiles trouvés : " );
                console.log(profiles)
            } else {
                console.log("profiles non trouvé");
            }
            await connection.close()
        }).catch(error => console.log(error));

        return profiles
    }

}
