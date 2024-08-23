import { Comment } from 'src/comments/comments.entity';
import { Post } from 'src/posts/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Post, (post) => post.id, { cascade: true })
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.id, { cascade: true })
  comments: Comment[];

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  profileImage: string;
}
