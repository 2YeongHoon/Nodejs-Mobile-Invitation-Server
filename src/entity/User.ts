import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import { WeddingInfo } from "./WeddingInfo";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    idx: number;

    @OneToOne(() => WeddingInfo, (weddingInfo) => weddingInfo.idx)
    @JoinColumn()
    weddingInfo: WeddingInfo;

    @Column({nullable: true})
    userName: string;

    @Column({nullable: true})
    userPass: string;
}
