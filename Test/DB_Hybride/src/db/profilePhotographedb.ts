import {createConnection} from "typeorm";
import {ConfigFolder,configdb} from  '../Global';
import {profilePhotographe} from  '../entity/profilePhotographe';

export class profilePhotographedb {
    db : configdb;
    idIndex : number 
    constructor(id : number) {
        let Config = new ConfigFolder()
        this.idIndex=id;
        Config.InitprofilePhotographedb(id)
        this.db = Config.profilePhotographedb;
        console.log(this.db);
        
    }

    async CreateProfile(firstname: string,
         lastname: string,
          facebook: string,
          siteweb : string,
          instagram : string,
          emailcontact : string,
          phonecontact : string,
           photologo: string,
           photoprofile : string
           ,societe : string ) :  Promise<number> {
        let Profile = new profilePhotographe()
        Profile.lastname=lastname
        Profile.firstname=firstname
        Profile.facebook=facebook
        Profile.siteweb=siteweb
        Profile.instagram=instagram
        Profile.phonecontact=phonecontact
        Profile.photologo=photologo
        Profile.photoprofile=photoprofile
        Profile.societe=societe
        Profile.emailcontact=emailcontact
        
        var out : profilePhotographe

        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": true,
        }).then(async connection => {
            out = await connection.manager.save(Profile);
            console.log("Photo has been saved");
            await connection.close()
        }).catch(error => console.log(error));
        return out.id;
    }

    async GetProfile() : Promise<profilePhotographe> {
        var profile : profilePhotographe
        await createConnection({
            type: "sqlite",
            database  :  this.db.pathdb,
            entities: this.db.entities,
            "logging": false,
            "synchronize": false,
        }).then(async connection => {
            let IndexRepository = connection.getRepository(profilePhotographe)
            profile = await IndexRepository.findOne(1);
            await connection.close()
            console.log("Profile : " );
            console.log(profile)
            
        }).catch(error => console.log(error));
        return profile; 
    }

}