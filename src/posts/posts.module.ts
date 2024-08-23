import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { User } from 'src/users/users.entity';
import { Comment } from 'src/comments/comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User, Comment])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
