import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './DTO/create-post.dto';
import { UpdatePostDTO } from './DTO/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() postData: CreatePostDTO) {
    return this.postsService.create(postData);
  }

  @Get()
  getAll() {
    return this.postsService.getAll();
  }

  getOne(id: number) {
    return this.postsService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() postData: UpdatePostDTO) {
    return this.postsService.update(id, postData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.postsService.delete(id);
  }
}
