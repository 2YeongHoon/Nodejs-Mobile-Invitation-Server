import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn
} from 'typeorm'
import { WeddingInfo } from './WeddingInfo'
export type ImageTypeEnum = 'image' | 'main' | 'map'

@Entity()
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number

  @ManyToOne(() => WeddingInfo, weddingInfo => weddingInfo.idx)
  @JoinColumn()
  weddingInfo: WeddingInfo

  @Column({ nullable: true })
  imageKey: string

  @Column({
    type: 'set',
    enum: ['image', 'main', 'map'],
    default: ['image']
  })
  imageType: ImageTypeEnum[]
}
