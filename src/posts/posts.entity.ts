import { Comment } from 'src/comments/comments.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  author: User;

  @OneToMany(() => Comment, (comment) => comment.post, { cascade: true })
  comments: Comment[];

  @Column('text', { array: true })
  images: string[];

  @Column()
  likes: number;

  @Column()
  shares: number;

  @Column()
  content: string;

  @Column()
  date: string;
}
