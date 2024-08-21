import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreatePostDTO } from './DTO/create-post.dto';
import { UpdatePostDTO } from './DTO/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  create(postData: CreatePostDTO): Promise<Post> {
    const post = this.postsRepository.create(postData);
    return this.postsRepository.save(post);
  }

  getAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  getOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({ where: { id: id } });
  }

  update(id: number, postData: UpdatePostDTO): Promise<UpdateResult> {
    return this.postsRepository.update(id, postData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.postsRepository.delete(id);
  }
}
