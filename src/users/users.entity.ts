import { Post } from 'src/posts/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  profileImage: string;

  @OneToMany(() => Post, (post) => post.id, { onDelete: 'CASCADE' })
  posts: Post[];
}
