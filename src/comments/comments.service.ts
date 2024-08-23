import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comments.entity';
import { Repository } from 'typeorm';
import { createCommentDTO } from './DTO/create-comment.dto';
import { updateCommentDTO } from './DTO/update-comment.dto';
import { Post } from 'src/posts/posts.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(commentData: createCommentDTO) {
    const post = await this.postsRepository.findOne({
      where: { id: commentData.postId },
    });
    if (!post) {
      throw new NotFoundException(
        `Post with id ${commentData.postId} not found`,
      );
    }

    const comment = this.commentsRepository.create({
      ...commentData,
      post: post,
    });
    return await this.commentsRepository.save(comment);
  }

  async getAll() {
    return await this.commentsRepository.find({
      relations: ['author'],
    });
  }

  async getOne(id: number) {
    return await this.commentsRepository.findOne({
      where: { id: id },
      relations: ['author'],
    });
  }

  async update(id: number, commentData: updateCommentDTO) {
    return await this.commentsRepository.update(id, commentData);
  }

  async delete(id: number) {
    return await this.commentsRepository.delete(id);
  }
}
