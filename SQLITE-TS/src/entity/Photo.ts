import {Entity, Column, PrimaryGeneratedColumn,OneToOne, ManyToOne,ManyToMany} from "typeorm";
import {PhotoMetadata} from "./PhotoMetadata";
import {Author} from "./Author";
import {Album} from "./Album";
@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    description: string;

    @Column("text")
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(type => PhotoMetadata, metadata => metadata.photo, {
        cascade: true,
    })
    metadata: PhotoMetadata;

    @ManyToOne(type => Author, author => author.photos)
    author: Author;

    @ManyToMany(type => Album, album => album.photos)
    albums: Album[];
}