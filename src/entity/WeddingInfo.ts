import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn, BaseEntity} from "typeorm";
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions";
import { Images } from "./Images";
import { User } from "./User";
import { Videos } from "./Videos";

export enum GroomRelationEnum {
    SON = "아들",
    SON1 = "장남",
    SON2 = "차남",
    SON3 = "삼남",
    SON4 = "사남",
    SON5 = "오남",
    SON6 = "육남",
    SON7 = "칠남",
    SON8 = "막내",
    SON9 = "조카",
    SON10 = "손자",
    SON11= "동생" 
}

export enum BrideRelationEnum {
    DAUTH = "딸",
    DAUTH1 = "장녀",
    DAUTH2 = "차녀",
    DAUTH3 = "삼녀",
    DAUTH4 = "사녀",
    DAUTH5 = "오녀",
    DAUTH6 = "육녀",
    DAUTH7 = "칠녀",
    DAUTH8 = "막내",
    DAUTH9 = "조카",
    DAUTH10 = "손자",
    DAUTH11 = "동생"
} 


// export type BrideRelationEnum = "딸"|"장녀"|"차녀"|"삼녀"|"사녀"|"오녀"|"육녀"|"칠녀"|"막내"|"조카"|"손자"|"동생"

@Entity()
export class WeddingInfo extends BaseEntity {

    @PrimaryGeneratedColumn()
    idx: number;

    // @OneToOne(() => User, (user) => user.idx)
    // @JoinColumn()
    // user: User;
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Images, (images) => images.idx)
    images: Images[];

    @OneToMany(() => Videos, (videos) => videos.idx)
    videos: Videos[];

    @Column({nullable: true})
    groomName: string;

    @Column({nullable: true})
    groomFather: string;
    
    @Column({nullable: true})
    groomMother: string;

    @Column({
        type: "enum",
        enum: GroomRelationEnum,
        default: "아들"
    })
    groomRelation: GroomRelationEnum[]

    @Column({nullable: true})
    groomPhone: string;

    @Column({nullable: true})
    groomBank: string;

    @Column({nullable: true})
    groomAccountOwn: string;

    @Column({nullable: true})
    groomAccountNum: string;

    @Column({nullable: true})
    brideName: string;

    @Column({nullable: true})
    brideFather: string;

    @Column({nullable: true})
    brideMother: string;

    @Column({
        type: "enum",
        enum: BrideRelationEnum,
        default: "딸"
    })
    brideRelation: BrideRelationEnum[]

    @Column({nullable: true})
    bridePhone: string;

    @Column({nullable: true})
    brideBank: string;

    @Column({nullable: true})
    brideAccountOwn: string;
    
    @Column({nullable: true})
    brideAccountNum: string;

    @Column({nullable: true})
    weddingHall: string;

    @Column({nullable: true})
    detailAddress: string;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    wayToCome: string;

    @Column({nullable: true})
    weddingDate: Date;

    @Column({nullable: true})
    greetingsTitle: string;

    @Column({nullable: true})
    greetingsBody: string;

    @Column({nullable: true})
    text: string;

    @Column({nullable: true})
    notice: string;
}
