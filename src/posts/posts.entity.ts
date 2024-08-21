import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  //author

  //images
  @Column()
  images: string[];

  //actions

  //content
  @Column()
  content: string;

  //date
  @Column()
  date: string;
}
