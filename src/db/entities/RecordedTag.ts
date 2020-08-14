import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class RecordedTag extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
    })
    public id!: number;

    @Column()
    public name!: string; // タグ名

    @Column()
    public halfWidthName!: string; // 検索用の name を半角化したもの

    @Column()
    public color!: string; // 色
}
