import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Photo} from "./Photo";

@Entity()
export class PhotoMetadata {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    height: number;

    @Column("int")
    width: number;

    @Column("text")
    orientation: string;

    @Column()
    compressed: boolean;

    @Column("text")
    comment: string;


    @OneToOne(type => Photo, photo => photo.metadata)
    @JoinColumn()
    photo: Photo;
}