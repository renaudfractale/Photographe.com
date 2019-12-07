import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Md5} from 'ts-md5/dist/md5';

import {ConfigFolder, Utilitaire} from  '../Global';

@Entity()
export class Index {    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    isPhotographe: boolean;

    @Column()
    isClient: boolean;
    
    @Column()
    isActive: boolean;

    CheckPassword(pwdclair : string) : boolean {
        return this.CreatePassword(this.login,pwdclair)===this.password
    }

    CreatePassword(login : string,pwdclair : string) : string{
        let cst = ")àç_è-(é&=)àç_è"
        let pwdchiffre = <string>Md5.hashAsciiStr(pwdclair+cst+login) 
        return pwdchiffre;
    }

    ChangeLoginPwd(pwdoldclaire : string, loginnew : string, pwdnewclaire : string) : boolean {
        if(this.CheckPassword(pwdoldclaire)){
            let NewpwdChiffre = this.CreatePassword(loginnew,pwdnewclaire);
            this.login = loginnew;
            this.password = NewpwdChiffre;
            return true 
        } else {
            return false
        }
    }

    GetPathDb_Photographe() : string{
        let Config = new ConfigFolder()
        let  Utils = new Utilitaire()
        return Config.Folder.Photograhes+"/P_"+Utils.int2str6d(this.id)+"/Photographe.db";
    }

    GetPathDb_Client() : string{
        let Config = new ConfigFolder()
        let  Utils = new Utilitaire()
        return Config.Folder.Clients+"/C_"+Utils.int2str6d(this.id)+"/Client.db";
    }

    CreateUser(login : string,pwdclaire: string,isP :  boolean,IsC: boolean) {
        this.login = login
        this.password = this.CreatePassword(login,pwdclaire);
        this.isPhotographe = isP
        this.isClient = IsC
        this.isActive = true
    }
}