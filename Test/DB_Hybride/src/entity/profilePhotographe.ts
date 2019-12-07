import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

//import {ConfigFolder, Utilitaire} from  '../Global';

@Entity()
export class profilePhotographe {    

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    facebook : string

    @Column()
    siteweb : string
    
    @Column()
    instagram : string

    @Column()
    emailcontact : string
    
    @Column()
    phonecontact : string
    
    @Column()
    photologo : string
    
    @Column()
    photoprofile : string
    
    @Column()
    societe : string
    
}