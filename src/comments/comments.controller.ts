import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { createCommentDTO } from './DTO/create-comment.dto';
import { updateCommentDTO } from './DTO/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() commentData: createCommentDTO) {
    return this.commentsService.create(commentData);
  }

  @Get()
  getAll() {
    return this.commentsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.commentsService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() commentData: updateCommentDTO) {
    return this.commentsService.update(id, commentData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.commentsService.delete(id);
  }
}
