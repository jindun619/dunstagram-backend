import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreatePostDTO } from './DTO/create-post.dto';
import { UpdatePostDTO } from './DTO/update-post.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(postData: CreatePostDTO): Promise<Post> {
    const user = await this.usersRepository.findOne({
      where: { id: postData.authorId },
    });
    if (!user) {
      throw new NotFoundException(
        `User with id ${postData.authorId} not found`,
      );
    }

    const post = this.postsRepository.create({
      ...postData,
      author: user,
    });
    return await this.postsRepository.save(post);
  }

  async getAll(): Promise<Post[]> {
    return await this.postsRepository.find({
      relations: ['author', 'comments'],
    });
  }

  async getOne(id: number): Promise<Post> {
    const post = await this.postsRepository.findOne({
      where: { id: id },
      relations: ['author', 'comments'],
    });
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
    return await this.postsRepository.delete(id);
  }
}
