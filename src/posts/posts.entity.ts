import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  //author

  //images
  @Column('text', { array: true })
  images: string[];

  //actions

  //content
  @Column()
  content: string;

  //date
  @Column()
  date: string;
}
