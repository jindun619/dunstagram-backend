import { User } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts, { cascade: true })
  User: User;

  @Column()
  authorId: number;

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
