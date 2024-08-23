import { Post } from 'src/posts/posts.entity';
import { User } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  post: Post;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  author: User;

  @Column()
  authorId: number;

  @Column()
  content: string;

  @Column()
  date: string;

  @Column()
  likes: number;
}
