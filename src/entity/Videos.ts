import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import { WeddingInfo } from "./WeddingInfo";

@Entity()
export class Videos extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    idx: number;

    @ManyToOne(() => WeddingInfo, (weddingInfo) => weddingInfo.idx)
    @JoinColumn()
    weddingInfo: WeddingInfo;

    @Column()
    videoKey: string;
}