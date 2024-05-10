import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "../domain/tag";

@Entity()
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  static fromTag(tag: Tag): TagEntity {
    const tagEntity = new TagEntity();
    tagEntity.name = tag.name;
    return tagEntity;
  }

}