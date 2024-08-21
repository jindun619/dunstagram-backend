import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(postData: CreatePostDTO): Promise<Post> {
    const post = this.postsRepository.create(postData);
    return await this.postsRepository.save(post);
  }

  async getAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async getOne(id: number): Promise<Post> {
    const post = await this.postsRepository.findOne({ where: { id: id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async update(id: number, postData: UpdatePostDTO): Promise<UpdateResult> {
    const result = await this.postsRepository.update(id, postData);
    if (!result) {
      throw new NotFoundException('Post not found');
    }
    return result;
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.postsRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Post not found');
    }
    return result;
  }
}
