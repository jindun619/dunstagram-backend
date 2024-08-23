import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comments.entity';
import { Repository } from 'typeorm';
import { createCommentDTO } from './DTO/create-comment.dto';
import { updateCommentDTO } from './DTO/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  create(commentData: createCommentDTO) {
    return this.commentsRepository.save(commentData);
  }

  getAll() {
    return this.commentsRepository.find();
  }

  getOne(id: number) {
    return this.commentsRepository.findOne({ where: { id: id } });
  }

  update(id: number, commentData: updateCommentDTO) {
    return this.commentsRepository.update(id, commentData);
  }

  delete(id: number) {
    return this.commentsRepository.delete(id);
  }
}
